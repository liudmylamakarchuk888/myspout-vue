import { KeyValue } from "../KeyValue";
import { DataTypeFactory } from "./DataTypeFactory";
import { LanguagesPresentationModel } from "./LanguagesPresentationModel";

import { ChoiceOption } from "../ChoiceOption";
import { Node } from "@/models/Node";
import { BaseDataType } from "../BaseDataType";
import { EntityBasedDataType } from "../EntityBasedDataType";
import { ChoiceDataType } from "../ChoiceDataType";
import { StringUtil } from "./StringUtil";
import { PeriodPickerTypeFactory } from "./PeriodPickerTypeFactory";
import { DataUtils } from "./DataUtils";
import { LanguageTranslation } from "../LanguageTranslation";
import { MyWorkPresentationModel } from "./MyWorkPresentationModel";
import { Entity } from "../Entity";
import { CreationPolicyType } from "../CreationPolicyType";
import { BaseControl, MoreInfoControl } from "../Controls/MoreInfoControl";
import {
  BaseProperty,
  CheckBoxProperty,
  ChoiceProperty,
  DateProperty,
  DecimalProperty,
  LookupProperty,
  ManyToManyProperty,
  NumericProperty,
  Property,
  SetProperty,
  StringProperty,
  TextProperty
} from "../Properties";

export class PropertyFactory {
  //--------------------------------------- CONST PROPERTIES   ------------------------------------------------//

  public static TABLE_ATTRIBUTE: string = "TABLE";

  public static WORKFLOWABLE_ATTRIBUTE: string = "WORKFLOWABLE";

  public static CATEGORIZABLE_ATTRIBUTE: string = "CATEGORIZABLE";

  public static DEFAULT_PNP_PROPERTY_SYSTEM_NAME: string = "name";

  public static DEFAULT_UNP_PROPERTY_SYSTEM_NAME: string = "name";

  public static NAME_PROPERTY_SYSTEM_NAME: string = "name";

  public static INTEGRATION_IDENTIFIER_PROPERTY_SYSTEM_NAME: string =
    "integrationIdentifier";

  public static UPDATE_USER_PROPERTY_SYSTEM_NAME: string = "updateUser";

  public static TIME_UPDATED_PROPERTY_SYSTEM_NAME: string = "timeUpdated";

  public static TIME_CREATED_PROPERTY_SYSTEM_NAME: string = "timeCreated";

  public static ID_PROPERTY_SYSTEM_NAME: string = "id";

  public static MY_WORK_TASK_PROPERTY_SYSTEM_NAME: string = "myWorkTask";

  public static DEFAULT_COLUMN_WIDTH: number = 100;

  public static DEFAULT_MORE_INFO_COLUMN_WIDTH: number = 60;

  public static langModel = LanguagesPresentationModel.getInstance();

  public static createProperty(
    dataTypeValue: string,
    dateType: KeyValue,
    useThousandSeparator: boolean,
    numberOfDecimalPlaces: number,
    selectedNode: Node,
    choiceOptions: [],
    lookupClassName: string,
    displayName: string,
    description: string,
    languageTranslations: [],
    rowFilter: string,
    orderBy: string,
    referenceColumn: string,
    referenceTable: string,
    dataTypeTranslations: [],
    notes: string,
    systemName: string,
    dataBaseColumnName: string,
    entityId: string,
    formulaSqlQuery: string = "",

    isFormula: boolean = false
  ): BaseProperty {
    var baseProperty = {} as any;

    if (dataTypeValue == DataTypeFactory.TABLE) {
      baseProperty = new SetProperty();
    } else if (dataTypeValue == DataTypeFactory.MULTI_LOOKUP) {
      baseProperty = new ManyToManyProperty();
      baseProperty.displayAsAutoCompleteInReports = true;
    } else if (dataTypeValue == DataTypeFactory.SINGLE_LINE_OF_TEXT) {
      baseProperty = new StringProperty();
    } else if (dataTypeValue == DataTypeFactory.TEXT_AREA) {
      baseProperty = new TextProperty();
      baseProperty.maximumTextLength = "400";
    } else if (dataTypeValue == DataTypeFactory.DATE_AND_TIME) {
      baseProperty = new DateProperty();
      baseProperty.periodPickerType = String(dateType.value);
    } else if (
      dataTypeValue == DataTypeFactory.NUMBER ||
      dataTypeValue == DataTypeFactory.LARGE_NUMBER
    ) {
      baseProperty = new NumericProperty();
      baseProperty.useThousandSeparator = useThousandSeparator;
    } else if (dataTypeValue == DataTypeFactory.NUMBER_WITH_DECIMAL_POINT) {
      baseProperty = new DecimalProperty();
      baseProperty.numberOfDecimalPlaces = numberOfDecimalPlaces;
      baseProperty.useThousandSeparator = useThousandSeparator;
    } else if (dataTypeValue == DataTypeFactory.CHOICE) {
      baseProperty = new ChoiceProperty();
    } else if (dataTypeValue == DataTypeFactory.YES_NO) {
      baseProperty = new CheckBoxProperty();
    } else if (dataTypeValue == DataTypeFactory.LOOKUP) {
      baseProperty = new LookupProperty();
      baseProperty.displayAsAutoCompleteInReports = true;
    } else {
      baseProperty = new Property();
    }

    if (isFormula) {
      baseProperty.formula = true;
    }

    if (formulaSqlQuery) {
      baseProperty.sql = StringUtil.substitute("({0})", formulaSqlQuery);
    }

    if (baseProperty instanceof SetProperty) {
      baseProperty.filter = rowFilter;
      baseProperty.orderByColumnName = orderBy;
      baseProperty.table = <string>(
        selectedNode.attributes.find(
          x => x.key === PropertyFactory.TABLE_ATTRIBUTE
        )?.value
      );
    }

    if (baseProperty instanceof ManyToManyProperty) {
      baseProperty.referenceColumn = referenceColumn;
      baseProperty.table = referenceTable;
      baseProperty.filter = rowFilter;
    }

    baseProperty.dataType = PropertyFactory.getPropertyDataType(
      dataTypeValue,
      selectedNode,
      dataTypeTranslations,
      choiceOptions,
      lookupClassName
    );

    if (
      dataTypeValue == DataTypeFactory.CHOICE &&
      baseProperty.dataType.options &&
      baseProperty.dataType.options.length > 0
    ) {
      baseProperty.defaultValue = (<ChoiceOption>(
        baseProperty.dataType.options[0]
      )).systemName;
    }

    baseProperty.displayName = displayName;

    baseProperty.description = description;

    baseProperty.notes = notes;

    baseProperty.systemName = systemName;

    baseProperty.databaseColumnName = dataBaseColumnName;

    baseProperty.outOfTheBox = false;

    baseProperty.languageTranslations = languageTranslations;

    baseProperty.entityId = entityId;

    baseProperty.defaultWidth = PropertyFactory.getDefaultColumnWidth(
      dataTypeValue
    );

    return baseProperty;
  }

  /**
   *
   * @param dataTypeValue
   * @param selectedNode
   * @param dataTypeTranslation
   * @param choiceOptions
   * @param languagesPresentationModel
   * @param lookupClassName
   * @return
   */
  private static getPropertyDataType(
    dataTypeValue: string,
    selectedNode: Node,
    dataTypeTranslation: [],
    choiceOptions: [],
    lookupClassName: string
  ): BaseDataType {
    var baseDataType = {} as any;

    if (
      dataTypeValue == DataTypeFactory.LOOKUP ||
      dataTypeValue == DataTypeFactory.TABLE ||
      dataTypeValue == DataTypeFactory.MULTI_LOOKUP
    ) {
      baseDataType = new EntityBasedDataType();
      baseDataType.lookupClassName = selectedNode.id;
    } else if (dataTypeValue == DataTypeFactory.CHOICE) {
      baseDataType = new ChoiceDataType();

      baseDataType.options = choiceOptions;
    } else {
      baseDataType = new BaseDataType();
    }

    switch (dataTypeValue) {
      case DataTypeFactory.LOOKUP:
        baseDataType.key =
          DataTypeFactory.getDataTypeTranslation(
            dataTypeValue,
            dataTypeTranslation
          ) +
          " " +
          PropertyFactory.langModel.getLocalizedString(
            LanguagesPresentationModel.TO_LOWER_CASE
          ) +
          " " +
          lookupClassName;
        break;
      case DataTypeFactory.MULTI_LOOKUP:
      case DataTypeFactory.TABLE:
        baseDataType.key =
          DataTypeFactory.getDataTypeTranslation(
            dataTypeValue,
            dataTypeTranslation
          ) +
          " " +
          PropertyFactory.langModel.getLocalizedString(
            LanguagesPresentationModel.OF
          ) +
          " " +
          lookupClassName;
        break;
      default:
        baseDataType.key = DataTypeFactory.getDataTypeTranslation(
          dataTypeValue,
          dataTypeTranslation
        );
    }

    baseDataType.value = dataTypeValue;

    return baseDataType;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param entityId
   * @return
   */
  public static getBasicProperties(entityId: string): Property[] {
    let languagesPresentationModel = LanguagesPresentationModel.getInstance();
    var properties: Property[] = [];

    var idProperty: Property = new NumericProperty();
    idProperty.databaseColumnType = "bigint identity (19)";

    PropertyFactory.setPropertyData(
      idProperty,
      new BaseDataType(),
      "id",
      PropertyFactory.ID_PROPERTY_SYSTEM_NAME,
      LanguagesPresentationModel.PERSISTENCEBASEDTO_ID_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.LARGE_NUMBER
      ),
      DataTypeFactory.LARGE_NUMBER,
      entityId
    );

    properties.push(idProperty);

    var nameProperty: Property = new StringProperty();
    nameProperty.databaseColumnType = "varchar (250)";

    PropertyFactory.setPropertyData(
      nameProperty,
      new BaseDataType(),
      "Name",
      PropertyFactory.NAME_PROPERTY_SYSTEM_NAME,
      LanguagesPresentationModel.PERSISTENCEBASEDTO_NAME_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityId
    );

    properties.push(nameProperty);

    var creationUserProperty = new LookupProperty();
    creationUserProperty.databaseColumnType = "bigint (19)";

    PropertyFactory.setPropertyData(
      creationUserProperty,
      new EntityBasedDataType(),
      "refCreationUserid",
      "creationUser",
      LanguagesPresentationModel.PERSISTENCEBASEDTO_CREATIONUSER_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.USER_DISPLAY_NAME
        )
      ),
      DataTypeFactory.LOOKUP,
      entityId
    );

    (<EntityBasedDataType>creationUserProperty.dataType).lookupClassName =
      "com.msp.dao.entities.User";

    properties.push(creationUserProperty);

    var stateProperty: Property = new NumericProperty();
    stateProperty.databaseColumnType = "int (10)";

    PropertyFactory.setPropertyData(
      stateProperty,
      new BaseDataType(),
      "State",
      "state",
      LanguagesPresentationModel.PERSISTENCEBASEDTO_STATE_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.NUMBER
      ),
      DataTypeFactory.NUMBER,
      entityId
    );

    properties.push(stateProperty);

    var timeCreatedProperty = new DateProperty();
    timeCreatedProperty.databaseColumnType = "datetime (23)";
    timeCreatedProperty.periodPickerType = PeriodPickerTypeFactory.DAY_AND_TIME;

    PropertyFactory.setPropertyData(
      timeCreatedProperty,
      new BaseDataType(),
      "TimeCreated",
      PropertyFactory.TIME_CREATED_PROPERTY_SYSTEM_NAME,
      LanguagesPresentationModel.PERSISTENCEBASEDTO_TIMECREATED_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.DATE_AND_TIME
      ),
      DataTypeFactory.DATE_AND_TIME,
      entityId
    );

    properties.push(timeCreatedProperty);

    var timeUpdatedProperty = new DateProperty();
    timeUpdatedProperty.databaseColumnType = "datetime (23)";
    timeUpdatedProperty.periodPickerType = PeriodPickerTypeFactory.DAY_AND_TIME;

    PropertyFactory.setPropertyData(
      timeUpdatedProperty,
      new BaseDataType(),
      "TimeUpdated",
      PropertyFactory.TIME_UPDATED_PROPERTY_SYSTEM_NAME,
      LanguagesPresentationModel.PERSISTENCEBASEDTO_TIMEUPDATED_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.DATE_AND_TIME
      ),
      DataTypeFactory.DATE_AND_TIME,
      entityId
    );

    properties.push(timeUpdatedProperty);

    var updateUserProperty = new LookupProperty();
    updateUserProperty.databaseColumnType = "bigint (19)";

    PropertyFactory.setPropertyData(
      updateUserProperty,
      new EntityBasedDataType(),
      "refUpdateUserid",
      PropertyFactory.UPDATE_USER_PROPERTY_SYSTEM_NAME,
      LanguagesPresentationModel.PERSISTENCEBASEDTO_UPDATEUSER_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.USER_ENTITY_DISPLAY_NAME
        )
      ),
      DataTypeFactory.LOOKUP,
      entityId
    );

    (<EntityBasedDataType>updateUserProperty.dataType).lookupClassName =
      "com.msp.dao.entities.User";

    properties.push(updateUserProperty);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param entityId
   * @return
   */
  public static getSupportAttachmentsProperties(entityId: string): Property[] {
    var properties: Property[] = [];

    var attachmentsProperty = new SetProperty();
    attachmentsProperty.table = "Attachments";

    PropertyFactory.setPropertyData(
      attachmentsProperty,
      new EntityBasedDataType(),
      "psurefEntityRefid",
      "attachments",
      LanguagesPresentationModel.IATTACHMENTSSETHOLDER_ATTACHMENTS_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TABLE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.OF
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.ATTACHMENTS_PROPERTY_DISPLAY_NAME
        )
      ),
      DataTypeFactory.TABLE,
      entityId
    );

    (<EntityBasedDataType>attachmentsProperty.dataType).lookupClassName =
      "com.msp.dao.entities.Attachment";

    properties.push(attachmentsProperty);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param entityId
   * @return
   */
  public static getSupportIntegrationProperties(entityId: string): Property[] {
    const languagesPresentationModel = LanguagesPresentationModel.getInstance();
    var properties: Property[] = [];

    var integrationIdentifier = new StringProperty();
    integrationIdentifier.databaseColumnType = "varchar (250)";

    PropertyFactory.setPropertyData(
      integrationIdentifier,
      new BaseDataType(),
      "IntegrationIdentifier",
      PropertyFactory.INTEGRATION_IDENTIFIER_PROPERTY_SYSTEM_NAME,
      LanguagesPresentationModel.PERSISTENCEBASEDTO_INTEGRATION_IDENTIFIER_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityId
    );

    properties.push(integrationIdentifier);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param entityId
   * @return
   */
  public static getSupportFollowersProperties(entityId: string): Property[] {
    var properties: Property[] = [];

    var followersProperty = new SetProperty();
    followersProperty.table = "refObjectsFollowerUsers";

    PropertyFactory.setPropertyData(
      followersProperty,
      new EntityBasedDataType(),
      "psurefEntityRefid",
      "followerUsers",
      LanguagesPresentationModel.PERSISTENCEBASEDTO_FOLLOWERS_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TABLE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.OF
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.FOLLOWERS_PROPERTY_DISPLAY_NAME
        )
      ),
      DataTypeFactory.TABLE,
      entityId
    );

    (<EntityBasedDataType>followersProperty.dataType).lookupClassName =
      "com.msp.dao.entities.Attachment";

    properties.push(followersProperty);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param entityId
   * @return
   */
  public static getSupportTimeTrackingProperties(entityId: string): Property[] {
    var properties: Property[] = [];

    var timeTrackingProperty = new LookupProperty();

    timeTrackingProperty.databaseColumnType = "bigint (19)";

    PropertyFactory.setPropertyData(
      timeTrackingProperty,
      new EntityBasedDataType(),
      "refMyWorkTaskid",
      PropertyFactory.MY_WORK_TASK_PROPERTY_SYSTEM_NAME,
      LanguagesPresentationModel.PERSISTENCEBASEDTO_MYWORKTASK_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.MYWORKTASK_ENTITY_DISPLAY_NAME
        )
      ),
      DataTypeFactory.LOOKUP,
      entityId,
      LanguagesPresentationModel.PERSISTENCEBASEDTO_MYWORKTASK_DESCRIPTION
    );

    (<EntityBasedDataType>timeTrackingProperty.dataType).lookupClassName =
      MyWorkPresentationModel.MY_WORK_TASK_CLASS_NAME;

    properties.push(timeTrackingProperty);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param lookupEntity
   * @return
   */
  public static getMyWorkTaskLookupToEntity(
    languagesPresentationModel: LanguagesPresentationModel,
    lookupEntity: Entity
  ): LookupProperty {
    var lookupProperty: LookupProperty = new LookupProperty();

    lookupProperty.databaseColumnType = "bigint (19)";

    var lookupEntityEnglishDisplayName: string = lookupEntity.id.substring(
      lookupEntity.id.lastIndexOf(".") + 1
    );

    if (lookupEntityEnglishDisplayName.indexOf("Cse_") == 0) {
      lookupEntityEnglishDisplayName = lookupEntityEnglishDisplayName.replace(
        "Cse_",
        ""
      );
    }

    PropertyFactory.setPropertyData(
      lookupProperty,
      new EntityBasedDataType(),
      StringUtil.substitute("refCse{0}id", lookupEntityEnglishDisplayName),
      lookupEntity.systemName.indexOf("Cse_") == 0
        ? lookupEntity.systemName
        : StringUtil.substitute("cse{0}", lookupEntity.systemName),
      "",
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        lookupEntity.displayName
      ),
      DataTypeFactory.LOOKUP,
      MyWorkPresentationModel.MY_WORK_TASK_CLASS_NAME,
      "",
      lookupEntityEnglishDisplayName
    );

    (<EntityBasedDataType>lookupProperty.dataType).lookupClassName =
      lookupEntity.id;

    lookupProperty.outOfTheBox = true;

    return lookupProperty;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param entityId
   * @return
   */
  public static getSupportWorkflowConfigurationProperties(
    entityId: string
  ): Property[] {
    var properties: Property[] = [];

    var currentStepDescriptionProperty = new TextProperty();
    currentStepDescriptionProperty.databaseColumnType = "varchar (250)";

    PropertyFactory.setPropertyData(
      currentStepDescriptionProperty,
      new BaseDataType(),
      "CurrentStepDescription",
      "currentStepDescription",
      LanguagesPresentationModel.WORKFLOWABLE_CURRENTSTEPDESCRIPTION_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityId
    );

    currentStepDescriptionProperty.translated = true;

    properties.push(currentStepDescriptionProperty);

    var currentStepIdProperty: Property = new TextProperty();
    currentStepIdProperty.databaseColumnType = "varchar (250)";

    PropertyFactory.setPropertyData(
      currentStepIdProperty,
      new BaseDataType(),
      "CurrentStepId",
      "currentStepId",
      LanguagesPresentationModel.WORKFLOWABLE_CURRENTSTEPID_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityId
    );

    properties.push(currentStepIdProperty);

    var lastTimeStatusChangedProperty: Property = new DateProperty();
    lastTimeStatusChangedProperty.databaseColumnType = "datetime (23)";
    (<DateProperty>lastTimeStatusChangedProperty).periodPickerType =
      PeriodPickerTypeFactory.DAY_AND_TIME;

    PropertyFactory.setPropertyData(
      lastTimeStatusChangedProperty,
      new BaseDataType(),
      "lastTimeStatusChanged",
      "lastTimeStatusChanged",
      LanguagesPresentationModel.STATUSDTO_LASTTIMESTATUSCHANGED_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.DATE_AND_TIME
      ),
      DataTypeFactory.DATE_AND_TIME,
      entityId
    );

    properties.push(lastTimeStatusChangedProperty);

    var previousStatusProperty: Property = new LookupProperty();
    previousStatusProperty.databaseColumnType = "bigint (19)";

    PropertyFactory.setPropertyData(
      previousStatusProperty,
      new EntityBasedDataType(),
      "refPreviousStatusid",
      "previousStatus",
      LanguagesPresentationModel.STATUSDTO_PREVIOUSSTATUS_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.STATUS_DISPLAY_NAME
        )
      ),
      DataTypeFactory.LOOKUP,
      entityId
    );

    (<EntityBasedDataType>previousStatusProperty.dataType).lookupClassName =
      "com.msp.dao.entities.Status";

    properties.push(previousStatusProperty);

    var previousStepDescriptionProperty: Property = new TextProperty();
    previousStepDescriptionProperty.databaseColumnType = "varchar (250)";

    PropertyFactory.setPropertyData(
      previousStepDescriptionProperty,
      new BaseDataType(),
      "PreviousStepDescription",
      "previousStepDescription",
      LanguagesPresentationModel.STATUSDTO_PREVIOUSSTEPDESCRIPTION_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityId
    );

    previousStepDescriptionProperty.translated = true;

    properties.push(previousStepDescriptionProperty);

    var previousStepIdProperty: Property = new TextProperty();
    previousStepIdProperty.databaseColumnType = "varchar (250)";

    PropertyFactory.setPropertyData(
      previousStepIdProperty,
      new BaseDataType(),
      "PreviousStepId",
      "previousStepId",
      LanguagesPresentationModel.STATUSDTO_PREVIOUSSTEPID_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityId
    );

    properties.push(previousStepIdProperty);

    var statusProperty: Property = new LookupProperty();
    statusProperty.databaseColumnType = "bigint (19)";

    PropertyFactory.setPropertyData(
      statusProperty,
      new EntityBasedDataType(),
      "refStatusid",
      "status",
      LanguagesPresentationModel.STATUSDTO_STATUS_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.STATUS_DISPLAY_NAME
        )
      ),
      DataTypeFactory.LOOKUP,
      entityId
    );

    (<EntityBasedDataType>statusProperty.dataType).lookupClassName =
      "com.msp.dao.entities.Status";

    properties.push(statusProperty);

    var previousFlowStepIdProperty: Property = new TextProperty();
    previousFlowStepIdProperty.databaseColumnType = "varchar (250)";

    PropertyFactory.setPropertyData(
      previousFlowStepIdProperty,
      new BaseDataType(),
      "PreviousFlowStepId",
      "previousFlowStepId",
      LanguagesPresentationModel.STATUSDTO_PREVIOUSFLOWSTEPID_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityId
    );

    properties.push(previousFlowStepIdProperty);

    var previousFlowStepDescriptionProperty: Property = new TextProperty();
    previousFlowStepDescriptionProperty.databaseColumnType = "varchar (250)";

    PropertyFactory.setPropertyData(
      previousFlowStepDescriptionProperty,
      new BaseDataType(),
      "PreviousFlowStepDescription",
      "previousFlowStepDescription",
      LanguagesPresentationModel.STATUSDTO_PREVIOUSFLOWSTEPDESCRIPTION_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityId
    );

    previousFlowStepDescriptionProperty.translated = true;

    properties.push(previousFlowStepDescriptionProperty);

    var integrationFlagProperty: Property = new ChoiceProperty();

    PropertyFactory.setPropertyData(
      integrationFlagProperty,
      new BaseDataType(),
      "IntegrationFlag",
      "integrationFlag",
      LanguagesPresentationModel.WORKFLOWABLE_INTEGRATIONFLAG_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.CHOICE,
      entityId
    );

    var choiceDataType = new ChoiceDataType();
    choiceDataType.key = "Choice";
    choiceDataType.value = "3";

    choiceDataType.options = PropertyFactory.getIntegrationFlagChoiceOptions();

    integrationFlagProperty.dataType = choiceDataType;

    properties.push(integrationFlagProperty);

    var assigneeUserProperty: Property = new LookupProperty();
    assigneeUserProperty.databaseColumnType = "bigint (19)";

    PropertyFactory.setPropertyData(
      assigneeUserProperty,
      new EntityBasedDataType(),
      "refAssigneeUserid",
      "assigneeUser",
      LanguagesPresentationModel.WORKFLOWABLE_ASSIGNEE_USER_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.USER_DISPLAY_NAME
        )
      ),
      DataTypeFactory.LOOKUP,
      entityId
    );

    (<EntityBasedDataType>assigneeUserProperty.dataType).lookupClassName =
      "com.msp.dao.entities.User";

    properties.push(assigneeUserProperty);

    var integrationOperationsProperty: SetProperty = new SetProperty();

    integrationOperationsProperty.table = "InstanceLevelIntegrationOperations";

    PropertyFactory.setPropertyData(
      integrationOperationsProperty,
      new EntityBasedDataType(),
      "psurefEntityRefid",
      "integrationOperations",
      LanguagesPresentationModel.WORKFLOWABLE_INTEGRATIONINFORMATIONS_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TABLE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.OF
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.INSTANCELEVELINTEGRATIONOPERATION_ENTITY_DISPLAY_NAME
        )
      ),
      DataTypeFactory.TABLE,
      entityId
    );

    (<EntityBasedDataType>(
      integrationOperationsProperty.dataType
    )).lookupClassName =
      "com.msp.dao.entities.InstanceLevelIntegrationOperation";

    properties.push(integrationOperationsProperty);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @return
   */
  private static getIntegrationFlagChoiceOptions(): ChoiceOption[] {
    var successChoiceOption: ChoiceOption = new ChoiceOption();
    var warningChoiceOption: ChoiceOption = new ChoiceOption();
    var failedChoiceOption: ChoiceOption = new ChoiceOption();

    successChoiceOption.languageTranslations = PropertyFactory.getLanguagesTranslationsByKey(
      LanguagesPresentationModel.INTEGRATIONFLAG_SUCCESS
    );
    successChoiceOption.systemName = "integrationSuccess";
    DataUtils.setDisplayNameAndDescription(
      successChoiceOption,
      PropertyFactory.langModel.currentLocale
    );

    warningChoiceOption.languageTranslations = PropertyFactory.getLanguagesTranslationsByKey(
      LanguagesPresentationModel.INTEGRATIONFLAG_WARNING
    );
    warningChoiceOption.systemName = "integrationWarning";
    DataUtils.setDisplayNameAndDescription(
      warningChoiceOption,
      PropertyFactory.langModel.currentLocale
    );

    failedChoiceOption.languageTranslations = PropertyFactory.getLanguagesTranslationsByKey(
      LanguagesPresentationModel.INTEGRATIONFLAG_FAILED
    );
    failedChoiceOption.systemName = "integrationFailed";
    DataUtils.setDisplayNameAndDescription(
      failedChoiceOption,
      PropertyFactory.langModel.currentLocale
    );

    return [successChoiceOption, warningChoiceOption, failedChoiceOption];
  }

  /**
   *
   * @param key
   * @param languagesPresentationModel
   * @return
   */
  private static getLanguagesTranslationsByKey(
    key: string
  ): LanguageTranslation[] {
    var languageTranslations: LanguageTranslation[] = [];

    for (let lang of PropertyFactory.langModel.languages) {
      var languageTranslation = new LanguageTranslation();
      languageTranslation.language = <string>lang[0];
      languageTranslation.displayName = PropertyFactory.langModel.getTranslation(
        languageTranslation.language,
        key
      );
      languageTranslation.description = "";
      languageTranslations.push(languageTranslation);
    }

    return languageTranslations;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param entityId
   * @return
   */
  public static getSupportCategorizableProperties(
    entityId: string
  ): Property[] {
    var properties: Property[] = [];

    var entityCategoryProperty: Property = new LookupProperty();
    entityCategoryProperty.databaseColumnType = "bigint (19)";

    PropertyFactory.setPropertyData(
      entityCategoryProperty,
      new EntityBasedDataType(),
      "refEntityCategoryid",
      "entityCategory",
      LanguagesPresentationModel.CATEGORIZABLE_ENTITYCATEGORY_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.ENTITYCATEGORY_DISPLAY_NAME
        )
      ),
      DataTypeFactory.LOOKUP,
      entityId
    );

    (<EntityBasedDataType>entityCategoryProperty.dataType).lookupClassName =
      "com.msp.dao.entities.EntityCategory";

    properties.push(entityCategoryProperty);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param tableName
   * @param entityClassName
   * @param entityDisplayName
   * @return
   */
  public static getSupportTreeProperties(
    tableName: string,
    entityClassName: string,
    entityDisplayName: string,
    creationPolicyType: number
  ): Property[] {
    var properties: Property[] = [];

    if (creationPolicyType == CreationPolicyType.TABLE) {
      var levelInTreeProperty: Property = new NumericProperty();
      levelInTreeProperty.databaseColumnType = "int (10)";

      PropertyFactory.setPropertyData(
        levelInTreeProperty,
        new BaseDataType(),
        "LevelInTree",
        "levelInTree",
        LanguagesPresentationModel.ITREETABLE_LEVELINTREE_DISPLAY_NAME,
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.NUMBER
        ),
        DataTypeFactory.NUMBER,
        entityClassName
      );

      properties.push(levelInTreeProperty);

      var sequenceProperty: Property = new NumericProperty();
      sequenceProperty.databaseColumnType = "int (10)";

      PropertyFactory.setPropertyData(
        sequenceProperty,
        new BaseDataType(),
        "Sequence",
        "sequence",
        LanguagesPresentationModel.ITREETABLE_SEQUENCE_DISPLAY_NAME,
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.NUMBER
        ),
        DataTypeFactory.NUMBER,
        entityClassName
      );

      properties.push(sequenceProperty);
    }

    var pathProperty: Property = new StringProperty();
    pathProperty.databaseColumnType = "varchar (600)";

    PropertyFactory.setPropertyData(
      pathProperty,
      new BaseDataType(),
      "Path",
      "path",
      LanguagesPresentationModel.ITREE_PATH_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.SINGLE_LINE_OF_TEXT
      ),
      DataTypeFactory.SINGLE_LINE_OF_TEXT,
      entityClassName
    );

    properties.push(pathProperty);

    var childrenProperty: SetProperty = new SetProperty();
    childrenProperty.table = tableName;

    PropertyFactory.setPropertyData(
      childrenProperty,
      new EntityBasedDataType(),
      "id",
      "children",
      LanguagesPresentationModel.ITREE_CHILDREN_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TABLE
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.OF
        ),
        entityDisplayName
      ),
      DataTypeFactory.TABLE,
      entityClassName
    );

    (<EntityBasedDataType>(
      childrenProperty.dataType
    )).lookupClassName = entityClassName;

    properties.push(childrenProperty);

    var indexPositionProperty: Property = new NumericProperty();
    indexPositionProperty.databaseColumnType = "int (10)";

    PropertyFactory.setPropertyData(
      indexPositionProperty,
      new BaseDataType(),
      "IndexPosition",
      "indexPosition",
      LanguagesPresentationModel.INDEXPOSITIONABLE_INDEXPOSITION_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.NUMBER
      ),
      DataTypeFactory.NUMBER,
      entityClassName
    );

    properties.push(indexPositionProperty);

    var parentProperty: Property = new LookupProperty();
    parentProperty.databaseColumnType = "bigint (19)";

    PropertyFactory.setPropertyData(
      parentProperty,
      new EntityBasedDataType(),
      "refParentid",
      "parent",
      LanguagesPresentationModel.ITREE_PARENT_DISPLAY_NAME,
      StringUtil.substitute(
        "{0} {1} {2}",
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.LOOKUP
        ),
        PropertyFactory.langModel.getLocalizedString(
          LanguagesPresentationModel.TO_LOWER_CASE
        ),
        entityDisplayName
      ),
      DataTypeFactory.LOOKUP,
      entityClassName
    );

    (<EntityBasedDataType>(
      parentProperty.dataType
    )).lookupClassName = entityClassName;

    properties.push(parentProperty);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param entityId
   * @return
   */
  public static getIndexPositionProperty(entityId: string): Property[] {
    var properties: Property[] = [];

    var indexPositionProperty: Property = new NumericProperty();
    indexPositionProperty.databaseColumnType = "int (10)";

    PropertyFactory.setPropertyData(
      indexPositionProperty,
      new BaseDataType(),
      "IndexPosition",
      "indexPosition",
      LanguagesPresentationModel.INDEXPOSITIONABLE_INDEXPOSITION_DISPLAY_NAME,
      PropertyFactory.langModel.getLocalizedString(
        LanguagesPresentationModel.NUMBER
      ),
      DataTypeFactory.NUMBER,
      entityId
    );

    properties.push(indexPositionProperty);

    return properties;
  }

  /**
   *
   * @param languagesPresentationModel
   * @param property
   * @param dataType
   * @param databaseColumnName
   * @param systemName
   * @param displayNameIdentifier
   * @param dataTypeKey
   * @param dataTypeValue
   * @param entityId
   * @param descriptionLanguageIdentifier
   * @param explicitDisplayName
   */
  private static setPropertyData(
    property: BaseProperty,
    dataType: BaseDataType,
    databaseColumnName: string,
    systemName: string,
    displayNameIdentifier: string,
    dataTypeKey: string,
    dataTypeValue: string,
    entityId: string,
    descriptionLanguageIdentifier: string = "",
    explicitDisplayName: string = ""
  ): void {
    property.dataType = dataType;

    property.databaseColumnName = databaseColumnName;
    property.systemName = systemName;
    property.outOfTheBox = true;

    if (explicitDisplayName != null) {
      property.displayName = explicitDisplayName;
    } else {
      property.displayName = PropertyFactory.langModel.getLocalizedStringOfPrimaryLanguage(
        displayNameIdentifier
      );
    }

    property.description =
      descriptionLanguageIdentifier != null
        ? PropertyFactory.langModel.getLocalizedString(
          descriptionLanguageIdentifier
        )
        : "";
    property.dataType.key = dataTypeKey;
    property.dataType.value = dataTypeValue;
    property.entityId = entityId;

    var languageTranslations: LanguageTranslation[] = [];

    for (let lang of PropertyFactory.langModel.languages) {
      if (
        <string>lang[0] != LanguagesPresentationModel.PRIMARY_LANGUAGE_INITIALS
      ) {
        var languageTranslation: LanguageTranslation = new LanguageTranslation();

        languageTranslation.language = <string>lang[0];

        if (explicitDisplayName != null) {
          languageTranslation.displayName = explicitDisplayName;
        } else {
          languageTranslation.displayName = PropertyFactory.langModel.getTranslation(
            languageTranslation.language,
            displayNameIdentifier
          );
        }

        var description: string | null = null;

        if (descriptionLanguageIdentifier != null) {
          description = PropertyFactory.langModel.getTranslation(
            languageTranslation.language,
            descriptionLanguageIdentifier
          );
        }

        languageTranslation.description = description;

        languageTranslations.push(languageTranslation);
      }
    }

    property.languageTranslations = languageTranslations;

    property.defaultWidth = PropertyFactory.getDefaultColumnWidth(
      dataTypeValue
    );
  }

  /**
   *
   * @param dataType
   * @return
   */
  public static getDefaultColumnWidth(dataType: string): number {
    switch (dataType) {
      case DataTypeFactory.LOOKUP:
      case DataTypeFactory.MULTI_LOOKUP:
      case DataTypeFactory.SINGLE_LINE_OF_TEXT:
      case DataTypeFactory.TEXT_AREA:
        return 200;

      case DataTypeFactory.CHOICE:
        return 150;

      case DataTypeFactory.DATE_AND_TIME:
        return 100;

      case DataTypeFactory.NUMBER:
      case DataTypeFactory.LARGE_NUMBER:
      case DataTypeFactory.NUMBER_WITH_DECIMAL_POINT:
      case DataTypeFactory.YES_NO:
        return 50;

      default:
        return 100;
    }
  }

  /**
   *
   * @param dataType
   */
  public static getPropertyByDataType(dataType: string): Property | null {
    switch (dataType) {
      case DataTypeFactory.TABLE:
        return new SetProperty();

      case DataTypeFactory.MULTI_LOOKUP:
        return new ManyToManyProperty();

      case DataTypeFactory.SINGLE_LINE_OF_TEXT:
        return new StringProperty();

      case DataTypeFactory.TEXT_AREA:
        return new TextProperty();

      case DataTypeFactory.DATE_AND_TIME:
        return new DateProperty();

      case DataTypeFactory.NUMBER:
      case DataTypeFactory.LARGE_NUMBER:
        return new NumericProperty();

      case DataTypeFactory.NUMBER_WITH_DECIMAL_POINT:
        return new DecimalProperty();

      case DataTypeFactory.CHOICE:
        return new SetProperty();

      case DataTypeFactory.YES_NO:
        return new CheckBoxProperty();

      case DataTypeFactory.LOOKUP:
        return new LookupProperty();
    }

    return null;
  }

  /**
   *
   * @param dataType
   * @return
   */
  public static getPropertyForVirtualEntity(dataType: string): Property | null {
    var property = PropertyFactory.getPropertyByDataType(dataType);

    if (property instanceof DateProperty) {
      property.periodPickerType = PeriodPickerTypeFactory.DAY_AND_TIME;
    } else if (property instanceof DecimalProperty) {
      property.numberOfDecimalPlaces = 2;
    }
    if (property != null)
      property.defaultWidth = PropertyFactory.getDefaultColumnWidth(dataType);

    return property;
  }

  /**
   * returns default width for a control
   *
   * @param baseControl
   * @return
   */
  public static getDefaultWidth(baseControl: BaseControl): number {
    if (baseControl.property != null) {
      return baseControl.property.defaultWidth;
    } else if (baseControl instanceof MoreInfoControl) {
      return PropertyFactory.DEFAULT_MORE_INFO_COLUMN_WIDTH;
    } else {
      return PropertyFactory.DEFAULT_COLUMN_WIDTH;
    }
  }
}
