import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

import { Loading } from 'element-ui'
import { getApplicationPreferences, getEntities, getFlexApplicationPreferences, getForms } from '@/api/appCache';

import { Entity } from '@/models/Entity';
import { getRecentItems } from '@/api/data';
import { ItemInstance } from '@/models/ItemInstance';
import { FlexApplicationPreferences } from '@/models/FlexApplicationPreferences';
import { ApplicationPreference } from '@/models/ApplicationPreference';
export interface IAppCache {

    Prefrences: ApplicationPreference[]
    FlexSettings: FlexApplicationPreferences
    Entities: Entity[]
    RecentItems: ItemInstance[]
    Forms: ItemInstance[]
}


@Module({ dynamic: true, store, name: 'appCache' })
class AppCacheMod extends VuexModule implements IAppCache {
    public Prefrences: ApplicationPreference[] = [];
    public FlexSettings: FlexApplicationPreferences ={};
    public Entities: Entity[] = [];
    public RecentItems: ItemInstance[] = [];
    public Forms: ItemInstance[] = [];



    @Mutation
    private SET_DATA(pref: ApplicationPreference[] | any[]) {
        // const pref = AppDataModule.getApiData(ApiEndpoints.APPLICATIONPREFERENCES)
        this.Prefrences = pref;
    }
    @Mutation
    private SET_FLEX_SETTINGS(data: FlexApplicationPreferences) {
        this.FlexSettings = data;
    }
    @Mutation
    private SET_ENTITIES(data: any[]) {
        this.Entities = data;
    }


    @Mutation
    private CHANGE_SETTING(payload: { key: string, value: any }) {
        const { key, value } = payload
        if (Object.prototype.hasOwnProperty.call(this, key)) {
            (this as any)[key] = value
        }
    }

    @Action
    public ChangeSetting(payload: { key: string, value: any }) {
        this.CHANGE_SETTING(payload)
    }

    @Action
    public async getPrefrences() {
        const rs = await getApplicationPreferences();
      
        this.SET_DATA(rs)
    }

    @Action
    public async getFlexSettings() {
        const rs = await getFlexApplicationPreferences();
        this.SET_FLEX_SETTINGS(rs)
    }

    @Action
    public async getEntities() {
        const rs = await getEntities();
        this.SET_ENTITIES(rs)
    }

    @Mutation
    private SET_RECENT(rs: ItemInstance[]) {
        
        this.RecentItems = rs;
    }
    @Action
    public async getRecentItems() {
        const rs = await getRecentItems(10);
        this.SET_RECENT(rs)
    }


    @Action
    public async getForms() {
        const rs = await getForms();
        this.SET_FORMS(rs)
    }
    @Mutation
    SET_FORMS(rs: ItemInstance[]) {
     
        this.Forms = rs;
    }

    @Action
    public async getCache() {
        await this.getFlexSettings();
        await this.getPrefrences();
        await this.getEntities()
        await this.getForms();
        await this.getRecentItems();

    }
}

export const AppCacheModule = getModule(AppCacheMod)
