import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import elementVariables from '@/styles/element-variables.scss'
import axios from 'axios'

export interface IEntitiesState {
  theme: string
  properties:any[]
  currentEntity:any[]
}

export const getApiData = async(payload: string) => {
  try {
    const {data} = await axios.get('api/' + payload)
    return data
  } catch(error) {
    console.error(`API ERROR ${payload} =>${error}`);
  }
  return []
}

@Module({ dynamic: true, store, name: 'entities' })
class Entities extends VuexModule implements IEntitiesState {
  public theme = elementVariables.theme
  public properties: any[] = []
  public currentEntity: any[] = []

  @Mutation
  private SET_PROPERTIES(payload: any[]) {
    this.properties = payload
  }

  @Mutation
  SET_CURRENT_ENTITIY(payload: any[]) {
    this.currentEntity = payload;
  }

  @Action
  public async setProperties(payload: string) {
    const result = await getApiData(payload)
    this.SET_PROPERTIES(result)
  }
}

export const EntitiesModule = getModule(Entities)
