import { BaseContent } from './BaseContent';

export interface ApplicationPreference extends BaseContent {
    category?: string;
    clientId?: string;
    createdBy?: string;
    dataType?: string;
    dateCreated?: number;
    dateModified?: number;
    deleted: boolean;

    entityName?: string;
    environmentApplicationPreference: boolean;
    id?: string;
    itemType?: number;
    lookupEntityId?: string;
    lookupValueName?: string;
    modifiedBy?: string;
    newInstance: boolean;

    outOfTheBox: boolean;

    value?: string;
}


