import { LanguageTranslation } from './LanguageTranslation';

export interface BaseContent {

    description: string;
    displayName: string;
    displayNameLanguageKey: string;
    descriptionLanguageKey: string;
    languageTranslations: LanguageTranslation[];
    notes: string;
    systemName: string;

}
