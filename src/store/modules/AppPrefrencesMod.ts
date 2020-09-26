import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'

import store from '@/store'
import { ApplicationPreference } from '@/models/ApplicationPreference'
import { ApiEndpoints, AppDataModule } from '@/store/modules/appData'
import { getApplicationPreferences } from '@/api/appCache'
@Module({ dynamic: true, store, name: 'appPrefrences' })
class AppPrefrencesMod extends VuexModule {

    public Data: ApplicationPreference[] = [];

    @Mutation
    private SET_DATA(pref: ApplicationPreference[] | any[]) {
        // const pref = AppDataModule.getApiData(ApiEndpoints.APPLICATIONPREFERENCES)
        this.Data = pref;
    }
    @Action
    public async getPrefrences() {
        const rs = await getApplicationPreferences();
      
        this.SET_DATA(rs)
    }

}

export const AppPrefrencesModule = getModule(AppPrefrencesMod)
