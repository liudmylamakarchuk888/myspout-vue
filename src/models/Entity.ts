import { BaseContent } from './BaseContent';
import { LanguageTranslation } from './LanguageTranslation';
import { KeyValue } from './KeyValue';
import { Status } from './Status';
import { Restriction } from './Restriction';
import { TextAssembly } from './TextAssembly';
import { EntityRelationship } from './EntityRelationship';
import { CreateUUID } from '@/utils/helper';
import { UserModule } from '@/store/modules/user';
import { Notification } from './Notification';
import { newGuid } from './Utils';
import { AppCacheModule } from '@/store/modules/appCache.ts'
import { PropertyFactory } from './Utils/PropertyFactory';
import { ManagementPolicyType } from './CreationPolicyType';
import { BaseProperty } from './Properties';

// public interface IBaseCreatableContent extends IBaseContent {




//     get id():String;




//     set id(value:String):void;




//     get clientId():String;



 

//     set clientId(value:String):void;




//     get newInstance():Boolean;


 

//     set newInstance(value:Boolean):void;




//     get deleted():Boolean;

 

//     set deleted(value:Boolean):void;




//     get dateCreated():Date;


 

//     set dateCreated(value:Date):void;




//     get createdBy():String;
 
//     set createdBy(value:String):void;




//     get dateModified():Date;

 

//     set dateModified(value:Date):void;




//     get modifiedBy():String;
 

//     set modifiedBy(value:String):void;

//   }
// public interface IRecentlyEditedContent extends IBaseCreatableContent {





//     get systemName():String;





//     get entity():Entity;





//     get itemType():int;





//     get uniqueId():String;





//     isOutOfTheBox():Boolean;


// }

export class Entity extends BaseContent {

    constructor() {
        super();
        this.clientId = CreateUUID()
        this.newInstance = true;
        this.createNotification = {} as any
        this.defaultColumns = this.getDefaultColumns()
        this.createdBy = UserModule.name
        this.modifiedBy = UserModule.name
        this.dateCreated = new Number(new Date())
        this.dateModified = new Number(new Date())
    }    
    clientId!:string
    newInstance: boolean = false; 

    createNotification: Notification;
    createdBy: string = UserModule.name;
    dateCreated: Number = new Number(new Date());
    dateModified: Number = new Number(new Date());
    defaultColumns: KeyValue[] = [];
    deleteNotification: Notification = {} as Notification;
    discipline: KeyValue = {} as KeyValue;
    entityRelationship: EntityRelationship = {} as any  
    lookupDefaultNameFormat: TextAssembly = {} as any;
    modifiedBy: string = UserModule.name;
    modifyNotification: Notification = {} as any;
    reportFilter: Restriction = {} as any;
    properties: BaseProperty[] = [] ;
    sql: string = '';
    sqlConnection: KeyValue = {} as any;
    status: Status[] = [];
    milestonesTableProperty: string = '';
    milestonesTableDueDateProperty: string = '';
    milestonesTableStatusProperty: string = '';
    milestonesTableStatusDeliverableStatusProperty: string = '';
    milestonesTableDescriptionProperty: string = '';
    milestonesTableOwnerProperty: string = '';
    activityOwnerProperty: string = '';
    goalsProperty: string = '';
    enableForExecutionCenter: boolean = false;
    allowCreatingReport: boolean = false;
    canChangeAttachmentSupport: boolean = false;
    canChangeFollowersSupport: boolean = false;
    canChangeIntegrationSupport: boolean = false;
    creationPolicyType: number = 0;
    createURL: string = '';
    databaseTableName: string = '';
    defaultURL: string = ''
    deleted: boolean = false;
    editURL: string = '';
    icon: string = '';
    id!: string;
    listURL: string = ''
    managementPolicy: number = 0;
    managementGenericURL: string = '';
    outOfTheBox: boolean = false;
    supportAttachments: boolean = false;
    supportIntegration: boolean = false;
    appearInRecentVisit: boolean = true;
    primaryNamePropertySystemName: string = '';
    cfgItemUniquePropertySystemName: string = '';
    reportDisplayIndexPosition: number = 0;
    supportFollowers: boolean = false;
    supportTimeTracking: boolean = false;
    supportIndexPosition: boolean = false;
    supportTree: boolean = false; 
    supportWorkflowConfiguration: boolean = false;
    virtual: boolean = false; 
    supportFormConfiguration: boolean = false;
    entityName: string = '';
    itemType: number = 0;
    languageTranslations: LanguageTranslation[] = 
        AppCacheModule.FlexSettings.languages.reduce((total:any, lang:KeyValue) => {
            if (lang.value !== AppCacheModule.FlexSettings.currentLocale)
                return [...total, {
                    description: '',
                    displayName: '',
                    language: lang.key
                }]
            else return total
        }, []);

    public createEntityHandler(obj: Entity): void {

        let entity = this;

        entity.id = `com.msp.dao.entities.cse.custom.${entity.systemName}`;

        if (!entity.virtual) {

            entity.supportFormConfiguration = true;
            entity.databaseTableName = "Cse" + entity.entityName
            entity.properties = []
            entity.properties.push(...this.getBasicProperties(entity.id));

            if (entity.supportAttachments) {

                entity.properties.push(... this.getSupportAttachmentsProperties(entity.id));

                entity.canChangeAttachmentSupport = false;

            }

            if (entity.supportFollowers) {

                entity.properties.push(... this.getSupportFollowersProperties(entity.id));

                entity.canChangeFollowersSupport = false;

            }

            if (entity.supportIntegration) {

                entity.properties.push(... this.getSupportIntegrationProperties(entity.id));

                entity.canChangeIntegrationSupport = false;

            }

            if (entity.supportTimeTracking) {

                entity.properties.push(... this.getSupportTimeTrackingProperties(entity.id));

                //TODO: Somthing very tricky here. 
                // Create a lookup property in My Work Task - to this entity
                //  var eventArgs: MSPEventArgs = new MSPEventArgs();
                //  eventArgs.entityId = MyWorkPresentationModel.MY_WORK_TASK_CLASS_NAME;
                //  eventArgs.entity = entity;

                // dispatcher.dispatchEvent(new MSPEvent(MSPEvent.ADD_LOOKUP_PROPERTY_TO_MY_WORK_TASK_ENTITY, eventArgs));

            }
            if (entity.supportFormConfiguration) {
                entity.properties.push(... this.getSupportCategorizableProperties(entity.id));
            }

            if (entity.supportWorkflowConfiguration) {

                entity.properties.push(...this.getSupportWorkflowConfigurationProperties(entity.id));

            }


            //TODO yet to be complete.
            if (entity.supportTree) {

                entity.properties.push(...
                    PropertyFactory.getSupportTreeProperties(
                        entity.databaseTableName,
                        entity.id,
                        entity.displayName,
                        entity.creationPolicyType
                    )
                );

            }

            else if (entity.supportIndexPosition) {

                entity.properties.push(... this.getIndexPositionProperty(entity.id));
            }

            //     // settings defaults

            entity.primaryNamePropertySystemName = PropertyFactory.DEFAULT_PNP_PROPERTY_SYSTEM_NAME;

            entity.cfgItemUniquePropertySystemName = PropertyFactory.DEFAULT_UNP_PROPERTY_SYSTEM_NAME;

            entity.lookupDefaultNameFormat = new TextAssembly();


            entity.lookupDefaultNameFormat.parts = [
                [
                    new KeyValue("tbl", entity.id),
                    new KeyValue(PropertyFactory.DEFAULT_PNP_PROPERTY_SYSTEM_NAME, null)
                ]
            ]


            entity.defaultColumns = this.getDefaultColumns();

        }

        // if (obj.reverseLookupProperty != null) {
        //     entity.properties.addItem(
        //         (<LookupProperty>obj).reverseLookupProperty 
        //     );
        // }

        this.setEntityUrls(entity);

        if (entity.managementPolicy == ManagementPolicyType.TREE_ROOT) {
            entity.entityRelationship = this.getNewEntityRelationship(entity);
        }

        //entity.properties?.sort((x)=> x.displayName);
        //DataUtils.sortPropertiesByNameAndAddedOrOutOfTheBox(entity.properties);

        this.addTreeNodeToCustomizedEntities(entity);

        this.afterCreateOrUpdateEntity(obj);

    }
    //TODO: dirty state managment.
    afterCreateOrUpdateEntity(object: any) {
        // var entity: Entity = object.entity;
        // var tableEntity: Entity = object.tableEntity;

        // model.entities.put(entity.id, entity);

        // model.dirtyEntities.put(entity.id, entity);

        // if (tableEntity != null) {
        //     model.entities.put(tableEntity.id, tableEntity);
        //     model.dirtyEntities.put(tableEntity.id, tableEntity);
        // }

        // //dispatcher.dispatchEvent(new MSPEvent(MSPEvent.ITEM_ADDED_TO_DIRTY_MAP, model.dirtyEntities));

        // DataUtils.markModificationAndAddToRecentlyEdited(entity);

        // if (tableEntity != null) {
        //     markModificationAndAddToRecentlyEdited(tableEntity);
        // }

        // model.toggleSaveButton();

        // if (object.callback) {

        //     if (object.callbackArguments) {
        //         object.callback(object.callbackArguments);
        //     }

        //     else {
        //         object.callback();
        //     }

        // }

        // dispatcher.dispatchEvent(new EntitiesEvent(EntitiesEvent.REFRESH_ENTITIES_TREE));

        // dispatch event to update the entities combo boxes in From / Workflow Landing Page
        //dispatcher.dispatchEvent(new MSPEvent(MSPEvent.ENTITIES_LIST_CHANGED));
    }
    addTreeNodeToCustomizedEntities(entity: this) {

        // for (var node: Node of model.treeDataProvider.children) {

        //     if (node.branch && node.id == CUSTOMIZED_ENTITIES_NODE_ID) {

        //         if (entityNode == null || node.children == null || !node.children.contains(entityNode)) {

        //             if (entityNode == null) {

        //                 entityNode = getNewNode(entity);

        //             }

        //             addChildNodeToParentNode(node, entityNode);

        //             model.allTreeNodes.put(entityNode.id, entityNode);

        //             model.allEntityNodes = [model.allTreeNodes.getValues()];

        //             model.selectedEntity = entityNode;

        //             DataUtils.sortCollectionBy(node.children, "name");

        //         }

        //     }

        // }


    }
    private getNewEntityRelationship(entity: Entity): EntityRelationship {
        var entityRelationship: EntityRelationship = new EntityRelationship();

        entityRelationship.entityId = entity.id;
        entityRelationship.children = [];

        return entityRelationship;
    }

    private setEntityUrls(entity: Entity): void {

        entity.createURL = "generated_create.jsp?entityCategoryId=$entityCategory.id";
        entity.defaultURL = "generated_edit.jsp?entityCategoryId=$entityCategory.id&id=$id&current_tab_object=@@CURRENT_TAB_OBJECT@@";
        entity.editURL = "generated_edit.jsp?entityCategoryId=$entityCategory.id&id=$id&current_tab_object=@@CURRENT_TAB_OBJECT@@";
        entity.listURL = "generated_manage_entity.jsp?entityCategoryId=$entityCategory.id";

    }
    getSupportWorkflowConfigurationProperties(entityId: string): any[] {
        return PropertyFactory.getSupportWorkflowConfigurationProperties(entityId)
    }
    getIndexPositionProperty(entityId: string): any[] {
        return PropertyFactory.getIndexPositionProperty(entityId)
    }
    getSupportCategorizableProperties(entityId: string) {
        return PropertyFactory.getSupportCategorizableProperties(entityId)
    }
    getSupportTimeTrackingProperties(entityId: string): any[] {
        return PropertyFactory.getSupportTimeTrackingProperties(entityId)
    }
    getSupportIntegrationProperties(entityId: string): any[] {
        return PropertyFactory.getSupportIntegrationProperties(entityId)

    }
    getSupportFollowersProperties(entityId: string): any[] {
        return PropertyFactory.getSupportFollowersProperties(entityId)
    }
    getSupportAttachmentsProperties(entityId: string): any[] {
        return PropertyFactory.getSupportAttachmentsProperties(entityId)
    }


    //as Hard coded in existing app.
    getDefaultColumns(): KeyValue[] {

        let result = [new KeyValue("ID", [
            new KeyValue("tbl", this.id),
            new KeyValue("id", null)]
        )
            , new KeyValue("Name", [
                new KeyValue("tbl", this.id),
                new KeyValue("id", null)
            ])
            , new KeyValue("Time Created", [
                new KeyValue("tbl", this.id),
                new KeyValue("timeCreated", null)
            ]),
        new KeyValue("Time Updated", [
            new KeyValue("tbl", this.id),
            new KeyValue("timeUpdated", null)
        ])
            , new KeyValue("Updated By", [
                new KeyValue("tbl", this.id),
                new KeyValue("updatedBy", null)
            ])
        ];

        return result;



    }

    getBasicProperties(entityId: string): any[] {
        return PropertyFactory.getBasicProperties(entityId)
    }
}


