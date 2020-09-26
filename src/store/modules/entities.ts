import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";
import elementVariables from "@/styles/element-variables.scss";
import axios from "axios";
import { BaseContent } from '@/models/BaseProperty';

axios.defaults.baseURL = "http://52.152.148.181:3000/";

export interface IEntitiesState {
  theme: string;
  properties: any[];
  currentEntity: any[];
}

@Module({ dynamic: true, store, name: "entities" })
class Entities extends VuexModule implements IEntitiesState {
  public theme = elementVariables.theme;
  public properties: any = [];
  public currentEntity: any = {};

  get getProperties() {
    return this.properties
  }

  get getCurrentEntity() {
    return this.currentEntity
  }
  
  @Mutation
  private SET_PROPERTIES(payload: any[]) {
    this.properties = payload;
  }

  @Mutation
  public SET_CURRENT_ENTITIY(payload: any[]) {
    this.currentEntity = payload;
  }

  @Action
  public async setProperties(payload: string) {
    try {
      const result = await axios.get("api/" + payload);
      this.SET_PROPERTIES(result.data);
    } catch(e) {
      this.SET_PROPERTIES({});
    }
  }
}

export const EntitiesModule = getModule(Entities);
