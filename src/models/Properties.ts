import { BaseDataType } from './BaseDataType';
import { TextAssembly } from './TextAssembly';
import { Notification } from './Notification'
import { BaseContent } from './BaseContent';


export class BaseProperty extends BaseContent {
    outOfTheBox!: Boolean;
    translated!: Boolean;
    dataType!: BaseDataType;
    databaseColumnName!: string;
    entityId!: string;
    customLink!: TextAssembly;
    valueChangedNotification!: Notification;
    excludePropertyFromReportGenerator!: Boolean;
    excludePropertyFromEventsGenerator!: Boolean;
    defaultWidth!: number;
    tabularReportsCategory!: string;
    
}
export class BaseValueObject {
    property: any[] = [];
    blank!: Boolean;
}
export class SimpleValueObject extends BaseValueObject {
    value:string|undefined;
}

export class Property extends BaseProperty {
    databaseColumnType!: string;
    identity!: boolean;
    virtualProperty!: boolean;
    formula!: boolean;
    sql!: string;
}
export class NumericProperty extends Property {
    useThousandSeparator!: Boolean;
    defaultValue!: SimpleValueObject;
    defaultMinValue!: SimpleValueObject;
    defaultMaxValue!: SimpleValueObject;
}
export class CheckBoxProperty extends Property {
    defaultValue!: SimpleValueObject;
}
export class ChoiceProperty extends Property {
    includeBlank!: Boolean;
    blankOptionText!: string;
    defaultValue!: string;
    displayAsAutoCompleteInReports!: Boolean;
}
export class DateProperty extends Property {
    periodPickerType!: string;
    defaultValue!: DateValueObject;
    defaultMinValue!: DateValueObject;
    defaultMaxValue!: DateValueObject;
}
export class DateValueObject extends BaseValueObject {
    today!: Boolean;
}
export class DecimalProperty extends NumericProperty {
    numberOfDecimalPlaces!: number;
}
export class EntityBaseProperty extends Property {
    linkToEntity!: boolean;
    displayAsAutoCompleteInReports!: boolean;
}
export class LookupProperty extends EntityBaseProperty {
    defaultValue!: BaseValueObject;
    canBeUseAsReferenceInReports!: boolean;
    lookupToExtension!: boolean;
}

export class SetProperty extends EntityBaseProperty {
    table!: string;
    filter!: string;
    orderByColumnName!: string;
    usingVanillaReference!: Boolean;
}
export class ManyToManyProperty extends SetProperty {
    referenceColumn!: string;

}

export class StringProperty extends Property {
    maximumTextLength!: string;
    defaultValue!: SimpleValueObject;
}

export class TextProperty extends StringProperty { }
