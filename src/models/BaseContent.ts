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

}