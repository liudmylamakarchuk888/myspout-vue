import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

import store from '@/store'
import { ApplicationPreference } from '@/models/ApplicationPreference'
import { ApiEndpoints, AppDataModule } from '@/store/modules/appData'
import { FlexApplicationPreferences } from '@/models/FlexApplicationPreferences';
import { getFlexApplicationPreferences } from '@/api/appCache';

@Module({ dynamic: true, store, name: 'flexPrefrences' })
class AppFlexPrefrencesMod extends VuexModule {

    public Data: FlexApplicationPreferences = [];

    @Mutation
    private SET_DATA(data: FlexApplicationPreferences) {
          this.Data = data;

    }
    @Action
    public async getFlexPrefrences() {
        const rs = await getFlexApplicationPreferences();
        this.SET_DATA(rs)
    }

    get propertyDataTypes() {
        return this.Data.propertyDataTypes;
    }
}

export const FlexPrefrencesModule = getModule(AppFlexPrefrencesMod)
