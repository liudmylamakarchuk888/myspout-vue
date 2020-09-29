import { BaseContent } from './BaseContent';
import { BaseDataType } from './BaseDataType'; 
import { TextAssembly } from "./TextAssembly";
import { Notification } from './Notification' 
export interface BaseProperty extends BaseContent {
    outOfTheBox: Boolean;
    translated: Boolean;
    dataType: BaseDataType;
    databaseColumnName: String;
    entityId: String;
    customLink: TextAssembly;
    valueChangedNotification: Notification;
    excludePropertyFromReportGenerator: Boolean;
    excludePropertyFromEventsGenerator: Boolean;
    defaultWidth: number;
    tabularReportsCategory: String;
    selected: Boolean;
    hideProperty: Boolean;
 
 
}
export interface Property extends BaseProperty {

    databaseColumnType: String;
    identity: Boolean;
    virtualProperty: Boolean;
    formula: Boolean;
    sql: String;
}
export interface BaseValueObject {

    property: any[];
    blank: Boolean;
}
export interface SimpleValueObject extends BaseValueObject {

    value: String;
}
export interface CheckBoxProperty extends Property {

    defaultValue: SimpleValueObject;
}

export interface ChoiceProperty extends Property {

    includeBlank: Boolean;
    blankOptionText: String;
    defaultValue: String;
    displayAsAutoCompleteInReports: Boolean;
}
export interface DateProperty extends Property {

    periodPickerType: String;
    defaultValue: DateValueObject;
    defaultMinValue: DateValueObject;
    defaultMaxValue: DateValueObject;
}
export interface DecimalProperty extends NumericProperty {

    numberOfDecimalPlaces: int;
}

export interface EntityBaseProperty extends Property {

    linkToEntity: Boolean;
    displayAsAutoCompleteInReports: Boolean;
}

export interface LookupProperty extends EntityBaseProperty {

    defaultValue: BaseValueObject;
    canBeUseAsReferenceInReports: Boolean;
    lookupToExtension: Boolean;
}
export interface ManyToManyProperty extends SetProperty {

    referenceColumn: String;
}

export interface NumericProperty extends Property {

    useThousandSeparator: Boolean;
    defaultValue: SimpleValueObject;
    defaultMinValue: SimpleValueObject;
    defaultMaxValue: SimpleValueObject;
}
export interface SetProperty extends EntityBaseProperty {

    table: String;
    filter: String;
    orderByColumnName: String;
    usingVanillaReference: Boolean;
}
export interface StringProperty extends Property {

    maximumTextLength: String;
    defaultValue: SimpleValueObject;
}
export interface TextProperty extends StringProperty {

}   