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
 
Vue.use(Vuex)
 

//Vue.axios.defaults.baseURL = "http://52.152.148.181:3000/";


export interface IRootState {
  entities: IEntitiesState
  app: IAppState
  // user: IUserState
  // tagsView: ITagsViewState
  // errorLog: IErrorLogState
  // permission: IPermissionState
  // settings: ISettingsState
  // AppData:IAppData
}


// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
