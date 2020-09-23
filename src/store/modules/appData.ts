import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import axios from 'axios'
import { mapGetters } from 'vuex';
import local from '@/views/i18n-demo/local';

export interface IAppData {
    Cache: any[]
    AppSettings: any
    AppFlexSettings: any
    Recents: any
    Entities: any[]
    Forms:any[]
}

axios.defaults.baseURL = "http://52.152.148.181:3000/";


@Module({ dynamic: true, store, name: 'appData' })
class AppData extends VuexModule implements IAppData {
    Cache: any[] = [];

    get AppFlexSettings() {
        return this.FlexApplicationPreferences();
    }


    get Recents() {
        return JSON.parse(localStorage.getItem('recentItems'))
    }
    get Entities() {
        //return JSON.parse(localStorage.getItem('Entities'));
        return JSON.parse(localStorage.getItem('Entities'));
    }

    get FlexApplicationPreferences() {
        return JSON.parse(localStorage.getItem('FlexApplicationPreferences'));
    }
    get AppSettings() {
        return this.FlexApplicationPreferences.AppSettings;
    }

    get Forms(){
    return JSON.parse(localStorage.getItem('Forms'));
    }

    getStoredItem(key: string) {
        return this.getApiData(key)
    }
    //Vue.axios.defaults.baseURL = "http://52.152.148.181:3000/";
    public ApplicationBusy: boolean = false;
    @Mutation
    private CHANGE_SETTING(payload: { key: string, value: any }) {
        const { key, value } = payload
        if (Object.prototype.hasOwnProperty.call(this, key)) {
            (this as any)[key] = value
        }
    }

    @Mutation
    setAppState(isbusy: boolean) {
        //const {key} = isbusy;
        if (Object.prototype.hasOwnProperty.call(this, isbusy)) {
            (this as any)[isbusy]();
        }
        // this.ApplicationBusy = isbusy;
    }
    @Mutation
    SetCache(key, value) {
        this.Cache[key] = value;
    }

    @Mutation
    private getApiData(payload: string) {
        const cacheName: string = payload.replace('get', '');
        console.log("getting ." + cacheName)
        if (localStorage[cacheName]) {
            console.log(`${cacheName} reading from cache `);
            this.Cache[cacheName] = JSON.parse(localStorage.getItem(cacheName));
            return this.Cache[cacheName];
        }
        else {
            axios.get('http://52.152.148.181:3000/api/' + payload).then((result: { data: any }) => {

                localStorage.setItem(cacheName, JSON.stringify(result.data));
                //this.Cache[cacheName] = result.data;
                //this.$store.state[cacheName] = result.data;
                //store.state[cacheName] = result.data;
                this.SetCache(cacheName, result.data);
            }).catch((error: any) => {
                throw new Error(`API ${error}`);
            });
        }
        // console.log("done ." + payload)
    }

    @Action
    public ChangeSetting(payload: { key: string, value: any }) {
        this.CHANGE_SETTING(payload)
    }

    @Action
    getAppCache() {
        console.log('getting app cache')
        //this.context.commit('setAppState', 'true');
        this.setAppState(true);
        //this.context.commit('getApiData', 'recentItems');

        this.getApiData('getFlexApplicationPreferences');
        this.getApiData('recentItems');
        this.getApiData('getEntities');
        this.getApiData('getForms');

        this.getApiData('getAuthorizableEntities');
        this.setAppState(false);

        console.log('app cache loaded.')
    }
    @Mutation
    setAppBusy(value: boolean) {
        this.setAppState(value)
    }




}

export const AppDataModule = getModule(AppData)
