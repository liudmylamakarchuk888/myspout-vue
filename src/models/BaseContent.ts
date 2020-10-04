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

}

export class BaseContent implements IBaseContent {
    description: string   ='';
    displayNameLanguageKey: string=''  ;
    descriptionLanguageKey: string =''  ;
    languageTranslations: LanguageTranslation[] = [];
    notes: string   ='';
    selected: Boolean =false;
    hideProperty: Boolean =true; 
    systemName!: string;
    displayName!: string;


    // get GetdisplayName(): string {
    //     return this._displayName
    // }
    // set SetdisplayName(val) {
    //     this._displayName = val;
    //     if (!this.systemName) {
    //         this._systemName = "cse_" + val.toString().toLowerCase().replaceAll(' ', '')
    //     }
    // }
    // get GetsystemName(): string {
    //     return this.systemName
    // }
    // set SetsystemName(val) {
    //     this.systemName = val;
    // }

    constructor() {
    }
}