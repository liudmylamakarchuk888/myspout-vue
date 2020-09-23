import { BaseContent } from './BaseContent';
import { KeyValue } from './KeyValue';
import { Status } from './Status';
import { BaseProperty } from './BaseProperty';
import { Restriction } from './Restriction';
import { TextAssembly } from './TextAssembly';
import { EntityRelationship } from './EntityRelationship';

export interface Entity extends BaseContent {

    clientID: string;
    createNotification: Notification;
    createdBy: string;
    dateCreated: string;
    dateModified: string;
    defaultColumns: KeyValue[];
    deleteNotification: Notification;
    discipline: KeyValue;
    entityRelationship: EntityRelationship;
    lookupDefaultNameFormat: TextAssembly;
    modifiedBy: string;
    modifyNotification: Notification;
    reportFilter: Restriction;

    properties: BaseProperty[] | any[];
    sql: string;
    sqlConnection: KeyValue;
    status: Status[];
    milestonesTableProperty: string;
    milestonesTableDueDateProperty: string;
    milestonesTableStatusProperty: string;
    milestonesTableStatusDeliverableStatusProperty: string;
    milestonesTableDescriptionProperty: string;
    milestonesTableOwnerProperty: string;
    activityOwnerProperty: string;
    goalsProperty: string;
    enableForExecutionCenter: boolean;
    allowCreatingReport: boolean;
    canChangeAttachmentSupport: boolean;
    canChangeFollowersSupport: boolean;
    canChangeIntegrationSupport: boolean;
    creationPolicyType: number;
    createURL: string;
    databaseTableName: string;
    defaultURL: string;
    deleted: boolean;
    editURL: string;
    icon: string;
    id: string;
    listURL: string;
    managementPolicy: number;
    managementGenericURL: string;
    newInstance: boolean;
    outOfTheBox: boolean;
    supportAttachments: boolean;
    supportIntegration: boolean;
    appearInRecentVisit: boolean;
    primaryNamePropertySystemName: string;
    cfgItemUniquePropertySystemName: string;
    reportDisplayIndexPosition: number;
    supportFollowers: boolean;
    supportTimeTracking: boolean;
    supportIndexPosition: boolean;
    supportTree: boolean;
    supportWorkflowConfiguration: boolean;
    virtual: boolean;
    supportFormConfiguration: boolean;
    entityName: string;
    itemType: number;
}


