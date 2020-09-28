import { UserModule } from '@/store/modules/user';
import { UserInfo } from 'os';
import { utils } from 'xlsx/types';
import { BaseContent,IBaseContent } from './BaseContent';
import { LanguageTranslation } from './LanguageTranslation';
import { newUuid } from './Utils/index'
export interface IApplicationPreference extends IBaseContent {
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

export class ApplicationPrefrence extends BaseContent implements IApplicationPreference {
    category?: string = 'ADDED_APPLICATION_PREFERENCES';
    clientId?: string = newUuid();
    createdBy?: string = UserModule.name;
    dataType?: string = '';
    dateCreated?: number = Number(new Date());
    dateModified?: number = Number(new Date());
    deleted: boolean = false;
    entityName?: string = '';
    environmentApplicationPreference: boolean = false;
    id?: string = '';
    itemType?: number = 0;
    lookupEntityId?: string = '';
    lookupValueName?: string = '';
    modifiedBy?: string = UserModule.name;
    newInstance: boolean = true;
    outOfTheBox: boolean = false;
    value?: string = '';


}
