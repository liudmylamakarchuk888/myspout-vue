import { BaseContent } from './BaseContent';
import { KeyValue } from './KeyValue';
import { Status } from './Status';
import { BaseProperty } from './BaseProperty';
import { Restriction } from './Restriction';
import { TextAssembly } from './TextAssembly';
import { EntityRelationship } from './EntityRelationship';
import { CreateUUID } from '@/utils/helper';
import { UserModule } from '@/store/modules/user';
import { Notification } from './Notification';
import { newGuid } from './Utils';


export class Entity extends BaseContent {

    constructor() {
        super();
        this.clientID = newGuid()
        this.newInstance = true;
        this.createNotification = {} as any
        this.defaultColumns = this.getDefaultColumns()

    }
    clientID: string = CreateUUID();
    newInstance: boolean| undefined 

    createNotification: Notification;
    createdBy: string = UserModule.name;
    dateCreated: Number = new Number(new Date());
    dateModified: Number = new Number(new Date());
    defaultColumns: KeyValue[] = [];
    deleteNotification: Notification | undefined
    discipline: KeyValue | undefined
    entityRelationship: EntityRelationship ={} as any 
    lookupDefaultNameFormat: TextAssembly = {} as any;
    modifiedBy: string = UserModule.name;
    modifyNotification: Notification = {} as any;
    reportFilter: Restriction = {} as any;
    properties: BaseProperty[]  | undefined ;
    sql: string |undefined;
    sqlConnection: KeyValue = {} as any;
    status: Status[] = [];
    milestonesTableProperty: string | undefined
    milestonesTableDueDateProperty: string | undefined
    milestonesTableStatusProperty: string | undefined
    milestonesTableStatusDeliverableStatusProperty: string | undefined
    milestonesTableDescriptionProperty: string | undefined
    milestonesTableOwnerProperty: string | undefined
    activityOwnerProperty: string | undefined
    goalsProperty: string | undefined
    enableForExecutionCenter: boolean = false;
    allowCreatingReport: boolean = false;
    canChangeAttachmentSupport: boolean = false;
    canChangeFollowersSupport: boolean = false;
    canChangeIntegrationSupport: boolean = false;
    creationPolicyType: number | undefined
    createURL: string | undefined
    databaseTableName: string | undefined;
    defaultURL: string | undefined
    deleted: boolean | undefined;
    editURL: string | undefined
    icon: string | undefined;
    id!: string
    listURL: string | undefined
    managementPolicy: number | undefined;
    managementGenericURL: string | undefined
    outOfTheBox: boolean| undefined 
    supportAttachments: boolean| undefined 
    supportIntegration: boolean| undefined 
    appearInRecentVisit: boolean| undefined 
    primaryNamePropertySystemName: string | undefined
    cfgItemUniquePropertySystemName: string | undefined
    reportDisplayIndexPosition: number | undefined 
    supportFollowers: boolean| undefined 
    supportTimeTracking: boolean| undefined 
    supportIndexPosition: boolean| undefined 
    supportTree: boolean| undefined 
    supportWorkflowConfiguration: boolean| undefined 
    virtual: boolean| undefined 
    supportFormConfiguration: boolean| undefined 
    entityName: string | undefined
    itemType: number | undefined 



    public createEntityHandler(obj: Entity): void {

        let entity = this;

        entity.id = `com.msp.dao.entities.cse.custom.${entity.systemName}`;

        if (!entity.virtual) {

            entity.supportFormConfiguration = true;
            entity.databaseTableName = "Cse" + entity.entityName
            entity.properties = []
            entity.properties.push(...this.getBasicProperties());

            if (entity.supportAttachments) {

                entity.properties.push(... this.getSupportAttachmentsProperties());

                entity.canChangeAttachmentSupport = false;

            }

            if (entity.supportFollowers) {

                entity.properties.push(... this.getSupportFollowersProperties());

                entity.canChangeFollowersSupport = false;

            }

            if (entity.supportIntegration) {

                entity.properties.push(... this.getSupportIntegrationProperties());

                entity.canChangeIntegrationSupport = false;

            }

            if (entity.supportTimeTracking) {

                entity.properties.push(... this.getSupportTimeTrackingProperties());

                //TODO: Somthing very tricky here. 
                // Create a lookup property in My Work Task - to this entity
                //  var eventArgs: MSPEventArgs = new MSPEventArgs();
                //  eventArgs.entityId = MyWorkPresentationModel.MY_WORK_TASK_CLASS_NAME;
                //  eventArgs.entity = entity;

                // dispatcher.dispatchEvent(new MSPEvent(MSPEvent.ADD_LOOKUP_PROPERTY_TO_MY_WORK_TASK_ENTITY, eventArgs));

            }
            if (entity.supportFormConfiguration) {
                entity.properties.push(... this.getSupportCategorizableProperties());
            }

            if (entity.supportWorkflowConfiguration) {

                entity.properties.push(...this.getSupportWorkflowConfigurationProperties());

            }


            //TODO yet to be complete.
            //     if (entity.supportTree) {

            //         entity.properties.addAll(
            //             PropertyFactory.getSupportTreeProperties(
            //                 languagesPresentationModel,
            //                 entity.databaseTableName,
            //                 entity.id,
            //                 entity.displayName,
            //                 entity.creationPolicyType
            //             )
            //         );

            //     }

            //     else if (entity.supportIndexPosition) {

            //         entity.properties.push(... this.getIndexPositionProperty());
            //     }

            //     // settings defaults

            //     entity.primaryNamePropertySystemName = PropertyFactory.DEFAULT_PNP_PROPERTY_SYSTEM_NAME;

            //     entity.cfgItemUniquePropertySystemName = PropertyFactory.DEFAULT_UNP_PROPERTY_SYSTEM_NAME;

            //     entity.lookupDefaultNameFormat = new TextAssembly();

            //     entity.lookupDefaultNameFormat.parts = new ArrayCollection(
            //         [
            //             new ArrayCollection(
            //                 [
            //                     new KeyValue().init(ConditionUtils.TBL, entity.id),
            //                     new KeyValue().init(PropertyFactory.DEFAULT_PNP_PROPERTY_SYSTEM_NAME, null)
            //                 ]
            //             )
            //         ]
            //     );

            //     entity.defaultColumns = getDefaultEntityColumns(entity);

        }

        // if (object.reverseLookupProperty != null) {
        //     entity.properties.addItem(
        //         object.reverseLookupProperty as LookupProperty
        //     );
        // }

        // setEntityUrls(entity);

        // if (entity.managementPolicy == ManagementPolicyType.TREE_ROOT) {
        //     entity.entityRelationship = getNewEntityRelationship(entity);
        // }

        // DataUtils.sortPropertiesByNameAndAddedOrOutOfTheBox(entity.properties);

        // addTreeNodeToCustomizedEntities(entity);

        // afterCreateOrUpdateEntity(object);

    }
    getSupportWorkflowConfigurationProperties(): any[] {
        return []
    }
    getIndexPositionProperty(): any[] {
        return [
            {
                "description": "",
                "displayName": "Index Position",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "מיקום",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "indexPosition",
                "customLink": null,
                "dataType": {
                    "key": "Number",
                    "value": "6"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "IndexPosition",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 50,
                "databaseColumnType": "int (10)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "defaultMaxValue": null,
                "defaultMinValue": null,
                "defaultValue": null,
                "useThousandSeparator": false
            }
        ]
    }
    getSupportCategorizableProperties() {
        return [

        ]
    }
    getSupportTimeTrackingProperties(): any[] {
        return [
            {
                "description": "The task will hold My Work information like actual work, % work complete and remaining work.",
                "displayName": "My Work Task",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": "המשימה תכיל מידע \"גיליון עבודה\" כגון עבודה בפועל, % עבודה שהושלמה ועבודה נותרת.",
                        "displayName": "משימת גליון עבודה",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "myWorkTask",
                "customLink": null,
                "dataType": {
                    "key": "Lookup to My Work Task",
                    "value": "9",
                    "lookupClassName": "com.msp.dao.entities.MyWorkTask"
                },
                "entityId": "com.msp.dao.entities.cse.custom.Cse_Bb5",
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "refMyWorkTaskid",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 200,
                "databaseColumnType": "bigint (19)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "displayAsAutoCompleteInReports": false,
                "linkToEntity": false,
                "defaultValue": null,
                "canBeUseAsReferenceInReports": false,
                "lookupToExtension": false
            }
        ]
    }
    getSupportIntegrationProperties(): any[] {
        return [{
            "description": "",
            "displayName": "Integration Identifier",
            "displayNameLanguageKey": null,
            "descriptionLanguageKey": null,
            "languageTranslations": [
                {
                    "description": null,
                    "displayName": "מזהה אינטגרציה",
                    "language": "he"
                }
            ],
            "notes": null,
            "systemName": "integrationIdentifier",
            "customLink": null,
            "dataType": {
                "key": "Single Line of Text",
                "value": "1"
            },
            "entityId": this.id,
            "valueChangedNotification": null,
            "tabularReportsCategory": null,
            "databaseColumnName": "IntegrationIdentifier",
            "outOfTheBox": true,
            "translated": false,
            "excludePropertyFromReportGenerator": false,
            "excludePropertyFromEventsGenerator": false,
            "defaultWidth": 200,
            "databaseColumnType": "varchar (250)",
            "sql": null,
            "formula": false,
            "identity": false,
            "virtualProperty": false,
            "defaultValue": null,
            "maximumTextLength": null
        }]
    }
    getSupportFollowersProperties(): any[] {
        return [{
            "description": "",
            "displayName": "Followed by Users",
            "displayNameLanguageKey": null,
            "descriptionLanguageKey": null,
            "languageTranslations": [
                {
                    "description": null,
                    "displayName": "משתמשים עוקבים",
                    "language": "he"
                }
            ],
            "notes": null,
            "systemName": "followerUsers",
            "customLink": null,
            "dataType": {
                "key": "Table of Follow User",
                "value": "10",
                "lookupClassName": "com.msp.dao.entities.Attachment"
            },
            "entityId": "com.msp.dao.entities.cse.custom.Cse_Bb3",
            "valueChangedNotification": null,
            "tabularReportsCategory": null,
            "databaseColumnName": "psurefEntityRefid",
            "outOfTheBox": true,
            "translated": false,
            "excludePropertyFromReportGenerator": false,
            "excludePropertyFromEventsGenerator": false,
            "defaultWidth": 100,
            "databaseColumnType": null,
            "sql": null,
            "formula": false,
            "identity": false,
            "virtualProperty": false,
            "displayAsAutoCompleteInReports": false,
            "linkToEntity": false,
            "filter": null,
            "orderByColumnName": null,
            "table": "refObjectsFollowerUsers",
            "usingVanillaReference": false
        }];
    }
    getSupportAttachmentsProperties(): any[] {
        return [{
            "description": "",
            "displayName": "Attachments",
            "displayNameLanguageKey": null,
            "descriptionLanguageKey": null,
            "languageTranslations": [
                {
                    "description": null,
                    "displayName": "מסמכים",
                    "language": "he"
                }
            ],
            "notes": null,
            "systemName": "attachments",
            "customLink": null,
            "dataType": {
                "key": "Table of Attachments",
                "value": "10",
                "lookupClassName": "com.msp.dao.entities.Attachment"
            },
            "entityId": this.id,
            "valueChangedNotification": null,
            "tabularReportsCategory": null,
            "databaseColumnName": "psurefEntityRefid",
            "outOfTheBox": true,
            "translated": false,
            "excludePropertyFromReportGenerator": false,
            "excludePropertyFromEventsGenerator": false,
            "defaultWidth": 100,
            "databaseColumnType": null,
            "sql": null,
            "formula": false,
            "identity": false,
            "virtualProperty": false,
            "displayAsAutoCompleteInReports": false,
            "linkToEntity": false,
            "filter": null,
            "orderByColumnName": null,
            "table": "Attachments",
            "usingVanillaReference": false
        }]
    }


    //as Hard coded in existing app.
    getDefaultColumns(): KeyValue[] {
        return [
            {
                "key": "ID",
                "value": [
                    {
                        "key": "tbl",
                        "value": this.id
                    },
                    {
                        "key": "id",
                        "value": null
                    }
                ]
            },
            {
                "key": "Name",
                "value": [
                    {
                        "key": "tbl",
                        "value": this.id
                    },
                    {
                        "key": "name",
                        "value": null
                    }
                ]
            },
            {
                "key": "Time Created",
                "value": [
                    {
                        "key": "tbl",
                        "value": this.id
                    },
                    {
                        "key": "timeCreated",
                        "value": null
                    }
                ]
            },
            {
                "key": "Time Updated",
                "value": [
                    {
                        "key": "tbl",
                        "value": this.id
                    },
                    {
                        "key": "timeUpdated",
                        "value": null
                    }
                ]
            },
            {
                "key": "Updated By",
                "value": [
                    {
                        "key": "tbl",
                        "value": this.id
                    },
                    {
                        "key": "updateUser",
                        "value": "com.msp.dao.entities.User"
                    }
                ]
            }
        ]



    }

    getBasicProperties(): any[] {
        return [
            {
                "description": "",
                "displayName": "ID",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "מזהה",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "id",
                "customLink": null,
                "dataType": {
                    "key": "Large Number",
                    "value": "7"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "id",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 50,
                "databaseColumnType": "bigint identity (19)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "defaultMaxValue": null,
                "defaultMinValue": null,
                "defaultValue": null,
                "useThousandSeparator": false
            },
            {
                "description": "",
                "displayName": "Name",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "שם",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "name",
                "customLink": null,
                "dataType": {
                    "key": "Single Line of Text",
                    "value": "1"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "Name",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 200,
                "databaseColumnType": "varchar (250)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "defaultValue": null,
                "maximumTextLength": null
            },
            {
                "description": "",
                "displayName": "Creation User",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "משתמש יוצר",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "creationUser",
                "customLink": null,
                "dataType": {
                    "key": "Lookup to USER_DISPLAY_NAME",
                    "value": "9",
                    "lookupClassName": "com.msp.dao.entities.User"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "refCreationUserid",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 200,
                "databaseColumnType": "bigint (19)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "displayAsAutoCompleteInReports": false,
                "linkToEntity": false,
                "defaultValue": null,
                "canBeUseAsReferenceInReports": false,
                "lookupToExtension": false
            },
            {
                "description": "",
                "displayName": "State",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "מצב רשומה",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "state",
                "customLink": null,
                "dataType": {
                    "key": "Number",
                    "value": "6"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "State",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 50,
                "databaseColumnType": "int (10)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "defaultMaxValue": null,
                "defaultMinValue": null,
                "defaultValue": null,
                "useThousandSeparator": false
            },
            {
                "description": "",
                "displayName": "Time Created",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "זמן יצירה",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "timeCreated",
                "customLink": null,
                "dataType": {
                    "key": "Date and Time",
                    "value": "4"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "TimeCreated",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 100,
                "databaseColumnType": "datetime (23)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "defaultMaxValue": null,
                "defaultMinValue": null,
                "defaultValue": null,
                "periodPickerType": "3"
            },
            {
                "description": "",
                "displayName": "Time Updated",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "תאריך עדכון",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "timeUpdated",
                "customLink": null,
                "dataType": {
                    "key": "Date and Time",
                    "value": "4"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "TimeUpdated",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 100,
                "databaseColumnType": "datetime (23)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "defaultMaxValue": null,
                "defaultMinValue": null,
                "defaultValue": null,
                "periodPickerType": "3"
            },
            {
                "description": "",
                "displayName": "Last Updated By",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "עודכן ע\"י",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "updateUser",
                "customLink": null,
                "dataType": {
                    "key": "Lookup to User",
                    "value": "9",
                    "lookupClassName": "com.msp.dao.entities.User"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "refUpdateUserid",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 200,
                "databaseColumnType": "bigint (19)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "displayAsAutoCompleteInReports": false,
                "linkToEntity": false,
                "defaultValue": null,
                "canBeUseAsReferenceInReports": false,
                "lookupToExtension": false
            },
            {
                "description": "",
                "displayName": "Category",
                "displayNameLanguageKey": null,
                "descriptionLanguageKey": null,
                "languageTranslations": [
                    {
                        "description": null,
                        "displayName": "קטגוריה",
                        "language": "he"
                    }
                ],
                "notes": null,
                "systemName": "entityCategory",
                "customLink": null,
                "dataType": {
                    "key": "Lookup to ENTITYCATEGORY_DISPLAY_NAME",
                    "value": "9",
                    "lookupClassName": "com.msp.dao.entities.EntityCategory"
                },
                "entityId": this.id,
                "valueChangedNotification": null,
                "tabularReportsCategory": null,
                "databaseColumnName": "refEntityCategoryid",
                "outOfTheBox": true,
                "translated": false,
                "excludePropertyFromReportGenerator": false,
                "excludePropertyFromEventsGenerator": false,
                "defaultWidth": 200,
                "databaseColumnType": "bigint (19)",
                "sql": null,
                "formula": false,
                "identity": false,
                "virtualProperty": false,
                "displayAsAutoCompleteInReports": false,
                "linkToEntity": false,
                "defaultValue": null,
                "canBeUseAsReferenceInReports": false,
                "lookupToExtension": false
            }
        ]
    }
}


