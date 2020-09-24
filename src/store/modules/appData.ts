import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import axios from 'axios'
import { mapGetters } from 'vuex';
import local from '@/views/i18n-demo/local';
import { error } from 'console';

export interface IAppData {
    Cache: any[]
    RecentItems:any[]
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


    get RecentItems() {
        return <ItemInstance[]>JSON.parse(localStorage.getItem(ApiEndpoints.RECENTITEMS))
    }
    get Entities() {
        //return JSON.parse(localStorage.getItem('Entities'));
        return JSON.parse(localStorage.getItem(ApiEndpoints.ENTITIES));
    }

    get FlexApplicationPreferences() {
        return JSON.parse(localStorage.getItem(ApiEndpoints.FLEXAPPLICATIONPREFERENCES));
    }
    get AppSettings() {
        return this.FlexApplicationPreferences.AppSettings;
    }

    get Forms(){
    return <ItemInstance[]>JSON.parse(localStorage.getItem(ApiEndpoints.FORMS));
    }

    get AuthorizableEntities(){
        return JSON.parse(localStorage.getItem(ApiEndpoints.AUTHORIZABLEENTITIES))
    }

    async tryGetData(key:string){
        if(window.localStorage[key]){
            let cachedData:string = window.localStorage.getItem(key) ;
            return JSON.parse(cachedData)
        }
        else{
          await this.context.commit('getApiData',key)
        }
    }
 
    get IsAppBusy(){
        return this.ApplicationBusy;
    }
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
            (this as any)[ApplicationBusy]=isbusy;
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
       //const cacheName: string = payload.trim();
       
        if (localStorage[cacheName]) {
            console.log(`${cacheName} reading from cache `);
            this.Cache[cacheName] = JSON.parse(localStorage.getItem(cacheName));
            return this.Cache[cacheName];
        }
        

        axios.get('api/' + payload)
            .then((result: { data: any }) => {

            localStorage.setItem(cacheName, JSON.stringify(result.data));            
            this.SetCache(cacheName, result.data);
        }).catch((error: any) => {
            //throw new Error(`API ERROR ${payload} =>${error}`);
            console.error(`API ERROR ${payload} =>${error}`);
        });
        
    
    }

    @Action
    public ChangeSetting(payload: { key: string, value: any }) {
        this.CHANGE_SETTING(payload)
    }

    @Action
    getAppCache() {
        console.log('getting app cache')
 
        this.setAppState(true);
       
        
        this.getApiData(ApiEndpoints.APPLICATIONPREFERENCES)
        this.getApiData(ApiEndpoints.FORMSAPPLICATIONPREFERENCES)
        
        this.getApiData(ApiEndpoints.FLEXAPPLICATIONPREFERENCES)
        this.getApiData(ApiEndpoints.ICONSINFOLDER)
        
        this.getApiData(ApiEndpoints.RECENTITEMS)
        this.getApiData(ApiEndpoints.MYWORKPOLICIES)
        this.getApiData(ApiEndpoints.ENTITIES)
   
        this.getApiData(ApiEndpoints.AUTHORIZABLEENTITIES)
        this.getApiData(ApiEndpoints.WORKFLOWS)
        
        this.getApiData(ApiEndpoints.FORMS)
        this.getApiData(ApiEndpoints.MYWORKCALENDARS)
        this.getApiData(ApiEndpoints.ENTITYRELATIONSHIPICONS)
 
         
        this.getApiData(ApiEndpoints.DIALOGROLES)
        this.getApiData(ApiEndpoints.PRODUCTS)

        this.getApiData(ApiEndpoints.ORCHESTRATORS)
        this.getApiData(ApiEndpoints.AVAILABLEORCHESTRATORILIOS)
        this.getApiData(ApiEndpoints.AVAILABLEORCHESTRATOROLIOS)


        // this.getApiData('getGeneralApplicationInformation','com.msp.flex.view.gai.MyWorkPoliciesAssignmentOrderRequest')
        // this.getApiData('getGeneralApplicationInformation','com.msp.flex.view.gai.EntityReportOrderApplicationInformationRequest')
        // this.getApiData('getGeneralApplicationInformation','com.msp.flex.view.gai.ApplicationPreferenceCategoriesRequest')
        // this.getApiData('getGeneralApplicationInformation','com.msp.flex.view.gai.DisplayLanguagesRequest')
        

        // this.getApiData('getFlexApplicationPreferences');
        // this.getApiData('recentItems');
        // this.getApiData('getEntities');
        // this.getApiData('getForms');
        // this.getApiData('getAuthorizableEntities');
        this.setAppState(false);

        console.log('app cache loaded.')
    }
    @Mutation
    setAppBusy(value: boolean) {
        this.setAppState(value)
    }




}



export enum ApiEndpoints{
	FORMSAPPLICATIONPREFERENCES= 'getFormsApplicationPreferences',
	MYWORKPOLICIES= 'getMyWorkPolicies',
	ENTITIES= 'getEntities',
	ORCHESTRATORS= 'getOrchestrators',
	AUTHORIZABLEENTITIES= 'getAuthorizableEntities',
	WORKFLOWS='getWorkflows',    
	RECENTITEMS= 'recentItems',
	FLEXAPPLICATIONPREFERENCES= 'getFlexApplicationPreferences',
	FORMS= 'getForms',
	MYWORKCALENDARS= 'getMyWorkCalendars',
	ENTITYRELATIONSHIPICONS= 'getEntityRelationshipIcons',
	AVAILABLEORCHESTRATORILIOS= 'getAvailableOrchestratorIlios',
	AVAILABLEORCHESTRATOROLIOS= 'getAvailableOrchestratorOlios',
	ICONSINFOLDER='getIconsInFolder',     
	DIALOGROLES= 'getDialogRoles',
	PRODUCTS= 'getProducts',
	APPLICATIONPREFERENCES= 'getApplicationPreferences',
}
export const AppDataModule = getModule(AppData)


