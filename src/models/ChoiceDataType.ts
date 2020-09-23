import { BaseDataType } from "./BaseDataType";
export interface ChoiceDataType
    extends BaseDataType {
    options: ChoiceDataType[];
}
