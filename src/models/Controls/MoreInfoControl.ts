import { CreateUUID } from '@/utils/helper';
import { BaseProperty } from '../properties/BaseProperty';
import { Restriction } from '../Restriction';
import { TextAssembly } from '../TextAssembly';

export interface IValueObject {

}
export class BaseContent implements IValueObject {

    // ------------------------------ FIELDS ------------------------------

    /**
     *
     */
    public displayName:string|undefined;

    /**
     *
     */
    public description:string|undefined;

    /**
     *
     */
    public displayNameLanguageKey:string|undefined;

    /**
     *
     */
    public descriptionLanguageKey:string |undefined; 

    /**
     *
     */
    public notes:string |undefined;

    /**
     *
     */
    public languageTranslations:[];

    /**
     *
     */
    public systemName:string |undefined;

    /**
     *
     */
    public hoverMenuControls:[] =[];

    // --------------------- CONSTRUCTOR ---------------------

    constructor() {
      this.languageTranslations = [];
    }

    // --------------------- TRANSIENTS ---------------------

    /**
     *
     */
    /*[Transient]*/
    public clone():Object {
      var newBaseContent= JSON.parse(JSON.stringify(this))
      return newBaseContent;
    }

    /**
     *
     * @param original
     * @param excludedProperties
     */
    /*[Transient]*/
    public copyFromAnother(original:Object, excludedProperties:any[] = []):void {

      if (original == null) return;

      return JSON.parse(JSON.stringify(original))
    }

 
    public equals(obj:BaseContent):boolean {
        
      return JSON.stringify(this) === JSON.stringify(obj);
    }

  
    public toString():string {
      return "BaseContent{_displayName:\"" + this.displayName +
              "\", _description:\"" + this.description + "\", _notes:\"" +
              this.notes + "\", _languageTranslations:" + this.languageTranslations +
              ", _systemName:\"" + this.systemName + "\", _hoverMenuControls:"
              + this.hoverMenuControls + "}";
    }

   
   

    public match(value:Object, propertyNameToMatch:string = "displayName"):boolean {
      return this.displayName.toLowerCase().indexOf(value.toString().toLowerCase()) > -1;
    }

   
    public get alterLabel():boolean {
      return true;
    }

  }

export class BaseExtendedContent extends BaseContent {

    /**
     *
     */
    public attributes:string| undefined;

    /**
     *
     */
    public childrenXml:string| undefined;

  }
export class BaseConditionalContent extends BaseExtendedContent {

    /**
     *
     */
    public editRestriction:Restriction={} as any;

    /**
     *
     */
    public viewRestriction:Restriction={} as any;

    /**
     *
     */
    public actionItemCreateRestriction:Restriction={} as any;

    /**
     *
     */
    public actionItemEditRestriction:Restriction={} as any;

    /**
     *
     */
    public actionItemDeleteRestriction:Restriction={} as any;

    /**
     *
     */
    public attachmentsCreateRestriction:Restriction={} as any;

    /**
     *
     */
    public attachmentsEditRestriction:Restriction={} as any;

    /**
     *
     */
    public attachmentsDeleteRestriction:Restriction={} as any;

    /**
     *
     */
    public participantsFilter:Restriction={} as any;


  }
export class BaseTranslationalContent extends BaseConditionalContent {

    /**
     *
     */
    public specificTranslation:boolean=false;

   
  }

export class BaseControl extends BaseTranslationalContent {

    // ------------------------------ FIELDS ------------------------------

    /**
     *
     */
    public asLabel:boolean =false;
    /**
     *
     */
    public showPropertyHistoryInTooltip:boolean=false;

    /**
     *
     */
    public colspan:number|undefined;

    /**
     *
     */
    public columnWidth:number|undefined;

    /**
     *
     */
    public property:BaseProperty={} as any;

    /**
     *
     */
    public customLink:TextAssembly ={} as any;

    /**
     *
     */
    public overrideDefaultLinkSettings:boolean=false;

    /**
     *
     */
    public mandatoryProperty:MandatoryProperty={} as any;

    /**
     *
     */
    public nestedPropertyPath:[]=[];

    /**
     *
     */
    public linkToTab:string| undefined;

    /**
     *
     */
    public propertySystemName:string| undefined;

    /**
     *
     */
    public cssClass:string| undefined;

    /**
     *
     */
    public graphicalIndicatorName:string| undefined;

    /**
     *
     */
    public suffix:string| undefined;

    /**
     *
     */
    public overrideControlWidth:boolean=false;

   
    /**
     *
     */
    public containerWidth:number|undefined;

    /**
     *
     */
    public container:BaseControlsContainer={} as any;

    /**
     *
     */
    public calculatedPropertyPath:string|undefined

   
  }
  export class MandatoryProperty {

    // ----------------------- FIELDS ------------------------------

    /**
     *
     */
    mandatory:boolean=false;

    /**
     *
     */
    mandatoryAtWorkflowTransitions:boolean=false;

    /**
     *
     */
    companionControl:[]=[];

  }
export class MoreInfoControl extends BaseControl {

    /**
     *
     */
    public moreInfoTab:Tab={} as any;

 
  }

  export class Tab extends BaseConditionalContent {

    /**
     *
     */
    controlsContainers:[];

    /**
     *
     */
    table:Table;

    /********* Constructor *********/
    constructor(){
      super();
      this.table = new Table();
      this.controlsContainers =[];
    }
}

export class BaseControlsContainer extends BaseConditionalContent {

    /**
     *
     */
    public controls:any[];

    /**
     *
     */
    public controlsInARow:number=0;

    /********* Constructor *********/
    constructor(){
      super();
      this.controls = [];
      this.clientId = CreateUUID();
    }
 
    // --------------------- TRANSIENTS ---------------------
    /**
     *
     */
    public clientId:string| undefined;

    /**
     *
     */
    public finalDropIndex:number = -1;

   
  }
  export class Table extends BaseControlsContainer {

}