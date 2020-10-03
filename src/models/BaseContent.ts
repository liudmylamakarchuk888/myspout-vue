import { LanguageTranslation } from './LanguageTranslation';
import { newGuid } from './Utils';

export interface IBaseContent {

    description: string ;
    displayName: string;
    displayNameLanguageKey: string;
    descriptionLanguageKey: string;
    languageTranslations: LanguageTranslation[];
    notes: string;
    systemName: string;
    selected: Boolean;
    hideProperty: Boolean;
    clientId: String;

}

export class BaseContent implements IBaseContent {
    description: string   ='';
    displayNameLanguageKey: string=''  ;
    descriptionLanguageKey: string =''  ;
    languageTranslations: LanguageTranslation[] = [];
    notes: string   ='';
    selected: Boolean =false;
    hideProperty: Boolean =true;
    clientId: String;
    private _systemName!: string;
    private _displayName!: string;


    get displayName(): string {
        return this._displayName
    }
    set displayName(val) {
        this._displayName = val;
        if (!this.systemName) {
            this._systemName = "cse_" + val.toString().toLowerCase().replaceAll(' ', '')
        }
    }
    get systemName(): string {
        return this._systemName
    }
    set systemName(val) {
        this._systemName = val;
    }

    constructor() {

        this.clientId = newGuid()
    }
}