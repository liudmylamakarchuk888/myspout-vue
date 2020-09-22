import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store' 
import axios from 'axios' 
 
export interface IAppData {

    AppSettings: any
    AppFlexSettings: any
    Recents: any
}
@Module({ dynamic: true, store, name: 'appData' })
class AppData extends VuexModule implements IAppData {
    public AppSettings: any
    public AppFlexSettings: any
    public Recents: any

    public Cache: any;

    get getRecentItems() {
        //return this.Cache['recentItems'];
        return this.getApiData('recentItems');
    }
    //Vue.axios.defaults.baseURL = "http://52.152.148.181:3000/";
    ApplicationBusy: any
    @Mutation
    private CHANGE_SETTING(payload: { key: string, value: any }) {
        const { key, value } = payload
        if (Object.prototype.hasOwnProperty.call(this, key)) {
            (this as any)[key] = value
        }
    }
    @Mutation
    setAppState(isbusy: boolean) {
        this.ApplicationBusy = isbusy;
    }
    @Mutation
    getApiData(payload: string) {
        const cacheName: string = payload.replace('get', '');
        // console.log("getting ." + cacheName)
        if (localStorage[cacheName]) {
            console.log(`${cacheName} reading from cache `);
            // this.Cache[cacheName] = JSON.parse(localStorage.getItem(cacheName));

        }
        else {
            getRecentItems({
                url: 'http://52.152.148.181:3000/api/' + payload,
                method: 'get'
            }).then((result: { data: any }) => {
  
                // axios.get('http://52.152.148.181:3000/api/' + payload).then((result: { data: any }) => {

                localStorage.setItem(cacheName, JSON.stringify(result.data));
                this.Cache[cacheName] = result.data;

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
    getAppCache({ }) {
        this.setAppState(true);

        this.getApiData('getFlexApplicationPreferences');
        this.getApiData('recentItems');
        this.getApiData('getEntities');
        this.getApiData('getForms');

        this.getApiData('getAuthorizableEntities');
        this.setAppState(false);
    }
    @Mutation
    setAppBusy(value: boolean) {
        this.setAppState(value)
    }
    commit(value: string) {
        this.getApiData(value);
    }


}

export const AppDataModule = getModule(AppData)
