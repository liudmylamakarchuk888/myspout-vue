import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import axios from 'axios'
import { ItemInstance } from '@/models/ItemInstance'
import { FlexApplicationPreferences } from '@/models/FlexApplicationPreferences';
import { Node } from '@/models/Node'
import { Entity } from '@/models/Entity';
import { ApplicationPreference } from '@/models/ApplicationPreference';
import local from '@/views/i18n-demo/local';
export interface IAppData {
    Cache: any[]
    RecentItems: ItemInstance[]

    FlexApplicationPreferences: FlexApplicationPreferences[]
    Entities: any[]
    Forms: ItemInstance[]
}

axios.defaults.baseURL = "http://52.152.148.181:3000/";


@Module({ dynamic: true, store, name: 'appData' })
class AppData extends VuexModule implements IAppData {

    Cache: any[] = [];

    get AppFlexSettings() {
        return this.FlexApplicationPreferences;
    }


    get RecentItems() {

        return JSON.parse(localStorage.getItem(ApiEndpoints.RECENTITEMS)) as ItemInstance[]
    }
    get Entities() {

        return JSON.parse(localStorage.getItem(ApiEndpoints.ENTITIES)) as Entity[];
    }

    get FlexApplicationPreferences() {
        return JSON.parse(localStorage.getItem(ApiEndpoints.FLEXAPPLICATIONPREFERENCES)) as FlexApplicationPreferences[];
    }


    get Forms() {
        return JSON.parse(localStorage.getItem(ApiEndpoints.FORMS)) as ItemInstancep[]
    }

    get AuthorizableEntities() {
        return JSON.parse(localStorage.getItem(ApiEndpoints.AUTHORIZABLEENTITIES)) as Node
    }
    get ApplicationPrefrences() {
        return JSON.parse(localStorage.getItem(ApiEndpoints.APPLICATIONPREFERENCES)) as ApplicationPreference[]
    }


    public tryGetData<T>(key: string): T {
        if (window.localStorage[key]) {
            const dataStr = localStorage.getItem(key);

            return JSON.parse(dataStr) as T
        }

        return this.context.commit('getApiData', key)
    }

    get IsAppBusy() {
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
            (this as any)['ApplicationBusy'] = isbusy;
        }
        // this.ApplicationBusy = isbusy;
    }
    @Mutation
    SetCache(key: string, value: any) {
        this.Cache[key] = value;
    }

    @Mutation
    public getApiData(payload: string) {
        const cacheName: string = payload.replace('get', '');
        //const cacheName: string = payload.trim();

        if (localStorage[cacheName]) {
            console.log(`${cacheName} reading from cache `);
            const cache = localStorage.getItem(cacheName);
            this.Cache[cacheName] = JSON.parse(cache);
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
    getData(payload: string) {
        this.getApiData(payload)
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



export enum ApiEndpoints {
    FORMSAPPLICATIONPREFERENCES = 'getFormsApplicationPreferences',
    MYWORKPOLICIES = 'getMyWorkPolicies',
    ENTITIES = 'getEntities',
    ORCHESTRATORS = 'getOrchestrators',
    AUTHORIZABLEENTITIES = 'getAuthorizableEntities',
    WORKFLOWS = 'getWorkflows',
    RECENTITEMS = 'recentItems',
    FLEXAPPLICATIONPREFERENCES = 'getFlexApplicationPreferences',
    FORMS = 'getForms',
    MYWORKCALENDARS = 'getMyWorkCalendars',
    ENTITYRELATIONSHIPICONS = 'getEntityRelationshipIcons',
    AVAILABLEORCHESTRATORILIOS = 'getAvailableOrchestratorIlios',
    AVAILABLEORCHESTRATOROLIOS = 'getAvailableOrchestratorOlios',
    ICONSINFOLDER = 'getIconsInFolder',
    DIALOGROLES = 'getDialogRoles',
    PRODUCTS = 'getProducts',
    APPLICATIONPREFERENCES = 'getApplicationPreferences',
}
export const AppDataModule = getModule(AppData)


