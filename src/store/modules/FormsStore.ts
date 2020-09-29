import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

import { getForm, getForms } from '@/api/formApi';
import { ItemInstance } from '@/models/ItemInstance';

export interface IFormsData {
    Forms: ItemInstance[],
    ActiveForm: any
}

@Module({ dynamic: true, store, name: 'formsMod' })
class FormsMod extends VuexModule implements IFormsData {
    ActiveForm: any;
    public Forms: any[] = [];


    @Action
    public async getForms() {
        const rs = await (await getForms());
        this.SET_FORMS(rs)
    }
    @Mutation
    SET_FORMS(rs: ItemInstance[]) {

        this.Forms = rs;
    }


    @Action
    public async getCache() {
        await this.getForms();
    }


    @Mutation
    private SET_ACTIVE_FORM(rs: any) {
        this.ActiveForm = rs;
    }
    @Action
    public async getActiveForm(formid: string) {
        debugger
        const rs = await getForm(formid)
        debugger
       // this.SET_ACTIVE_FORM(rs)
        return rs

    }

}

export const FormsModule = getModule(FormsMod)
