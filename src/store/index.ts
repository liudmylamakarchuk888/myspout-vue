import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { IAppState } from './modules/app'
import { IUserState } from './modules/user'
import { ITagsViewState } from './modules/tags-view'
import { IErrorLogState } from './modules/error-log'
import { IPermissionState } from './modules/permission'
import { ISettingsState } from './modules/settings'
import { IAppData } from './modules/appData'
import { IEntitiesState } from './modules/entities'
import { FlexPrefrencesModule } from './modules/AppFlexPrefrencesMod'
import { ApplicationPreference } from '@/models/ApplicationPreference';
import { FlexApplicationPreferences } from '@/models/FlexApplicationPreferences';
import { IAppCache } from './modules/appCache'
import { IFormsData} from './modules/FormsStore'
Vue.use(Vuex)


//Vue.axios.defaults.baseURL = "http://52.152.148.181:3000/";


export interface IRootState {
  entities: IEntitiesState
  app: IAppState
  user: IUserState
  // tagsView: ITagsViewState
  // errorLog: IErrorLogState
  // permission: IPermissionState
  // settings: ISettingsState
  appCache: IAppCache,
  formsMod:IFormsData
}


// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
