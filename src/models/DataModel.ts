import { DisplayLanguages } from './DisplayLanguages';
import { Entity } from './Entity';
import { FlexApplicationPreferences } from './FlexApplicationPreferences';
import {Node} from './Node'
export class AbstractModel{

}
export class Model extends AbstractModel {

    sessionId:String | undefined;

    locale:String='en';

    flexApplicationPreferences:FlexApplicationPreferences ={} as any;

    selectedModule:number|undefined;

    entities:Map<string,any> = new Map<string,any>();

    allTreeNodes:Map<string,any> = new Map<string,any>();

    allEntityNodes:[]=[];

    treeDataProvider:Node|undefined;

    entityValuesByQueryString:[] = [];

    applicationPreferences:Map<string,any> = new Map<string,any>();

    dirtyApplicationPreferences:Map<string,any> = new Map<string,any>();

    dirtyAuthorizationTrees:Map<string,any> = new Map<string,any>();

    dirtyMyWorkPolicies:Map<string,any> = new Map<string,any>();

    dirtyOrchestrators:Map<string,any> = new Map<string,any>();

    applicationPreferenceCategoriesTranslations:[]=[];

    entityStatus:Map<string,any> = new Map<string,any>();

    dirtyMapsCollection:[] = [];

    numberOfModelsToSave:number = 0;

    saveStarted:Boolean = false;

    entityEntityCategories:Map<string,any>=new Map<string,any>();

    entityWorkflows:Map<string,any>=new Map<string,any>();

    dialogRoles:Map<string,any> =new Map<string,any>();

    products:Map<string,any>= new Map<string,any>();

    skins:[]=[];

    baseRoles:[]=[];

    scoreboards:[]=[];

    dirtyDialogRoles:Map<string,any> = new Map<string,any>();

    dirtyProducts:Map<string,any> = new Map<string,any>();

    icons:[]=[];

    entityIcons:[]=[];

    recentlyEditedItems:Map<string,any> = new Map<string,any>();

    //selectedLandingPageModule:EditorModule;

    dirtyGeneralApplicationInformationMap:Map<string,any> = new Map<string,any>();

    applicationPreferenceCategories:[]=[];

    importExportLog:String='';

    //importExportServerRequestSampler:ServerRequestSampler;

    propertyDataTypes:[]=[];

    displayLanguages:DisplayLanguages= {} as any;

    //sessionManager:SessionManager = [] as any;

    /****************************************** Header Fields **********************************************/

    logo:string|undefined;

    lastSaveDate:Date=new Date();

    somethingIsBeingEdited:Boolean=false;

    saveEnabled:Boolean=false;

    /****************************************** Entities Fields **********************************************/

    currentEntity:Entity |undefined;

    entitiesDisciplines:[] =[];

    allDataTypes:[]=[];

    virtualEntityDataTypes:[]=[];

    allSQLConnections:[]=[];

    dirtyEntities:Map<string,any> = new Map<string,any>();

    selectedEntity:Entity |undefined;

    requirementId:String = "com.msp.dao.entities.Requirement";

    /****************************************** Forms Fields **********************************************/

    //currentForm:Form|undefined;

    selectedFormItem:any;

    selectedFormsModule:number|undefined;

    forms:Map<string,any> = new Map<string,any>();

    dirtyForms:Map<string,any> = new Map<string,any>();

    allForms:[] =[];

    /****************************************** Workflows Fields **********************************************/

    selectedWorkflowModule:number|undefined;

    dirtyWorkflows:Map<string,any> = new Map<string,any>();

    //currentWorkflow:Workflow |undefined;

    allWorkflows:[]=[];

    /****************************************** My Work Fields **********************************************/

    dirtyMyWorkCalendars:Map<string,any> = new Map<string,any>();

    /**
     *
     */
    providerTypes:[]=[];
 


    /**
     *
     */
    toggleSaveButton():void {
      this.saveEnabled = !this.somethingIsBeingEdited;
    }

    /**
     * Add some form to caching mechanism
     */
    // cacheForm(value:Form):void {
    //   this.forms.set(value.id, value);
    // }


    /**
     *
     * @param treeDataProvider
     */
    // set treeDataProvider(treeDataProvider:Node):void {
    //   _treeDataProvider = treeDataProvider;
    //   if (_treeDataProvider) {
    //     for (var node:Node of _treeDataProvider.children) {
    //       if (node.branch) {
    //         DataUtils.sortCollectionBy(node.children, "name");
    //       }
    //     }
    //   }
    // }


  }