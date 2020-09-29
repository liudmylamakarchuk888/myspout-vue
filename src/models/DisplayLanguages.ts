import { KeyValue } from './KeyValue';

export class BaseGeneralApplicationInformation {
}

export class ApplicationPreferenceCategories
    extends BaseGeneralApplicationInformation {
    applicationPreferenceCategories: string[] = [];
}
export class EntityReportOrderApplicationInformation
    extends BaseGeneralApplicationInformation {

    entityOrder: KeyValue[] = [];
}
export class MyWorkPoliciesAssignmentOrder
    extends BaseGeneralApplicationInformation {

    myWorkPoliciesOrder: KeyValue[] = [];
}
export class DisplayLanguage extends BaseGeneralApplicationInformation {

    id: number;
    name: string;
    active: boolean;
    defaultLanguage: boolean;
    disabled: boolean = false;

    /**
     *
     */
    constructor() {
        super();


    }
}
export class DisplayLanguages {
    displayLanguages: DisplayLanguage[] = []
}