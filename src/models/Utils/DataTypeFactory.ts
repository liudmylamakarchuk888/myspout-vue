import { KeyValue } from "../KeyValue";
import { BaseProperty, Property } from '../Properties';
import { LanguagesPresentationModel } from "./LanguagesPresentationModel";
import { MSPEmbeddedAssets } from "./MSPEmbeddedAssets";

export class DataType {
  public value: string | undefined;
  public label: string | undefined;
  public previewImage: string | undefined;
  /**
   *
   */
  constructor() { 

  }
}


export enum DataTypeEnum {
  SINGLE_LINE_OF_TEXT = 1,
  TEXT_AREA = 2,
  CHOICE = 3,
  DATE_AND_TIME = 4,
  YES_NO = 5,
  NUMBER = 6,
  LARGE_NUMBER = 7,
  NUMBER_WITH_DECIMAL_POINT = 8,
  LOOKUP = 9,
  TABLE = 10,
  MULTI_LOOKUP = 11,
  WORKFLOW_STEP = 12
}

export class DataTypeFactory {


  public static languagesPresentationModel:LanguagesPresentationModel;

  private  static dataTypeIcons:Map<string,string>;
 
  public static FORMULA_DATATYPE_PREFIX:string = "F";

  public static SINGLE_LINE_OF_TEXT:string = "1";

  /**
   *
   */
  public static TEXT_AREA:string = "2";

  /**
   *
   */
  public static CHOICE:string = "3";

  /**
   *
   */
  public static DATE_AND_TIME:string = "4";

  /**
   *
   */
  public static YES_NO:string = "5";

  /**
   *
   */
  public static NUMBER:string = "6";

  /**
   *
   */
  public static LARGE_NUMBER:string = "7";

  /**
   *
   */
  public static NUMBER_WITH_DECIMAL_POINT:string = "8";

  /**
   *
   */
  public static LOOKUP:string = "9";

  /**
   *
   */
  public static TABLE:string = "10";

  /**
   *
   */
  public static MULTI_LOOKUP:string = "11";

  /**
   *
   */
  public static WORKFLOW_STEP:string = "12";

  /**
   *
   */
  private static init():void {
    DataTypeFactory.dataTypeIcons = new Map<string,string>();
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.SINGLE_LINE_OF_TEXT, MSPEmbeddedAssets.SINGLE_LINE_OF_TEXT_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.TEXT_AREA, MSPEmbeddedAssets.TEXT_AREA_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.DATE_AND_TIME, MSPEmbeddedAssets.DATE_AND_TIME_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.YES_NO, MSPEmbeddedAssets.YES_NO_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.NUMBER, MSPEmbeddedAssets.NUMBER_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.CHOICE, MSPEmbeddedAssets.CHOICE_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.LARGE_NUMBER, MSPEmbeddedAssets.LARGE_NUMBER_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.NUMBER_WITH_DECIMAL_POINT, MSPEmbeddedAssets.NUMBER_WITH_DECIMAL_POINT_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.LOOKUP, MSPEmbeddedAssets.LOOKUP_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.TABLE, MSPEmbeddedAssets.TABLE_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.MULTI_LOOKUP, MSPEmbeddedAssets.MULTI_LOOKUP_ICON);

    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.FORMULA_DATATYPE_PREFIX + DataTypeFactory.SINGLE_LINE_OF_TEXT, MSPEmbeddedAssets.SINGLE_LINE_OF_TEXT_FORMULA_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.FORMULA_DATATYPE_PREFIX + DataTypeFactory.TEXT_AREA, MSPEmbeddedAssets.TEXT_AREA_FORMULA_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.FORMULA_DATATYPE_PREFIX + DataTypeFactory.DATE_AND_TIME, MSPEmbeddedAssets.DATE_AND_TIME_FORMULA_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.FORMULA_DATATYPE_PREFIX + DataTypeFactory.YES_NO, MSPEmbeddedAssets.YES_NO_FORMULA_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.FORMULA_DATATYPE_PREFIX + DataTypeFactory.NUMBER, MSPEmbeddedAssets.NUMBER_FORMULA_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.FORMULA_DATATYPE_PREFIX + DataTypeFactory.LARGE_NUMBER, MSPEmbeddedAssets.LARGE_NUMBER_FORMULA_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.FORMULA_DATATYPE_PREFIX + DataTypeFactory.NUMBER_WITH_DECIMAL_POINT, MSPEmbeddedAssets.NUMBER_WITH_DECIMAL_POINT_FORMULA_ICON);
    DataTypeFactory.dataTypeIcons.set(DataTypeFactory.FORMULA_DATATYPE_PREFIX + DataTypeFactory.LOOKUP, MSPEmbeddedAssets.LOOKUP_FORMULA_ICON);
  }

  /**
   *
   * @param dataTypeTranslation
   * @return
   */
  public static getDataTypeObjectCollection(dataTypeTranslation:[], dataTypesToExclude:DataType[]):DataType[] {

    var dataTypes:DataType[] = [];

    if (dataTypesToExclude == null || dataTypesToExclude.length == 0) {
      return DataTypeFactory.getAllDataTypes(dataTypeTranslation);
    }

    for  (let dataType of DataTypeFactory.getAllDataTypes(dataTypeTranslation)) {

      if (!dataTypesToExclude.indexOf(dataType)) {
        dataTypes.push(dataType);
      }

    }

    return dataTypes;
  }

  /**
   *
   * @param dataTypeId
   * @return
   */
  public static getDataTypeIcon(dataTypeId:string):string|undefined {
    if (!DataTypeFactory.dataTypeIcons) {
      DataTypeFactory.init();
    }
    return DataTypeFactory.dataTypeIcons.get(dataTypeId);
  }

   /**
   *
   * @param baseProperty
   * @return
   */
  public static getBasePropertyDataTypeIcon(baseProperty:BaseProperty):string|undefined {

    var isFormula:boolean = baseProperty instanceof Property ? (<Property>baseProperty).formula : false;
    var dataTypeId:string = baseProperty.dataType.value.toString();

    if (DataTypeFactory.dataTypeIcons == null) {
      DataTypeFactory.init();
    }

    return DataTypeFactory.dataTypeIcons.get(isFormula ? DataTypeFactory.FORMULA_DATATYPE_PREFIX + dataTypeId : dataTypeId);

  }

  /**
   *
   * @param dataTypeTranslation
   * @return
   */
  private static getAllDataTypes(dataTypeTranslation:[]):DataType[] {
    var dataTypes:DataType[] = [];
    var dataTypeObject:DataType = {} as any;

    dataTypeObject.value = DataTypeFactory.SINGLE_LINE_OF_TEXT;
    dataTypeObject.previewImage = MSPEmbeddedAssets.SINGLE_LINE_OF_TEXT_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.TEXT_AREA;
    dataTypeObject.previewImage = MSPEmbeddedAssets.TEXT_AREA_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.CHOICE;
    dataTypeObject.previewImage = MSPEmbeddedAssets.CHOICE_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.DATE_AND_TIME;
    dataTypeObject.previewImage = MSPEmbeddedAssets.DATE_AND_TIME_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.YES_NO;
    dataTypeObject.previewImage = MSPEmbeddedAssets.YES_NO_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.NUMBER;
    dataTypeObject.previewImage = MSPEmbeddedAssets.NUMBER_WITH_DECIMAL_POINT_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.LARGE_NUMBER;
    dataTypeObject.previewImage = MSPEmbeddedAssets.LARGE_NUMBER_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.NUMBER_WITH_DECIMAL_POINT;
    dataTypeObject.previewImage = MSPEmbeddedAssets.NUMBER_WITH_DECIMAL_POINT_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.LOOKUP;
    dataTypeObject.previewImage = MSPEmbeddedAssets.LOOKUP_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.TABLE;
    dataTypeObject.previewImage = MSPEmbeddedAssets.TABLE_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    dataTypeObject = new DataType();
    dataTypeObject.value = DataTypeFactory.MULTI_LOOKUP;
    dataTypeObject.previewImage = MSPEmbeddedAssets.MULTI_LOOKUP_PREVIEW_IMAGE;
    dataTypeObject.label = DataTypeFactory.getDataTypeTranslation(dataTypeObject.value, dataTypeTranslation);
    if (dataTypeObject.label != null) {
      dataTypes.push(dataTypeObject);
    }

    return dataTypes;
  }

  /**
   *
   * @param dataTypeValue
   * @param dataTypeTranslation
   * @return
   */
  public static getDataTypeTranslation(dataTypeValue:string, dataTypeTranslation:KeyValue[]):string|undefined {

    for  (let keyValue of dataTypeTranslation) {

      if (keyValue.value == dataTypeValue) {
        return keyValue.key;
      }

    }

    return undefined;
  }

  /**
   *
   * @param dataTypeValue
   * @param dataTypes
   * @return
   */
  public static getDataTypeObject(dataTypeValue:string, dataTypes:DataType[]):DataType|undefined {

    for  (let dataTypeObject of dataTypes) {

      if (dataTypeObject.value == dataTypeValue) {
        return dataTypeObject;
      }

    }

    return (!(dataTypes !=null && dataTypes.length >0))? (<DataType>dataTypes[0] ) : undefined;
  }

  /**
   *
   * @param dataType
   * @return
   */
  public static isDataType(dataType:string):boolean {

    return (DataTypeFactory.dataTypeIcons.has(dataType));
  }

  /**
   *
   * @return
   */
  public static buildApplicationPreferenceAllowedDataTypes():string[] {

    var selector:string[] = [];

    selector.push(
        DataTypeFactory.SINGLE_LINE_OF_TEXT
    );
    selector.push(
        DataTypeFactory.DATE_AND_TIME
    );
    selector.push(
        DataTypeFactory.YES_NO
    );
    selector.push(
        DataTypeFactory.NUMBER
    );
    selector.push(
        DataTypeFactory.NUMBER_WITH_DECIMAL_POINT
    );
    selector.push(
        DataTypeFactory.LOOKUP
    );

    return selector;

  }
}