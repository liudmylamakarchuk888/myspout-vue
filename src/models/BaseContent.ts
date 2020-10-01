import { LanguageTranslation } from './LanguageTranslation';

export interface IBaseContent {

    description: string;
    displayName: string;
    displayNameLanguageKey: string;
    descriptionLanguageKey: string;
    languageTranslations: LanguageTranslation[];
    notes: string;
    systemName: string;

}

export class BaseContent implements IBaseContent {
    description: string = '';
    displayName: string = '';
    displayNameLanguageKey: string = '';
    descriptionLanguageKey: string = '';
    languageTranslations: LanguageTranslation[] = [];
    notes: string = '';
    systemName: string = '';


    // get displayName() {
    //     return this.displayName
    // }
    // set displayName(val) {
    //     this.displayName = val;
    //     this.systemName = "cse_" + val.toString().toLowerCase().replace(' ', '')
    // }
    // get systemName() {
    //     return this.systemName
    // }
    // set systemName(val) {
    //     this.systemName = val;
    // }
    /**
     *
     */
    constructor() {


    }
}