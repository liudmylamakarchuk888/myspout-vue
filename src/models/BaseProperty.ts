import { BaseContent } from './BaseContent';
import { DataType, DatabaseColumnType, DefaultValueClass } from './Entity';
import { TextAssembly } from "./TextAssembly";

export interface BaseProperty extends BaseContent {

    customLink: TextAssembly;
    dataType: DataType | any;
    entityID: string;
    valueChangedNotification: Notification;
    tabularReportsCategory: string;
    databaseColumnName: string;
    outOfTheBox: boolean;
    translated: boolean;
    excludePropertyFromReportGenerator: boolean;
    excludePropertyFromEventsGenerator: boolean;
    defaultWidth: number;

    databaseColumnType: DatabaseColumnType | null;
    sql: null;
    formula: boolean;
    identity: null;
    virtualProperty: boolean;
    defaultMaxValue?: null;
    defaultMinValue?: null;
    defaultValue?: DefaultValueClass | null | string;
    useThousandSeparator?: boolean;
    numberOfDecimalPlaces?: number;
    displayAsAutoCompleteInReports?: boolean;
    linkToEntity?: boolean;
    canBeUseAsReferenceInReports?: boolean;
    lookupToExtension?: boolean;
    filter?: null | string;
    orderByColumnName?: null | string;
    table?: string;
    usingVanillaReference?: boolean;
    maximumTextLength?: null;
    periodPickerType?: string;
    blankOptionText?: null;
    includeBlank?: boolean;
}
