import { KeyValue } from "../KeyValue";

export class PeriodPickerTypeFactory {
  public static TIME: string = "1";

  public static DAY: string = "2";

  public static DAY_AND_TIME: string = "3";

  public static WEEK: string = "4";

  public static MONTH: string = "5";

  public static QUARTER: string = "6";

  public static YEAR: string = "7";

  public static getPeriodTypes(): KeyValue[] {
    var result: KeyValue[] = [];
    var type: KeyValue = new KeyValue();

    type.key = "Time";
    type.value = PeriodPickerTypeFactory.TIME;
    result.push(type);

    type = new KeyValue();
    type.key = "Day";
    type.value = PeriodPickerTypeFactory.DAY;
    result.push(type);

    type = new KeyValue();
    type.key = "Day and Time";
    type.value = PeriodPickerTypeFactory.DAY_AND_TIME;
    result.push(type);

    type = new KeyValue();
    type.key = "Week";
    type.value = PeriodPickerTypeFactory.WEEK;
    result.push(type);

    type = new KeyValue();
    type.key = "Month";
    type.value = PeriodPickerTypeFactory.MONTH;
    result.push(type);

    type = new KeyValue();
    type.key = "Quarter";
    type.value = PeriodPickerTypeFactory.QUARTER;
    result.push(type);

    type = new KeyValue();
    type.key = "Year";
    type.value = PeriodPickerTypeFactory.YEAR;
    result.push(type);

    return result;
  }

  public static getSelectedItem(value: string): number {
    var periodTypeList = PeriodPickerTypeFactory.getPeriodTypes();
    for (var i: number = 0; i < periodTypeList.length; i++) {
      if (periodTypeList[i].value == value) {
        return i;
      }
    }
    return -1;
  }
}
