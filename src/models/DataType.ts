
export interface DataType {
  key: string;
  value: string;
  icon: string;
}

const propertyDataTypes: DataType[] = [
  {
    "key": "Single Line of Text",
    "value": "1",
    "icon": "Single-line-of-text-f-property-16x16.png"
  },
  {
    "key": "Textarea",
    "value": "2",
    "icon": "Text-area16x16.png"
  },
  {
    "key": "Choice",
    "value": "3",
    "icon": "Number16x16.png"
  },
  {
    "key": "Date and Time",
    "value": "4",
    "icon": "Date-and-time16x16.png"
  },
  {
    "key": "Yes No",
    "value": "5",
    "icon": "Yes16x16.png"
  },
  {
    "key": "Number",
    "value": "6",
    "icon": "Number16x16.png"

  },
  {
    "key": "Large Number",
    "value": "7",
    "icon": "Large-number16x16.png"
  },
  {
    "key": "Number with Decimal Point",
    "value": "8",
    "icon": "Number-with-decimal-point16x16.png"
  },
  {
    "key": "Lookup",
    "value": "9",
    "icon": "Lookup16x16.png"
  },
  {
    "key": "Table",
    "value": "10",
    "icon": "table16x16.png"
  },
  {
    "key": "Multi Lookup",
    "value": "11",
    "icon": "multiple-Lookup16x16.png"
  },
  {
    "key": "WORKFLOW_STEP",
    "value": "12",
    "icon": "workflow_icon16x16.png"
  }
]

export const getPropertyDataType = (value:string) => {
  return propertyDataTypes.filter((type:DataType) => type.value === value)[0]
}