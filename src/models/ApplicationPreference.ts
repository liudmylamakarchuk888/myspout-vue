import { UserModule } from '@/store/modules/user';
import { CreateUUID } from '@/utils/helper';
import { BaseContent, IBaseContent } from './BaseContent';
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
    clientId: string;
    createdBy?: string;
    dataType?: string;
    dateCreated?: number;
    dateModified?: number;
    deleted: boolean = false;
    entityName?: string = '';
    environmentApplicationPreference: boolean = false;
    id?: string = '';
    itemType?: number = 0;
    lookupEntityId?: string = '';
    lookupValueName?: string = '';
    modifiedBy?: string;
    newInstance: boolean = true;
    outOfTheBox: boolean = false;
    value?: string = '';

    /**
     *
     */
    constructor() {
        super();
        this.clientId = CreateUUID();
        this.createdBy = UserModule.name;

        this.dateCreated = Number(new Date());
        this.dateModified = Number(new Date());
        this.modifiedBy = UserModule.name;
        this.newInstance = true;

    }

}
