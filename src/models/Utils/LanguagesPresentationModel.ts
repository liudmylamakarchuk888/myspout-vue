import { Emit } from 'vue-property-decorator';
import { KeyValue } from '../KeyValue';
import { Dictionary } from 'lodash'
import { AppCacheModule } from '@/store/modules/appCache';
 
export class LanguagesPresentationModel {

    public static readonly PRIMARY_LANGUAGE_INITIALS: String = "en";

    /**************************** Global **************************/
    public static readonly RECENT_DOCUMENTS: String = "RECENT_DOCUMENTS";

    public static readonly NO_RECENT_DOCUMENTS_EXPLANATION: String = "NO_RECENT_DOCUMENTS_EXPLANATION";

    public static readonly YES: String = "YES";

    public static readonly NO: String = "NO";

    public static readonly SAVE_SUCCESS: String = "SAVE_SUCCESS";

    public static readonly SAVE_FAILED: String = "SAVE_FAILED";

    public static readonly TABLE: String = "TABLE";

    public static readonly LOOKUP: String = "LOOKUP";

    public static readonly OF: String = "OF";

    public static readonly TO_LOWER_CASE: String = "TO_LOWER_CASE";

    public static readonly OK: String = "OK";

    public static readonly IS: String = "IS";

    public static readonly IATTACHMENTSSETHOLDER_ATTACHMENTS_DISPLAY_NAME: String = "IATTACHMENTSSETHOLDER_ATTACHMENTS_DISPLAY_NAME";

    public static readonly INDEXPOSITIONABLE_INDEXPOSITION_DISPLAY_NAME: String = "INDEXPOSITIONABLE_INDEXPOSITION_DISPLAY_NAME";

    public static readonly ITREE_CHILDREN_DISPLAY_NAME: String = "ITREE_CHILDREN_DISPLAY_NAME";

    public static readonly ITREE_PARENT_DISPLAY_NAME: String = "ITREE_PARENT_DISPLAY_NAME";

    public static readonly ITREE_PATH_DISPLAY_NAME: String = "ITREE_PATH_DISPLAY_NAME";

    public static readonly ITREETABLE_SEQUENCE_DISPLAY_NAME: String = "ITREETABLE_SEQUENCE_DISPLAY_NAME";

    public static readonly ITREETABLE_LEVELINTREE_DISPLAY_NAME: String = "ITREETABLE_LEVELINTREE_DISPLAY_NAME";

    public static readonly PERSISTENCEBASEDTO_CREATIONUSER_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_CREATIONUSER_DISPLAY_NAME";

    public static readonly STATUSDTO_STATUS_DISPLAY_NAME: String = "STATUSDTO_STATUS_DISPLAY_NAME";

    public static readonly CATEGORIZABLE_ENTITYCATEGORY_DISPLAY_NAME: String = "CATEGORIZABLE_ENTITYCATEGORY_DISPLAY_NAME";

    public static readonly STATUSDTO_PREVIOUSSTATUS_DISPLAY_NAME: String = "STATUSDTO_PREVIOUSSTATUS_DISPLAY_NAME";

    public static readonly STATUSDTO_PREVIOUSSTEPID_DISPLAY_NAME: String = "STATUSDTO_PREVIOUSSTEPID_DISPLAY_NAME";

    public static readonly STATUSDTO_PREVIOUSFLOWSTEPID_DISPLAY_NAME: String = "STATUSDTO_PREVIOUSFLOWSTEPID_DISPLAY_NAME";

    public static readonly PERSISTENCEBASEDTO_ID_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_ID_DISPLAY_NAME";

    public static readonly WORKFLOWABLE_WORKFLOWID_DISPLAY_NAME: String = "WORKFLOWABLE_WORKFLOWID_DISPLAY_NAME";

    public static readonly PERSISTENCEBASEDTO_STATE_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_STATE_DISPLAY_NAME";

    public static readonly WORKFLOWABLE_CURRENTSTEPDESCRIPTION_DISPLAY_NAME: String = "WORKFLOWABLE_CURRENTSTEPDESCRIPTION_DISPLAY_NAME";

    public static readonly PERSISTENCEBASEDTO_UPDATEUSER_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_UPDATEUSER_DISPLAY_NAME";

    public static readonly PERSISTENCEBASEDTO_TIMEUPDATED_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_TIMEUPDATED_DISPLAY_NAME";

    public static readonly PERSISTENCEBASEDTO_TIMECREATED_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_TIMECREATED_DISPLAY_NAME";

    public static readonly STATUSDTO_PREVIOUSSTEPDESCRIPTION_DISPLAY_NAME: String = "STATUSDTO_PREVIOUSSTEPDESCRIPTION_DISPLAY_NAME";

    public static readonly STATUSDTO_PREVIOUSFLOWSTEPDESCRIPTION_DISPLAY_NAME: String = "STATUSDTO_PREVIOUSFLOWSTEPDESCRIPTION_DISPLAY_NAME";

    public static readonly WORKFLOWABLE_CURRENTSTEPID_DISPLAY_NAME: String = "WORKFLOWABLE_CURRENTSTEPID_DISPLAY_NAME";

    public static readonly STATUSDTO_LASTTIMESTATUSCHANGED_DISPLAY_NAME: String = "STATUSDTO_LASTTIMESTATUSCHANGED_DISPLAY_NAME";

    public static readonly ATTACHMENT_DISPLAY_NAME: String = "ATTACHMENT_DISPLAY_NAME";

    public static readonly USER_DISPLAY_NAME: String = "USER_DISPLAY_NAME";

    public static readonly ENTITYCATEGORY_DISPLAY_NAME: String = "ENTITYCATEGORY_DISPLAY_NAME";

    public static readonly STATUS_DISPLAY_NAME: String = "STATUS_DISPLAY_NAME";

    public static readonly DEFAULT_FORMAT_SETTINGS: String = "DEFAULT_FORMAT_SETTINGS";

    public static readonly DEFAULT_FORMAT_SETTINGS_HELP_TEXT: String = "DEFAULT_FORMAT_SETTINGS_HELP_TEXT";

    public static readonly DEFAULT_COLUMNS_OF_TABLES: String = "DEFAULT_COLUMNS_OF_TABLES";

    public static readonly TAB: String = "TAB";

    public static readonly NEW_TAB_TOOLTIP: String = "NEW_TAB_TOOLTIP";

    public static readonly SECTION: String = "SECTION";

    public static readonly REPORT: String = "REPORT";

    public static readonly NEW_REPORT_TOOLTIP: String = "NEW_REPORT_TOOLTIP";

    public static readonly NEW_SECTION_TOOLTIP: String = "NEW_SECTION_TOOLTIP";

    public static readonly WORKFLOWABLE_ASSIGNEE_USER_DISPLAY_NAME: String = "WORKFLOWABLE_ASSIGNEE_USER_DISPLAY_NAME";

    public static readonly AVAILABLE_FORMS: String = "AVAILABLE_FORMS";

    public static readonly AVAILABLE_WORKFLOWS: String = "AVAILABLE_WORKFLOWS";

    /**************************** Header **************************/
    public static readonly REVERT_WARNING: String = "REVERT_WARNING";

    public static readonly WARNING_TITLE: String = "WARNING_TITLE";

    public static readonly SAVE: String = "SAVE";

    public static readonly SAVE_TOOLTIP: String = "SAVE_TOOLTIP";

    public static readonly REVERT: String = "REVERT";

    public static readonly REVERT_TOOLTIP: String = "REVERT_TOOLTIP";

    /**************************** View Pane **************************/
    public static readonly FIND_ENTITY: String = "FIND_ENTITY";

    public static readonly FILTER_BY_FREE_TEXT: String = "FILTER_BY_FREE_TEXT";

    public static readonly FIND_DISCIPLINE: String = "FIND_DISCIPLINE";

    public static readonly FIND_DISCIPLINE_TOOLTIP: String = "FIND_DISCIPLINE_TOOLTIP";

    public static readonly ADDED_PROPERTIES: String = "ADDED_PROPERTIES";

    public static readonly WORKING_PANE_DEFAULT_TEXT: String = "WORKING_PANE_DEFAULT_TEXT";

    public static readonly EDITABLE_LABEL_DEFAULT_TEXT: String = "EDITABLE_LABEL_DEFAULT_TEXT";

    public static readonly EDITABLE_LABEL_DEFAULT_DESCRIPTION: String = "EDITABLE_LABEL_DEFAULT_DESCRIPTION";

    public static readonly DISPLAY_NAME: String = "DISPLAY_NAME";

    public static readonly DESCRIPTION: String = "DESCRIPTION";

    public static readonly ADVANCED_SETTINGS: String = "ADVANCED_SETTINGS";

    public static readonly DISCIPLINE: String = "DISCIPLINE";

    public static readonly CHOOSE_DISCIPLINE: String = "CHOOSE_DISCIPLINE";

    public static readonly CONFIGURATION_SUPPORT: String = "CONFIGURATION_SUPPORT";

    public static readonly FORM_DEFINITION_SUPPORT: String = "FORM_DEFINITION_SUPPORT";

    public static readonly WORKFLOW_SUPPORT: String = "WORKFLOW_SUPPORT";

    public static readonly ATTACHMENT_SUPPORT: String = "ATTACHMENT_SUPPORT";

    public static readonly TREE_SUPPORT: String = "TREE_SUPPORT";

    public static readonly REORDER_SUPPORT: String = "REORDER_SUPPORT";

    public static readonly MANDATORY: String = "MANDATORY";

    public static readonly NOTES: String = "NOTES";

    public static readonly SYSTEM_NAME: String = "SYSTEM_NAME_LABEL";

    public static readonly SQL_CONNECTION: String = "SQL_CONNECTION";

    public static readonly DB_TABLE_NAME: String = "DB_TABLE_NAME";

    public static readonly PROPERTIES_LIST: String = "PROPERTIES_LIST";

    public static readonly SETTINGS: String = "SETTINGS";

    public static readonly MOVE_UP: String = "MOVE_UP";

    public static readonly MOVE_DOWN: String = "MOVE_DOWN";

    public static readonly FORM_SETTINGS: String = "FORM_SETTINGS";

    public static readonly TAB_SETTINGS: String = "TAB_SETTINGS";

    public static readonly NEW_ITEM: String = "NEW_ITEM";

    public static readonly NEW_PROPERTY_TOOLTIP: String = "NEW_PROPERTY_TOOLTIP";

    public static readonly NEW_ENTITY_TOOLTIP: String = "NEW_ENTITY_TOOLTIP";

    public static readonly NEW_FORMULA: String = "NEW_FORMULA";

    public static readonly NEW_FORMULA_TOOLTIP: String = "NEW_FORMULA_TOOLTIP";

    public static readonly NEW_VIRTUAL: String = "NEW_VIRTUAL";

    public static readonly NEW_VIRTUAL_ENTITY: String = "NEW_VIRTUAL_ENTITY";

    public static readonly NEW_VIRTUAL_TOOLTIP: String = "NEW_VIRTUAL_TOOLTIP";

    public static readonly FIND_PROPERTY: String = "FIND_PROPERTY";

    public static readonly FILTER_BY_DATA_TYPE: String = "FILTER_BY_DATA_TYPE";

    public static readonly FILTER_BY_DATA_TYPE_TOOLTIP: String = "FILTER_BY_DATA_TYPE_TOOLTIP";

    public static readonly ENTITIES: String = "ENTITIES";

    public static readonly ENTITY: String = "ENTITY";

    public static readonly RECENT_ITEMS: String = "RECENT_ITEMS";

    public static readonly ENTITIES_EDITOR: String = "ENTITIES_EDITOR";

    public static readonly FORMS_EDITOR: String = "FORMS_EDITOR";

    public static readonly WORKFLOWS: String = "WORKFLOWS";

    public static readonly AUTHORIZATION_EDITOR: String = "AUTHORIZATION_EDITOR";

    public static readonly EDITORS_LIST_TITLE: String = "EDITORS_LIST_TITLE";

    public static readonly ENTITIES_EDITOR_TITLE: String = "ENTITIES_EDITOR_TITLE";

    public static readonly CHOOSE_SQL_CONNECTION: String = "CHOOSE_SQL_CONNECTION";

    public static readonly ENTITY_SYSTEM_NAME_INPUT_HELP: String = "ENTITY_SYSTEM_NAME_INPUT_HELP";

    public static readonly DB_TABLE_NAME_INPUT_HELP: String = "DB_TABLE_NAME_INPUT_HELP";

    public static readonly DB_COLUMN_NAME_INPUT_HELP: String = "DB_COLUMN_NAME_INPUT_HELP";

    public static readonly PROPERTY_SYSTEM_NAME_INPUT_HELP: String = "PROPERTY_SYSTEM_NAME_INPUT_HELP";

    public static readonly CREATE: String = "CREATE";

    public static readonly UPDATE: String = "UPDATE";

    public static readonly ORDER_BY: String = "ORDER_BY";

    public static readonly ROW_FILTER: String = "ROW_FILTER";

    public static readonly DB_KEY_COL_NAME: String = "DB_KEY_COL_NAME";

    public static readonly DB_COL_NAME: String = "DB_COL_NAME";

    public static readonly REF_TABLE_NAME: String = "REF_TABLE_NAME";

    public static readonly DB_COL_DATA_TYPE: String = "DB_COL_DATA_TYPE";

    public static readonly DB_REF_COL_NAME: String = "DB_REF_COL_NAME";

    public static readonly DATA_TYPE: String = "DATA_TYPE";

    public static readonly SQL_QUERY: String = "SQL_QUERY";

    public static readonly ENTER_SQL: String = "ENTER_SQL";

    public static readonly MORE_INFO: String = "MORE_INFO";

    public static readonly MORE: String = "MORE";

    public static readonly NOT_EMPTY: String = "NOT_EMPTY";

    public static readonly CHOICE: String = "CHOICE";

    public static readonly CHOICE_DESCRIPTION: String = "CHOICE_DESCRIPTION";

    public static readonly CANCEL: String = "CANCEL";

    public static readonly RETURN_TO_PROPERTIES_LIST: String = "RETURN_TO_PROPERTIES_LIST";

    public static readonly ENTER_SQL_QUERY: String = "ENTER_SQL_QUERY";

    public static readonly SQL_DESCRIPTION: String = "SQL_DESCRIPTION";

    public static readonly PROPERTIES_DATA_TYPES: String = "PROPERTIES_DATA_TYPES";

    public static readonly CHOOSE_DATA_TYPE: String = "CHOOSE_DATA_TYPE";

    public static readonly PREPARE_PROPERTIES_LIST: String = "PREPARE_PROPERTIES_LIST";

    public static readonly OR: String = "OR";

    public static readonly ADD: String = "ADD";

    public static readonly PROPERTIES: String = "PROPERTIES";

    public static readonly RETURNED_BY_SQL: String = "RETURNED_BY_SQL";

    public static readonly EDIT_SQL_QUERY: String = "EDIT_SQL_QUERY";

    public static readonly RETURN_TO_SETTINGS: String = "RETURN_TO_SETTINGS";

    public static readonly SQL_QUERY_FORMULA_PROPERTY_HELP: String = "SQL_QUERY_FORMULA_PROPERTY_HELP";

    public static readonly REFERENCE_TABLE: String = "REFERENCE_TABLE";

    public static readonly REFERENCE_COLUMN: String = "REFERENCE_COLUMN";

    public static readonly DATABASE_KEY_COLUMN_NAME: String = "DATABASE_KEY_COLUMN_NAME";

    public static readonly DELETE_ENTITY_WARNING: String = "DELETE_ENTITY_WARNING";

    public static readonly LEAVE_EDITED_ENTITY_WARNING: String = "LEAVE_EDITED_ENTITY_WARNING";

    public static readonly LEAVE_NEW_PROPERTY_WARNING: String = "LEAVE_NEW_PROPERTY_WARNING";

    public static readonly UNDEFINED_ENTITY: String = "UNDEFINED_ENTITY";

    public static readonly DELETE_ENTITY_TOOLTIP: String = "DELETE_ENTITY_TOOLTIP";

    public static readonly DELETE_PROPERTY_WARNING: String = "DELETE_PROPERTY_WARNING";

    public static readonly UNIQUE_ID: String = "UNIQUE_ID";

    public static readonly SINGLE_LINE_OF_TEXT: String = "SINGLE_LINE_OF_TEXT";

    public static readonly NUMBER: String = "NUMBER";

    public static readonly LARGE_NUMBER: String = "LARGE_NUMBER";

    public static readonly DATE_AND_TIME: String = "DATE_AND_TIME";

    public static readonly CHOOSE_PROPERTY: String = "CHOOSE_PROPERTY";

    public static readonly SELECT_IDENTIFIER_PROPERTY: String = "SELECT_IDENTIFIER_PROPERTY";

    public static readonly SOLUTION_DESIGNER: String = "SOLUTION_DESIGNER";

    public static readonly NEW_ENTITY: String = "NEW_ENTITY";

    public static readonly ADD_PROPERTY: String = "ADD_PROPERTY";

    public static readonly DRAG_PROPERTIES: String = "DRAG_PROPERTIES";

    public static readonly FIND_DATA_TYPE: String = "FIND_DATA_TYPE";

    public static readonly MOVE_TO_TAB: String = "MOVE_TO_TAB";

    public static readonly MOVE_TO_MORE_INFO: String = "MOVE_TO_MORE_INFO";

    public static readonly MOVE_TO_TABLE: String = "MOVE_TO_TABLE";

    public static readonly DELETE_CONTROL: String = "DELETE_CONTROL";

    public static readonly DELETE_MORE_INFO: String = "DELETE_MORE_INFO";

    public static readonly DELETE_FORM: String = "DELETE_FORM";

    public static readonly DELETE_TAB: String = "DELETE_TAB";

    public static readonly DELETE_SECTION: String = "DELETE_SECTION";

    public static readonly ADD_NEW_TAB: String = "ADD_NEW_TAB";

    public static readonly ADD_NEW_SECTION: String = "ADD_NEW_SECTION";

    public static readonly ADD_NEW_REPORT: String = "ADD_NEW_REPORT";

    public static readonly ADD_NEW_TABLE: String = "ADD_NEW_TABLE";

    public static readonly ADD_TAB: String = "ADD_TAB";

    public static readonly DISPLAY: String = "DISPLAY";

    public static readonly FORMAT: String = "FORMAT";

    public static readonly VIEWED_BY: String = "VIEWED_BY";

    public static readonly EXPAND_THIS_SECTION_BY_DEFAULT: String = "EXPAND_THIS_SECTION_BY_DEFAULT";

    public static readonly EDITED_BY: String = "EDITED_BY";

    public static readonly TABLE_EDITED_BY: String = "TABLE_EDITED_BY";

    public static readonly ROW_EDITED_BY: String = "ROW_EDITED_BY";

    public static readonly ADVANCED: String = "ADVANCED";

    public static readonly THIS_FORM_IS_BASED_ON_THE_ENTITY: String = "THIS_FORM_IS_BASED_ON_THE_ENTITY";

    public static readonly THIS_OBJECT_IS_BASED: String = "THIS_OBJECT_IS_BASED";

    public static readonly THIS_REPORT_IS_BASED: String = "THIS_REPORT_IS_BASED";

    public static readonly PROPERTY: String = "PROPERTY";

    public static readonly SHOW_PROPERTY_HISTORY: String = "SHOW_PROPERTY_HISTORY";

    public static readonly SHOW_ROW_HISTORY: String = "SHOW_ROW_HISTORY";

    public static readonly SET_OBJECT_INSTRUCTION_LINE: String = "SET_OBJECT_INSTRUCTION_LINE";

    public static readonly DISPLAY_NAME_AND_DESCRIPTION: String = "DISPLAY_NAME_AND_DESCRIPTION";

    public static readonly SET_FORM_DISPLAY_NAME: String = "SET_FORM_DISPLAY_NAME";

    public static readonly SET_OBJECT_DISPLAY_NAME: String = "SET_OBJECT_DISPLAY_NAME";

    public static readonly SET_TAB_DISPLAY_NAME: String = "SET_TAB_DISPLAY_NAME";

    public static readonly SET_TABLE_DISPLAY_NAME: String = "SET_TABLE_DISPLAY_NAME";

    public static readonly WIDTH: String = "WIDTH";

    public static readonly READ_ONLY: String = "READ_ONLY";

    public static readonly ADD_NEW_TAB_TITLE: String = "ADD_NEW_TAB_TITLE";

    public static readonly OPEN_EXISTING_FORM: String = "OPEN_EXISTING_FORM";

    public static readonly OPEN_EXISTING_WORKFLOW: String = "OPEN_EXISTING_WORKFLOW";

    public static readonly CREATE_NEW_BLANK_WORKFLOW: String = "CREATE_NEW_BLANK_WORKFLOW";

    public static readonly FORM: String = "FORM";

    public static readonly FORMS: String = "FORMS";

    public static readonly OPEN: String = "OPEN";

    public static readonly CHANGE_DEFAULT_SETTINGS: String = "CHANGE_DEFAULT_SETTINGS";

    public static readonly RESTRICT_VIEWING_FROM: String = "RESTRICT_VIEWING_FROM";

    public static readonly RESTRICT_VIEWING_TAB: String = "RESTRICT_VIEWING_TAB";

    public static readonly RESTRICT_VIEWING_SECTION: String = "RESTRICT_VIEWING_SECTION";

    public static readonly RESTRICT_VIEWING_CONTROL: String = "RESTRICT_VIEWING_CONTROL";

    public static readonly RESTRICT_VIEWING_REPORT: String = "RESTRICT_VIEWING_REPORT";

    public static readonly RESTRICT_EDITING_FROM: String = "RESTRICT_EDITING_FROM";

    public static readonly RESTRICT_EDITING_TAB: String = "RESTRICT_EDITING_TAB";

    public static readonly RESTRICT_EDITING_SECTION: String = "RESTRICT_EDITING_SECTION";

    public static readonly RESTRICT_EDITING_CONTROL: String = "RESTRICT_EDITING_CONTROL";

    public static readonly RESTRICT_EDITING_TABLE: String = "RESTRICT_EDITING_TABLE";

    public static readonly RESTRICT_EDITING_TABLE_ROWS: String = "RESTRICT_EDITING_TABLE_ROWS";

    public static readonly EDITING_A_ROW_CAN_BE_DONE: String = "EDITING_A_ROW_CAN_BE_DONE";

    public static readonly DELETING_A_ROW_CAN_BE_DONE: String = "DELETING_A_ROW_CAN_BE_DONE";

    public static readonly USE_ROLE_GROUP: String = "USE_ROLE_GROUP";

    public static readonly OVERRIDE_CONDITIONS: String = "OVERRIDE_CONDITIONS";

    public static readonly NEW_ROLE_GROUP: String = "NEW_ROLE_GROUP";

    public static readonly EDIT_ROLE_GROUP: String = "EDIT_ROLE_GROUP";

    public static readonly NEW_CONDITION: String = "NEW_CONDITION";

    public static readonly EDIT: String = "EDIT";

    public static readonly CLONE: String = "CLONE";

    public static readonly COPY: String = "COPY";

    public static readonly DELETE: String = "DELETE";

    public static readonly FORMAT_TEXT: String = "FORMAT_TEXT";

    public static readonly FORMAT_NUMBERS: String = "FORMAT_NUMBERS";

    public static readonly FORMAT_DATE_AND_TIME: String = "FORMAT_DATE_AND_TIME";

    public static readonly MAXIMUM_TEXT_SIZE: String = "MAXIMUM_TEXT_SIZE";

    public static readonly LEAVE_EMPTY_FOR_MAX: String = "LEAVE_EMPTY_FOR_MAX";

    public static readonly USE_THE_FOLLOWING_FORMAT: String = "USE_THE_FOLLOWING_FORMAT";

    public static readonly USE_SEPARATOR: String = "USE_SEPARATOR";

    public static readonly DECIMAL_PLACES: String = "DECIMAL_PLACES";

    public static readonly TYPE: String = "TYPE";

    public static readonly DO_NOT_DELETE: String = "DO_NOT_DELETE";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_FORM: String = "DO_YOU_WANT_TO_DELETE_THE_FORM";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_TAB: String = "DO_YOU_WANT_TO_DELETE_THE_TAB";

    public static readonly DELETING_A_FORM_CANNOT_BE_UNDONE: String = "DELETING_A_FORM_CANNOT_BE_UNDONE";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_CONTROL: String = "DO_YOU_WANT_TO_DELETE_THE_CONTROL";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_MORE_INFO: String = "DO_YOU_WANT_TO_DELETE_THE_MORE_INFO";

    public static readonly DELETING_A_CONTROL_WILL_NOT_DELETE_FROM_DB: String = "DELETING_A_CONTROL_WILL_NOT_DELETE_FROM_DB";

    public static readonly DELETING_A_MORE_INFO_WILL_NOT_DELETE_FROM_DB: String = "DELETING_A_MORE_INFO_WILL_NOT_DELETE_FROM_DB";

    public static readonly CHANGE_DEFAULT: String = "CHANGE_DEFAULT";

    public static readonly DEFAULT_SETTINGS_AFFECT: String = "DEFAULT_SETTINGS_AFFECT";

    public static readonly ENTER_NEW_FORM_NAME: String = "ENTER_NEW_FORM_NAME";

    public static readonly ENTER_NEW_WORKFLOW_NAME: String = "ENTER_NEW_WORKFLOW_NAME";

    public static readonly ENTER_TAB_NAME: String = "ENTER_TAB_NAME";

    public static readonly SELECT_FORM: String = "SELECT_FORM";

    public static readonly SELECT_WORKFLOW: String = "SELECT_WORKFLOW";

    public static readonly FORMATTING: String = "FROMATTING";

    public static readonly DISPLAY_NAME_AND_TOOLTIP: String = "DISPLAY_NAME_AND_TOOLTIP";

    public static readonly USE_FOLLOWING_DISPLAY_NAME_AND_TOOLTIP: String = "USE_FOLLOWING_DISPLAY_NAME_AND_TOOLTIP";

    public static readonly TOOLTIP: String = "TOOLTIP";

    public static readonly SELECT_PROPERTY: String = "SELECT_PROPERTY";

    public static readonly PROPERTIES_IN_A_LINE: String = "PROPERTIES_IN_A_LINE";

    public static readonly LOGGED_IN_USER: String = "LOGGED_IN_USER";

    public static readonly CHOOSE_A: String = "CHOOSE_A";

    public static readonly STATUS: String = "STATUS";

    public static readonly ENTITY_CATEGORY: String = "ENTITY_CATEGORY";

    public static readonly CONDITION: String = "CONDITION";

    public static readonly OF_THE: String = "OF_THE";

    public static readonly ENTER: String = "ENTER";

    public static readonly PROPERTY_CONDITION: String = "PROPERTY_CONDITION";

    public static readonly COMPARE_A_PROPERTY_TO: String = "COMPARE_A_PROPERTY_TO";

    public static readonly SKIP_IF: String = "SKIP_IF";

    public static readonly IS_EMPTY: String = "IS_EMPTY";

    public static readonly TYPE_TEXT: String = "TYPE_TEXT";

    public static readonly CHOOSE_OPTIONS: String = "CHOOSE_OPTIONS";

    public static readonly TYPE_DATE_AND_TIME: String = "TYPE_DATE_AND_TIME";

    public static readonly TYPE_A_NUMBER: String = "TYPE_A_NUMBER";

    public static readonly ADD_EVERYONE: String = "ADD_EVERYONE";

    public static readonly SKIP_THIS_CONDITION_IF: String = "SKIP_THIS_CONDITION_IF";

    public static readonly FIRST_TAB_NAME: String = "FIRST_TAB_NAME";

    public static readonly SELECT_TAB_TO_MOVE: String = "SELECT_TAB_TO_MOVE";

    public static readonly MOVE_CONTROL: String = "MOVE_CONTROL";

    public static readonly MOVE: String = "MOVE";

    public static readonly TAB_MUST_BE_SELECTED: String = "TAB_MUST_BE_SELECTED";

    public static readonly ERROR: String = "ERROR";

    public static readonly COLUMN: String = "COLUMN";

    public static readonly PROPERTY_PATH: String = "PROPERTY_PATH";

    public static readonly STATUS_CONDITION: String = "STATUS_CONDITION";

    public static readonly ENTITY_CATEGORY_CONDITION: String = "ENTITY_CATEGORY_CONDITION";

    public static readonly JAVASCRIPT_CONDITION: String = "JAVASCRIPT_CONDITION";

    public static readonly DISPLAY_ITEMS_IN_DROP_DOWN: String = "DISPLAY_ITEMS_IN_DROP_DOWN";

    public static readonly DISPLAY_ITEMS_IN_DROP_DOWN_TOOLTIP: String = "DISPLAY_ITEMS_IN_DROP_DOWN_TOOLTIP";

    public static readonly USE_THE_FOLLOWING_ITEM_FORMAT: String = "USE_THE_FOLLOWING_ITEM_FORMAT";

    public static readonly INSERT_PROPERTY: String = "INSERT_PROPERTY";

    public static readonly DISPLAY_ONLY_THE_ITEMS: String = "DISPLAY_ONLY_THE_ITEMS";

    public static readonly DISPLAY_ONLY_ROWS: String = "DISPLAY_ONLY_ROWS";

    public static readonly FILTER: String = "FILTER";

    public static readonly NEW_FILTER: String = "NEW_FILTER";

    public static readonly SORT: String = "SORT";

    public static readonly SORT_BY: String = "SORT_BY";

    public static readonly ASCENDING: String = "ASCENDING";

    public static readonly DESCENDING: String = "DESCENDING";

    public static readonly COLUMNS: String = "COLUMNS";

    public static readonly LINK: String = "LINK";

    public static readonly EVERYONE: String = "EVERYONE";

    public static readonly EMPTY: String = "EMPTY";

    public static readonly ATTACHMENTS: String = "ATTACHMENTS";

    public static readonly MESSAGES: String = "MESSAGES";

    public static readonly HISTORY: String = "HISTORY";

    public static readonly USE_THE_FOLLOWING_DISPLAY: String = "USE_THE_FOLLOWING_DISPLAY";

    public static readonly STATE_FILTER: String = "STATE_FILTER";

    public static readonly STATUS_FILTER: String = "STATUS_FILTER";

    public static readonly ENTITY_CATEGORY_FILTER: String = "ENTITY_CATEGORY_FILTER";

    public static readonly ROLE_FILTER: String = "ROLE_FILTER";

    public static readonly SQL_FILTER: String = "SQL_FILTER";

    public static readonly PROPERTY_FILTER: String = "PROPERTY_FILTER";

    public static readonly STATE_IS: String = "STATE_IS";

    public static readonly FILTER_BY_STATE: String = "FILTER_BY_STATE";

    public static readonly USER_IS_ASSIGNED: String = "USER_IS_ASSIGNED";

    public static readonly THE_CONTROL_CAN_BE_A_LINK: String = "THE_CONTROL_CAN_BE_A_LINK";

    public static readonly USE_THE_FOLLOWING_LINK_SETTINGS: String = "USE_THE_FOLLOWING_LINK_SETTINGS";

    public static readonly NO_LINK: String = "NO_LINK";

    public static readonly LINK_TO_ENTITY_FORM: String = "LINK_TO_ENTITY_FORM";

    public static readonly CUSTOM_LINK: String = "CUSTOM_LINK";

    public static readonly USER_IS_ASSIGNED_TO_ROLE: String = "USER_IS_ASSIGNED_TO_ROLE";

    public static readonly CHOOSE_COLUMNS: String = "CHOOSE_COLUMNS";

    public static readonly USE_THE_FOLLOWING_COLUMNS_SETTINGS: String = "USE_THE_FOLLOWING_COLUMNS_SETTINGS";

    public static readonly DRAG_ITEMS_TO_REORDER: String = "DRAG_ITEMS_TO_REORDER";

    public static readonly HEADER: String = "HEADER";

    public static readonly EDIT_FORMS_HEADER: String = "EDIT_FORMS_HEADER";

    public static readonly INSERT: String = "INSERT";

    public static readonly LAYOUT: String = "LAYOUT";

    public static readonly TABLES: String = "TABLES";

    public static readonly GRID_CONTAINER_PROPERTIES: String = "GRID_CONTAINER_PROPERTIES";

    public static readonly DEVELOPMENT: String = "DEVELOPMENT";

    public static readonly NO_SELECTED_ITEM: String = "NO_SELECTED_ITEM";

    public static readonly DROP_PROPERTIES: String = "DROP_PROPERTIES";

    public static readonly DROP_REPORT_PROPERTIES: String = "DROP_REPORT_PROPERTIES";

    public static readonly DROP_TABLE_PROPERTIES: String = "DROP_TABLE_PROPERTIES";

    public static readonly DROP_TABLES: String = "DROP_TABLES";

    public static readonly ENTER_JS_CODE: String = "ENTER_JS_CODE";

    public static readonly ENTER_SQL_WHERE: String = "ENTER_SQL_WHERE";

    public static readonly DEFAULT_NAME_FORMAT: String = "DEFAULT_NAME_FORMAT";

    public static readonly PROPERTIES_CAN_BE_LINKS: String = "PROPERTIES_CAN_BE_LINKS";

    public static readonly USE_THE_FOLLOWING_VALUE: String = "USE_THE_FOLLOWING_VALUE";

    public static readonly DEFAULT_VALUE: String = "DEFAULT_VALUE";

    public static readonly CHECKED: String = "CHECKED";

    public static readonly UNCHECKED: String = "UNCHECKED";

    public static readonly TYPE_NUMBER: String = "TYPE_NUMBER";

    public static readonly TYPE_ID_NUMBER: String = "TYPE_ID_NUMBER";

    public static readonly TODAY: String = "TODAY";

    public static readonly DEFAULT: String = "DEFAULT";

    public static readonly INCLUDE_BLANK_OPTION: String = "INCLUDE_BLANK_OPTION";

    public static readonly BLANK_OPTION_EXAMPLES: String = "BLANK_OPTION_EXAMPLES";

    public static readonly DATA_ENTRY: String = "DATA_ENTRY";

    public static readonly MAX_MIN: String = "MAX_MIN";

    public static readonly MAXIMUM_AND_MINIMUM_LIMITS: String = "MAXIMUM_AND_MINIMUM_LIMITS";

    public static readonly MUST_BE_AT_LEAST: String = "MUST_BE_AT_LEAST";

    public static readonly MUST_BE_AT_MOST: String = "MUST_BE_AT_MOST";

    public static readonly MUST_BE_BEFORE: String = "MUST_BE_BEFORE";

    public static readonly MUST_BE_AFTER: String = "MUST_BE_AFTER";

    public static readonly NO_LIMIT: String = "NO_LIMIT";

    public static readonly LIMIT_THE_RANGE_OF_POSSIBLE_VALUES_FOR_THIS_PROPERTY: String = "LIMIT_THE_RANGE_OF_POSSIBLE_VALUES_FOR_THIS_PROPERTY";

    public static readonly USE_THE_FOLLOWING_INSTEAD_OF_THE_DEFAULT_SETTING: String = "USE_THE_FOLLOWING_INSTEAD_OF_THE_DEFAULT_SETTING";

    public static readonly CHOOSE_WHEN_TO_MANDATE: String = "CHOOSE_WHEN_TO_MANDATE";

    public static readonly WHEN_FOLLOWING_PROPERTY_EMPTY: String = "WHEN_FOLLOWING_PROPERTY_EMPTY";

    public static readonly COPY_VALUES: String = "COPY_VALUES";

    public static readonly AFTER_USER_CHANGES_VALUE_COPY_THIS_TO_OTHER_PROPERTY: String = "AFTER_USER_CHANGES_VALUE_COPY_THIS_TO_OTHER_PROPERTY";

    public static readonly NEW_VALUE: String = "NEW_VALUE";

    public static readonly REMOVE: String = "REMOVE";

    public static readonly DONT_REMOVE: String = "DONT_REMOVE";

    public static readonly DO_YOU_WANT_TO_REMOVE: String = "DO_YOU_WANT_TO_REMOVE";

    public static readonly BLANK: String = "BLANK";

    public static readonly COPY_FROM: String = "COPY_FROM";

    public static readonly COPY_VALUE: String = "COPY_VALUE";

    public static readonly ADD_SIDE_STEP: String = "ADD_SIDE_STEP";

    public static readonly CREATE_STEP_BEFORE: String = "CREATE_STEP_BEFORE";

    public static readonly CREATE_STEP_AFTER: String = "CREATE_STEP_AFTER";

    public static readonly SHOW_TRANSITIONS: String = "SHOW_TRANSITIONS";

    public static readonly CHOOSE_PROPERTY_TO_COPY_VALUE_TO: String = "CHOOSE_PROPERTY_TO_COPY_VALUE_TO";

    public static readonly COLUMNS_CELLS_MUST_SUM_TO: String = "COLUMNS_CELLS_MUST_SUM_TO";

    public static readonly CUSTOM_ERROR_MESSAGE: String = "CUSTOM_ERROR_MESSAGE";

    public static readonly CONDITION_PROPERTY_PLACED_IN_FORM_MESSAGE: String = "CONDITION_PROPERTY_PLACED_IN_FORM_MESSAGE";

    public static readonly MUST_HAVE_AT_LEAST: String = "MUST_HAVE_AT_LEAST";

    public static readonly ROWS: String = "ROWS";

    public static readonly TABLE_ROWS: String = "TABLE_ROWS";

    public static readonly ADDING_A_ROW_CAN_BE_DONE: String = "ADDING_A_ROW_CAN_BE_DONE";

    public static readonly ANYONE_WHO_CAN_EDIT_THE_TABLE: String = "ANYONE_WHO_CAN_EDIT_THE_TABLE";

    public static readonly ANYONE_WHO_CAN_EDIT_THE_ROW: String = "ANYONE_WHO_CAN_EDIT_THE_ROW";

    public static readonly USERS_WHO_PASS_THE_FOLLOWING_CONDITIONS: String = "USERS_WHO_PASS_THE_FOLLOWING_CONDITIONS";

    public static readonly NO_ONE: String = "NO_ONE";

    public static readonly ROW_EDITING_AND_DELETING: String = "ROW_EDITING_AND_DELETING";

    public static readonly ALLOW_ROWS_REORDER: String = "ALLOW_ROWS_REORDER";

    public static readonly TO_ENABLE_ROWS_REORDER: String = "TO_ENABLE_ROWS_REORDER";

    public static readonly ROW: String = "ROW";

    public static readonly SET_SECTION_DISPLAY_NAME: String = "SET_SECTION_DISPLAY_NAME";

    public static readonly EDIT_BY_NOTIFICATION_TEXT: String = "EDIT_BY_NOTIFICATION_TEXT";

    public static readonly CONTROL_CANT_BE_EDITED: String = "CONTROL_CANT_BE_EDITED";

    public static readonly CONTROL_CANT_BE_VIEWED: String = "CONTROL_CANT_BE_VIEWED";

    public static readonly CONTROL_EDITABLE_BECAUSE_EVERYONE: String = "CONTROL_EDITABLE_BECAUSE_EVERYONE";

    public static readonly CONTROL_VIEWABLE_BECAUSE_EVERYONE: String = "CONTROL_VIEWABLE_BECAUSE_EVERYONE";

    public static readonly OPEN_COLUMN_SETTINGS: String = "OPEN_COLUMN_SETTINGS";

    public static readonly MOVE_COLUMN_TO_MORE_INFO: String = "MOVE_COLUMN_TO_MORE_INFO";

    public static readonly DELETE_COLUMN: String = "DELETE_COLUMN";

    public static readonly LEAVE_EMPTY_TO_AUTO_FIT: String = "LEAVE_EMPTY_TO_AUTO_FIT";

    public static readonly SET_REPORT_DISPLAY_NAME: String = "SET_REPORT_DISPLAY_NAME";

    public static readonly IS_EQUAL_TO: String = "IS_EQUAL_TO";

    public static readonly IS_NOT_EQUAL_TO: String = "IS_NOT_EQUAL_TO";

    public static readonly CONTAINS: String = "CONTAINS";

    public static readonly DOES_NOT_CONTAIN: String = "DOES_NOT_CONTAIN";

    public static readonly BEGINS_WITH: String = "BEGINS_WITH";

    public static readonly DOES_NOT_BEGIN_WITH: String = "DOES_NOT_BEGIN_WITH";

    public static readonly ENDS_WITH: String = "ENDS_WITH";

    public static readonly DOES_NOT_END_WITH: String = "DOES_NOT_END_WITH";

    public static readonly IS_NOT_EMPTY: String = "IS_NOT_EMPTY";

    public static readonly IS_LESS_THAN: String = "IS_LESS_THAN";

    public static readonly IS_LESS_THAN_OR_EQUAL_TO: String = "IS_LESS_THAN_OR_EQUAL_TO";

    public static readonly IS_GREATER_THAN: String = "IS_GREATER_THAN";

    public static readonly IS_GREATER_THAN_OR_EQUAL_TO: String = "IS_GREATER_THAN_OR_EQUAL_TO";

    public static readonly IS_PRIOR_TO: String = "IS_PRIOR_TO";

    public static readonly IS_PRIOR_TO_OR_EQUAL_TO: String = "IS_PRIOR_TO_OR_EQUAL_TO";

    public static readonly IS_LATER_THAN: String = "IS_LATER_THAN";

    public static readonly IS_LATER_THAN_OR_EQUAL_TO: String = "IS_LATER_THAN_OR_EQUAL_TO";

    public static readonly IS_CONTAINED_IN: String = "IS_CONTAINED_IN";

    public static readonly IS_NOT_CONTAINED_IN: String = "IS_NOT_CONTAINED_IN";

    public static readonly DELETE_REPORT: String = "DELETE_REPORT";

    public static readonly DELETE_TABLE: String = "DELETE_TABLE";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_TABLE: String = "DO_YOU_WANT_TO_DELETE_THE_TABLE";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_SECTION: String = "DO_YOU_WANT_TO_DELETE_THE_SECTION";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_REPORT: String = "DO_YOU_WANT_TO_DELETE_THE_REPORT";

    public static readonly ADD_MORE_INFO_COLUMN: String = "ADD_MORE_INFO_COLUMN";

    public static readonly CLOSE: String = "CLOSE";

    public static readonly EDIT_FORM_OF: String = "EDIT_FORM_OF";

    public static readonly OPEN_MORE_INFO: String = "OPEN_MORE_INFO";

    public static readonly ADD_ROLE: String = "ADD_ROLE";

    public static readonly ADD_STEP: String = "ADD_STEP";

    public static readonly OF_TYPE: String = "OF_TYPE";

    public static readonly ALL_PROPERTIES: String = "ALL_PROPERTIES";

    public static readonly ALL_COLUMN_PROPERTIES: String = "ALL_COLUMN_PROPERTIES";

    public static readonly ALL_PROPERTIES_TOOLTIP: String = "ALL_PROPERTIES_TOOLTIP";

    public static readonly ALL_COLUMN_PROPERTIES_TOOLTIP: String = "ALL_COLUMN_PROPERTIES_TOOLTIP";

    public static readonly APPLICATION_PREFERENCES: String = "APPLICATION_PREFERENCES";

    public static readonly ADD_A_PROPERTY_TO_THE_FORM: String = "ADD_A_PROPERTY_TO_THE_FORM";

    public static readonly THE_PROPERTY_WILL_BE_INSERTED: String = "THE_PROPERTY_WILL_BE_INSERTED";

    public static readonly THE_PROPERTY_IS_ALREADY_ON_THE_FORM: String = "THE_PROPERTY_IS_ALREADY_ON_THE_FORM";

    public static readonly DISPLAY_NAME_SINGULAR: String = "DISPLAY_NAME_SINGULAR";

    public static readonly DISPLAY_NAME_PLURAL: String = "DISPLAY_NAME_PLURAL";

    public static readonly DISPLAY_NAME_SINGULAR_INPUT_HELP: String = "DISPLAY_NAME_SINGULAR_INPUT_HELP";

    public static readonly DISPLAY_NAME_PLURAL_INPUT_HELP: String = "DISPLAY_NAME_PLURAL_INPUT_HELP";

    public static readonly OPTIONAL: String = "OPTIONAL";

    public static readonly NEW_TABLE: String = "NEW_TABLE";

    public static readonly CREATE_NEW_TABLE_PROPERTY: String = "CREATE_NEW_TABLE_PROPERTY";

    public static readonly TABLE_ENTITY: String = "TABLE_ENTITY";

    public static readonly EXISTING_ENTITY: String = "EXISTING_ENTITY";

    public static readonly EXISTING_ENTITY_BUTTON_HELPER: String = "EXISTING_ENTITY_BUTTON_HELPER";

    public static readonly NEW_ENTITY_BUTTON_HELPER: String = "NEW_ENTITY_BUTTON_HELPER";

    public static readonly CHOOSE_TABLE_ENTITY: String = "CHOOSE_TABLE_ENTITY";

    public static readonly INFORMATION_SECTION: String = "INFORMATION_SECTION";

    public static readonly INFORMATION_SECTION_TOOLTIP: String = "INFORMATION_SECTION_TOOLTIP";

    public static readonly INFORMATION_SECTION_HEADER: String = "INFORMATION_SECTION_HEADER";

    public static readonly INFORMATION_GROUP: String = "INFORMATION_GROUP";

    public static readonly NEW_INFORMATION_GROUP: String = "NEW_INFORMATION_GROUP";

    public static readonly DELETE_GROUP: String = "DELETE_GROUP";

    public static readonly ENTER_DISPLAY_NAME_INFORMATION_GROUP: String = "ENTER_DISPLAY_NAME_INFORMATION_GROUP";

    public static readonly NEW_PROPERTY: String = "NEW_PROPERTY";

    public static readonly CREATE_AND_NEW: String = "CREATE_AND_NEW";

    public static readonly CREATE_AND_CLOSE: String = "CREATE_AND_CLOSE";

    public static readonly SELECT_INFORMATION_GROUP: String = "SELECT_INFORMATION_GROUP";

    public static readonly SELECT_INFORMATION_GROUP_TOOLTIP: String = "SELECT_INFORMATION_GROUP_TOOLTIP";

    public static readonly DELETE_INFORMATION_SECTION: String = "DELETE_INFORMATION_SECTION";

    public static readonly DELETE_INFORMATION_GROUP: String = "DELETE_INFORMATION_GROUP";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_INFORMATION_SECTION: String = "DO_YOU_WANT_TO_DELETE_THE_INFORMATION_SECTION";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_INFORMATION_GROUP: String = "DO_YOU_WANT_TO_DELETE_THE_INFORMATION_GROUP";

    public static readonly MOVE_INFORMATION_SECTION: String = "MOVE_INFORMATION_SECTION";

    public static readonly MOVE_CONTAINER: String = "MOVE_CONTAINER";

    public static readonly FORM_MUST_CONTAIN_TABS: String = "FORM_MUST_CONTAIN_TABS";

    public static readonly ALERT: String = "ALERT";

    public static readonly SELECT_TAB_TO_MOVE_SECTION: String = "SELECT_TAB_TO_MOVE_SECTION";

    public static readonly INFORMATION_GROUPS_IN_A_ROW: String = "INFORMATION_GROUPS_IN_A_ROW";

    public static readonly SET_INFORMATION_GROUP_DISPLAY: String = "SET_INFORMATION_GROUP_DISPLAY";

    public static readonly ADD_PROPERTY_TO_THE_INFORMATION_GROUP: String = "ADD_PROPERTY_TO_THE_INFORMATION_GROUP";

    public static readonly DELETE_INFORMATION_PROPERTY: String = "DELETE_INFORMATION_PROPERTY";

    public static readonly OPEN_INFORMATION_PROPERTY_SETTINGS: String = "OPEN_INFORMATION_PROPERTY_SETTINGS";

    public static readonly LINK_TO_TAB: String = "LINK_TO_TAB";

    public static readonly THE_INFORMATION_PROPERTY_CANT_BE_A_LINK: String = "THE_INFORMATION_PROPERTY_CANT_BE_A_LINK";

    public static readonly USE_THE_FOLLOWING_XML_EXTENSIONS: String = "USE_THE_FOLLOWING_XML_EXTENSIONS";

    public static readonly ATTRIBUTES: String = "ATTRIBUTES";

    public static readonly CHILD_ELEMENTS: String = "CHILD_ELEMENTS";

    public static readonly XML_EXTENSIONS: String = "XML_EXTENSIONS";

    public static readonly XML_CONTROL: String = "XML_CONTROL";

    public static readonly XML_CONTROL_TOOLTIP: String = "XML_CONTROL_TOOLTIP";

    public static readonly XML_COLUMN: String = "XML_COLUMN";

    public static readonly XML_COLUMN_TOOLTIP: String = "XML_COLUMN_TOOLTIP";

    public static readonly XML_SECTION: String = "XML_SECTION";

    public static readonly XML_SECTION_TOOLTIP: String = "XML_SECTION_TOOLTIP";

    public static readonly NEW_XML_CONTROL: String = "NEW_XML_CONTROL";

    public static readonly NEW_XML_SECTION: String = "NEW_XML_SECTION";

    public static readonly XML: String = "XML";

    public static readonly USE_THE_FOLLOWING_TO_CONFIGURE_CONTROL_USING_XML: String = "USE_THE_FOLLOWING_TO_CONFIGURE_CONTROL_USING_XML";

    public static readonly USE_THE_FOLLOWING_TO_CONFIGURE_SECTION_USING_XML: String = "USE_THE_FOLLOWING_TO_CONFIGURE_SECTION_USING_XML";

    public static readonly XML_CONTENT: String = "XML_CONTENT";

    public static readonly FOR_LAYOUT_PREVIEW_ONLY: String = "FOR_LAYOUT_PREVIEW_ONLY";

    public static readonly WORKFLOW_GRAPH: String = "WORKFLOW_GRAPH";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_WORKFLOW_GRAPH: String = "DO_YOU_WANT_TO_DELETE_THE_WORKFLOW_GRAPH";

    public static readonly TABLE_DISPLAY_NAME: String = "TABLE_DISPLAY_NAME";

    public static readonly TABLE_DESCRIPTION: String = "TABLE_DESCRIPTION";

    public static readonly TABLE_PROPERTY_SYSTEM_NAME: String = "TABLE_PROPERTY_SYSTEM_NAME";

    public static readonly TABLE_PROPERTY_SYSTEM_NAME_HELP: String = "TABLE_PROPERTY_SYSTEM_NAME_HELP";

    public static readonly DB_KEY_COL_NAME_HELP: String = "DB_KEY_COL_NAME_HELP";

    public static readonly ENTITY_SYSTEM_NAME: String = "ENTITY_SYSTEM_NAME";

    public static readonly PROPERTY_SYSTEM_NAME: String = "PROPERTY_SYSTEM_NAME";

    public static readonly NEW_COLUMN_PROPERTY_HEADER: String = "NEW_COLUMN_PROPERTY_HEADER";

    public static readonly NEW_COLUMN_PROPERTY: String = "NEW_COLUMN_PROPERTY";

    public static readonly VALUE: String = "VALUE";

    public static readonly SELECT_APPLICATION_PREFERENCE: String = "SELECT_APPLICATION_PREFERENCE";

    public static readonly FIND_APPLICATION_PREFERENCE: String = "FIND_APPLICATION_PREFERENCE";

    public static readonly APPLICATION_PREFERENCE_SYSTEM_NAME_INPUT_HELP: String = "APPLICATION_PREFERENCE_SYSTEM_NAME_INPUT_HELP";

    public static readonly DELETE_APPLICATION_REFERENCE: String = "DELETE_APPLICATION_REFERENCE";

    public static readonly DELETING_APPLICATION_PREFERENCE_WILL_REMOVE_FROM_DB: String = "DELETING_APPLICATION_PREFERENCE_WILL_REMOVE_FROM_DB";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_APPLICATION_PREFERENCE: String = "DO_YOU_WANT_TO_DELETE_THE_APPLICATION_PREFERENCE";

    public static readonly INSERT_APPLICATION_PREFERENCE: String = "INSERT_APPLICATION_PREFERENCE";

    public static readonly WORKFLOW: String = "WORKFLOW";

    public static readonly ASSIGNEE: String = "ASSIGNEE";

    public static readonly OLD_ASSIGNEE: String = "OLD_ASSIGNEE";

    public static readonly NEW_ASSIGNEE: String = "NEW_ASSIGNEE";

    public static readonly SELECT_NEW_ASSIGNEE: String = "SELECT_NEW_ASSIGNEE";

    public static readonly WORKFLOW_STEP: String = "WORKFLOW_STEP";

    public static readonly INSTRUCTION_LINE: String = "INSTRUCTION_LINE";

    public static readonly PLACE_AFTER: String = "PLACE_AFTER";

    public static readonly NEW_WORKFLOW_STEP: String = "NEW_WORKFLOW_STEP";

    public static readonly NEW_WORKFLOW_SIDE_STEP: String = "NEW_WORKFLOW_SIDE_STEP";

    public static readonly LET_USERS_SEE_WORKFLOW_STEPS_AND_STEP_CURRENTLY_AT: String = "LET_USERS_SEE_WORKFLOW_STEPS_AND_STEP_CURRENTLY_AT";

    public static readonly NO_ROLE_SELECTED: String = "NO_ROLE_SELECTED";

    public static readonly NO_TRANSITION_SELECTED: String = "NO_TRANSITION_SELECTED";

    public static readonly SELECT_STEP_TO_PLACE_AFTER: String = "SELECT_STEP_TO_PLACE_AFTER";

    public static readonly CHOOSE_STEP: String = "CHOOSE_STEP";

    public static readonly SELECT_ASSIGNEE_TO_THE_STEP: String = "SELECT_ASSIGNEE_TO_THE_STEP";

    public static readonly DISPLAY_STEP_IN_WORKFLOW_GRAPH: String = "DISPLAY_STEP_IN_WORKFLOW_GRAPH";

    public static readonly EDIT_INSTRUCTION_LINE_HEADER: String = "EDIT_INSTRUCTION_LINE_HEADER";

    public static readonly EXAMPLE_INSTRUCTION_LINE: String = "EXAMPLE_INSTRUCTION_LINE";

    public static readonly SELECT_ENTITY: String = "SELECT_ENTITY";

    public static readonly SWITCH_ASSIGNEE: String = "SWITCH_ASSIGNEE";

    public static readonly REMOVE_ASSIGNEE: String = "REMOVE_ASSIGNEE";

    public static readonly SWITCH_ASSIGNEE_HEADER: String = "SWITCH_ASSIGNEE_HEADER";

    public static readonly A_FORM_WITH_ENTERED_NAME_ALREADY_EXISTS: String = "A_FORM_WITH_ENTERED_NAME_ALREADY_EXISTS";

    public static readonly ENTER_A_UNIQUE_FORM_NAME: String = "ENTER_A_UNIQUE_FORM_NAME";

    public static readonly CREATE_NEW_BLANK_FORM: String = "CREATE_NEW_BLANK_FORM";

    public static readonly START: String = "START";

    public static readonly SELECTED_ELEMENT: String = "SELECTED_ELEMENT";

    public static readonly STEP: String = "STEP";

    public static readonly FLOW_STEP_PANEL_TITLE: String = "FLOW_STEP_PANEL_TITLE";

    public static readonly SIDE_STEP_PANEL_TITLE: String = "SIDE_STEP_PANEL_TITLE";

    public static readonly DELETE_STEP_DESCRIPTION: String = "DELETE_STEP_DESCRIPTION";

    public static readonly DELETE_ROLE_DESCRIPTION: String = "DELETE_ROLE_DESCRIPTION";

    public static readonly RESUME_MAIN_FLOW_INDICATOR_TOOLTIP: String = "RESUME_MAIN_FLOW_INDICATOR_TOOLTIP";

    public static readonly AUTHORIZATION_TREES: String = "AUTHORIZATION_TREES";

    public static readonly ROLES: String = "ROLES";

    public static readonly AUTHORIZATION_PANE_DEFAULT_TEXT: String = "AUTHORIZATION_PANE_DEFAULT_TEXT";

    public static readonly THIS_AUTH_TREE_IS_BASED_ON: String = "THIS_AUTH_TREE_IS_BASED_ON";

    public static readonly AUTHORIZATION_TREE: String = "AUTHORIZATION_TREE";

    public static readonly IN_TREE: String = "IN_TREE";

    public static readonly EXPAND_ALL: String = "EXPAND_ALL";

    public static readonly COLLAPSE: String = "COLLAPSE";

    public static readonly DIALOG_ROLES_TOOLTIP: String = "DIALOG_ROLES_TOOLTIP";

    public static readonly CREATE_NEW_ROLE: String = "CREATE_NEW_ROLE";

    public static readonly DELETE_ROLE: String = "DELETE_ROLE";

    public static readonly DELETE_PRODUCT: String = "DELETE_PRODUCT";

    public static readonly YOU_SHOUD_REMOVE_AUTHORIZATION_NODES_BEFORE_DELETING: String = "YOU_SHOUD_REMOVE_AUTHORIZATION_NODES_BEFORE_DELETING";

    public static readonly YOU_SHOUD_REMOVE_DIALOG_ROLES_BEFORE_DELETING: String = "YOU_SHOUD_REMOVE_DIALOG_ROLES_BEFORE_DELETING";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_ROLE: String = "DO_YOU_WANT_TO_DELETE_THE_ROLE";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_PRODUCT: String = "DO_YOU_WANT_TO_DELETE_THE_PRODUCT";

    public static readonly BASE_ROLE: String = "BASE_ROLE";

    public static readonly DEFAULT_SCOREBOARD: String = "DEFAULT_SCOREBOARD";

    public static readonly DEFAULT_SKIN: String = "DEFAULT_SKIN";

    public static readonly ROLE: String = "ROLE";

    public static readonly FIND: String = "FIND";

    public static readonly COMMON: String = "COMMON";

    public static readonly USER_SET_IN_PROPERTY: String = "USER_SET_IN_PROPERTY";

    public static readonly USERS_ASSIGNED_TO_ROLE: String = "USERS_ASSIGNED_TO_ROLE";

    public static readonly USER_SET_IN_APP_PREF: String = "USER_SET_IN_APP_PREF";

    public static readonly TABLE_LEVEL_AUTH: String = "TABLE_LEVEL_AUTH";

    public static readonly ROW_LEVEL_AUTH: String = "ROW_LEVEL_AUTH";

    public static readonly FOLDER: String = "FOLDER";

    public static readonly CUSTOM: String = "CUSTOM";

    public static readonly NEW_AUTH_NODE: String = "NEW_AUTH_NODE";

    public static readonly AUTH_NODE: String = "AUTH_NODE";

    public static readonly USER_SET_IN_PROPERTY_TIP: String = "USER_SET_IN_PROPERTY_TIP";

    public static readonly USERS_ASSIGNED_TO_ROLE_TIP: String = "USERS_ASSIGNED_TO_ROLE_TIP";

    public static readonly USER_SET_IN_APP_PREF_TIP: String = "USER_SET_IN_APP_PREF_TIP";

    public static readonly TABLE_LEVEL_AUTH_TIP: String = "TABLE_LEVEL_AUTH_TIP";

    public static readonly ROW_LEVEL_AUTH_TIP: String = "ROW_LEVEL_AUTH_TIP";

    public static readonly FOLDER_TIP: String = "FOLDER_TIP";

    public static readonly NEXT_BUTTON: String = "NEXT_BUTTON";

    public static readonly BACK_BUTTON: String = "BACK_BUTTON";

    public static readonly FINISH: String = "FINISH";

    public static readonly SENIOR_NODE: String = "SENIOR_NODE";

    public static readonly USER_SET_IN_PROPERTY_TITLE: String = "USER_SET_IN_PROPERTY_TITLE";

    public static readonly USER_ASSIGNED_TO_ROLE_TITLE: String = "USER_ASSIGNED_TO_ROLE_TITLE";

    public static readonly USER_SET_IN_APP_PREF_TITLE: String = "USER_SET_IN_APP_PREF_TITLE";

    public static readonly SENIOR_NODE_TIP: String = "SENIOR_NODE_TIP";

    public static readonly APPLICATION_PREFERENCE: String = "APPLICATION_PREFERENCE";

    public static readonly TABLE_LEVEL_AUTH_TOPIC: String = "TABLE_LEVEL_AUTH_TOPIC";

    public static readonly ROW_LEVEL_AUTH_TOPIC: String = "ROW_LEVEL_AUTH_TOPIC";

    public static readonly FOLDER_NAME: String = "FOLDER_NAME";

    public static readonly FOLDER_TITLE: String = "FOLDER_TITLE";

    public static readonly NODE_NAME: String = "NODE_NAME";

    public static readonly CUSTOM_NODE: String = "CUSTOM_NODE";

    public static readonly CRITERIA: String = "CRITERIA";

    public static readonly PRE_WHERE: String = "PRE_WHERE";

    public static readonly WHERE_CLAUSE: String = "WHERE_CLAUSE";

    public static readonly DELETE_AUTH_NODE_TITLE: String = "DELETE_AUTH_NODE_TITLE";

    public static readonly DELETE_AUTH_NODE_SUB_TITLE: String = "DELETE_AUTH_NODE_SUB_TITLE";

    public static readonly DELETE_AUTH_NODE_TEXT: String = "DELETE_AUTH_NODE_TEXT";

    public static readonly MAKE_SURE_NO_WORKFLOW_STEPS_ARE_USING_THE_STATUS: String = "MAKE_SURE_NO_WORKFLOW_STEPS_ARE_USING_THE_STATUS";

    public static readonly DELETE_STATUS: String = "DELETE_STATUS";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_STATUS: String = "DO_YOU_WANT_TO_DELETE_THE_STATUS";

    public static readonly CREATE_NEW_STATUS: String = "CREATE_NEW_STATUS";

    public static readonly THE_STATE_OF_THE_ENTITY_IN_THIS_STATUS: String = "THE_STATE_OF_THE_ENTITY_IN_THIS_STATUS";

    public static readonly STATE: String = "STATE";

    public static readonly ACTIVE: String = "ACTIVE";

    public static readonly INACTIVE: String = "INACTIVE";

    public static readonly DELETED: String = "DELETED";

    public static readonly STATUS_LIST: String = "STATUS_LIST";

    public static readonly DELETE_AUTH_TREE_WARNING: String = "DELETE_AUTH_TREE_WARNING";

    public static readonly ARE_YOU_SURE_YOU_WANT_TO_REMOVE_OBJECT_WARNING: String = "ARE_YOU_SURE_YOU_WANT_TO_REMOVE_OBJECT_WARNING";

    public static readonly ALWAYS_MANDATORY: String = "ALWAYS_MANDATORY";

    public static readonly MANDATORY_AT_WORKFLOW_TRANSITIONS: String = "MANDATORY_AT_WORKFLOW_TRANSITIONS";

    public static readonly NOT_MANDATORY: String = "NOT_MANDATORY";

    public static readonly MANDATORY_AT_WORKFLOW_TRANSITIONS_HELP: String = "MANDATORY_AT_WORKFLOW_TRANSITIONS_HELP";

    public static readonly TRANSITION: String = "TRANSITION";

    public static readonly TRANSITION_PICKER: String = "TRANSITION_PICKER";

    public static readonly TRANSITION_FROM: String = "TRANSITION_FROM";

    public static readonly TRANSITION_SETTINGS: String = "TRANSITION_SETTINGS";

    public static readonly TRANSITION_SETTINGS_ROLE_GROUP_DESCRIPTION: String = "TRANSITION_SETTINGS_ROLE_GROUP_DESCRIPTION";

    public static readonly DELETE_TRANSITION_DESCRIPTION: String = "DELETE_TRANSITION_DESCRIPTION";

    public static readonly ALLOWED_USERS: String = "ALLOWED_USERS";

    public static readonly SELECT_ROLE_TO_AUTHORIZE: String = "SELECT_ROLE_TO_AUTHORIZE";

    public static readonly SENIOR_ROLES_ARE_AUTHORIZED: String = "SENIOR_ROLES_ARE_AUTHORIZED";

    public static readonly SELECT_AT_LEAST_ONE_NODE: String = "SELECT_AT_LEAST_ONE_NODE";

    public static readonly ADD_SIDE_STEP_DESCRIPTION: String = "ADD_SIDE_STEP_DESCRIPTION";

    public static readonly ADD_FLOW_STEP_DESCRIPTION: String = "ADD_FLOW_STEP_DESCRIPTION";

    public static readonly HOW_WORKFLOW_RESUME_STEP: String = "HOW_WORKFLOW_RESUME_STEP";

    public static readonly DISPLAY_IN_RESUME_MAIN_FLOW: String = "DISPLAY_IN_RESUME_MAIN_FLOW";

    public static readonly MANUALLY_ADD_TRANSITIONS_OTHER_STEPS: String = "MANUALLY_ADD_TRANSITIONS_OTHER_STEPS";

    public static readonly FROM_CAMEL_CASE: String = "FROM_CAMEL_CASE";

    public static readonly TO_CAMEL_CASE: String = "TO_CAMEL_CASE";

    public static readonly SELECT: String = "SELECT";

    public static readonly WORKFLOW_BUTTONS: String = "WORKFLOW_BUTTONS";

    public static readonly NEW_GROUP: String = "NEW_GROUP";

    public static readonly NEW_BUTTON: String = "NEW_BUTTON";

    public static readonly SET_GROUPING_ORDER_WORKFLOW_BUTTONS_USING_LIST: String = "SET_GROUPING_ORDER_WORKFLOW_BUTTONS_USING_LIST";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_GROUP: String = "DO_YOU_WANT_TO_DELETE_THE_GROUP";

    public static readonly BUTTONS_CURRENTLY_IN_GROUP_WILL_MOVE_TO_FIRST_GROUP: String = "BUTTONS_CURRENTLY_IN_GROUP_WILL_MOVE_TO_FIRST_GROUP";

    public static readonly DELETE_BUTTON: String = "DELETE_BUTTON";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_BUTTON: String = "DO_YOU_WANT_TO_DELETE_THE_BUTTON";

    public static readonly ALL_TRANSITIONS_USING_THIS_BUTTON_WILL_BE_DELETED: String = "ALL_TRANSITIONS_USING_THIS_BUTTON_WILL_BE_DELETED";

    public static readonly DELETE_RIBBON_GROUP: String = "DELETE_RIBBON_GROUP";

    public static readonly ENTER_THE_DISPLAY_NAME_OF_GROUP: String = "ENTER_THE_DISPLAY_NAME_OF_GROUP";

    public static readonly EDIT_THE_DISPLAY_NAME_OF_GROUP: String = "EDIT_THE_DISPLAY_NAME_OF_GROUP";

    public static readonly EDIT_RIBBON_GROUP: String = "EDIT_RIBBON_GROUP";

    public static readonly CREATE_RIBBON_GROUP: String = "CREATE_RIBBON_GROUP";

    public static readonly SET_THE_GROUPING_OF_WORKFLOW_BUTTONS_USING_THE_LIST_BELOW: String = "SET_THE_GROUPING_OF_WORKFLOW_BUTTONS_USING_THE_LIST_BELOW";

    public static readonly REORDER_GROUPS_AND_BUTTONS_BY_DRAGGING: String = "REORDER_GROUPS_AND_BUTTONS_BY_DRAGGING";

    public static readonly PRINT: String = "PRINT";

    public static readonly FOLLOW_THIS: String = "FOLLOW_THIS";

    public static readonly UNFOLLOW_THIS: String = "UNFOLLOW_THIS";

    public static readonly APPROVERS: String = "APPROVERS";

    public static readonly SPECIFIC_USERS: String = "SPECIFIC_USERS";

    public static readonly WORKFLOW_CONDITION: String = "WORKFLOW_CONDITION";

    public static readonly NONE: String = "NONE";

    public static readonly OPEN_SETTINGS: String = "OPEN_SETTINGS";

    public static readonly BUTTON: String = "BUTTON";

    public static readonly ADD_TRANSITION: String = "ADD_TRANSITION";

    public static readonly ADD_TRANSITION_HELP: String = "ADD_TRANSITION_HELP";

    public static readonly CONFIRMATION: String = "CONFIRMATION";

    public static readonly ICON: String = "ICON";

    public static readonly AFTER_USER_CLICKS_BUTTON_CONFIRMATION_MESSAGE_DISPLAYED: String = "AFTER_USER_CLICKS_BUTTON_CONFIRMATION_MESSAGE_DISPLAYED";

    public static readonly ASK_THE_USER_ARE_YOU_SURE: String = "ASK_THE_USER_ARE_YOU_SURE";

    public static readonly ALLOW_USER_TO_ADD_COMMENTS: String = "ALLOW_USER_TO_ADD_COMMENTS";

    public static readonly MANDATE_USER_TO_ADD_COMMENTS: String = "MANDATE_USER_TO_ADD_COMMENTS";

    public static readonly DONT_DISPLAY_CONFIRMATION_MESSAGE: String = "DONT_DISPLAY_CONFIRMATION_MESSAGE";

    public static readonly USE_FOLLOWING_MESSAGE_INSTTEAD_THE_DEFAULT: String = "USE_FOLLOWING_MESSAGE_INSTTEAD_THE_DEFAULT";

    public static readonly HALF_SIZE: String = "HALF_SIZE";

    public static readonly FULL_SIZE: String = "FULL_SIZE";

    public static readonly RESTRICT_VIEWING_BUTTON: String = "RESTRICT_VIEWING_BUTTON";

    public static readonly CHECK_THAT_ALL_MANDATORY_CONTROLS_HAVE_VALUE_BEFORE_MOVING_WORKFLOW: String = "CHECK_THAT_ALL_MANDATORY_CONTROLS_HAVE_VALUE_BEFORE_MOVING_WORKFLOW";

    public static readonly TO_RESTRICT_VIEWING_THIS_BUTTON_SELECT_TRANSITION_AND_CLICK_ALLOWED_USER: String = "TO_RESTRICT_VIEWING_THIS_BUTTON_SELECT_TRANSITION_AND_CLICK_ALLOWED_USER";

    public static readonly SIZE: String = "SIZE";

    public static readonly CANNOT_DELETE_AUTOMATIC_GROUPS: String = "CANNOT_DELETE_AUTOMATIC_GROUPS";

    public static readonly CANNOT_DELETE_APPROVE_BUTTONS: String = "CANNOT_DELETE_APPROVE_BUTTONS";

    public static readonly CANNOT_DELETE_THE_CREATE_BUTTON: String = "CANNOT_DELETE_THE_CREATE_BUTTON";

    public static readonly CANNOT_DELETE_THE_SAVE_BUTTON: String = "CANNOT_DELETE_THE_SAVE_BUTTON";

    public static readonly APPROVAL: String = "APPROVAL";

    public static readonly REJECTION: String = "REJECTION";

    public static readonly GENERAL: String = "GENERAL";

    public static readonly RESUME: String = "RESUME";

    public static readonly MOVE_TO: String = "MOVE_TO";

    public static readonly RETURN_TO: String = "RETURN_TO";

    public static readonly SKIP_TO: String = "SKIP_TO";

    public static readonly APPROVE: String = "APPROVE";

    public static readonly RESUME_MAIN_FLOW: String = "RESUME_MAIN_FLOW";

    public static readonly NAME: String = "NAME";

    public static readonly FROM: String = "FROM";

    public static readonly MANY: String = "MANY";

    public static readonly RESET: String = "RESET";

    public static readonly BUTTONS: String = "BUTTONS";

    public static readonly CREATE_APPROVE: String = "CREATE_APPROVE";

    public static readonly ALL: String = "ALL";

    public static readonly CHOOSE_TWO_DIFFERENT_STEPS: String = "CHOOSE_TWO_DIFFERENT_STEPS";

    public static readonly APPROVED_BY: String = "APPROVED_BY";

    public static readonly ACTION_RULES: String = "ACTION_RULES";

    public static readonly STOP_RULES: String = "STOP_RULES";

    public static readonly SAVE_BUTTON: String = "SAVE_BUTTON";

    public static readonly ADDITIONAL_USERS: String = "ADDITIONAL_USERS";

    public static readonly SAVE_BUTTON_IS_DISPLAYED_TO: String = "SAVE_BUTTON_IS_DISPLAYED_TO";

    public static readonly USERS_ALLOWED_TO_APPROVE_THIS_STEP: String = "USERS_ALLOWED_TO_APPROVE_THIS_STEP";

    public static readonly EVERYONE_CAN_MOVE_WORKFLOW_BECAUSE_EVERYONE_ROLE_GROUP: String = "EVERYONE_CAN_MOVE_WORKFLOW_BECAUSE_EVERYONE_ROLE_GROUP";

    public static readonly SAVE_BUTTON_IS_VISIBLE_TO_EVERYONE_BECAUSE_EVERYONE_ROLE_GROUP: String = "SAVE_BUTTON_IS_VISIBLE_TO_EVERYONE_BECAUSE_EVERYONE_ROLE_GROUP";

    public static readonly BUTTON_VIEWABLE_BECAUSE_EVERYONE: String = "BUTTON_VIEWABLE_BECAUSE_EVERYONE";

    public static readonly BUTTON_CANT_BE_VIEWED: String = "BUTTON_CANT_BE_VIEWED";

    public static readonly FOLLOWING_USERS_ALLOWED_TO_STAR_THE_WORKFLOW: String = "FOLLOWING_USERS_ALLOWED_TO_STAR_THE_WORKFLOW";

    public static readonly PROGRESS_TO_THIS_STEP_ONLY_IF_CONDITIONS_SATISFIED: String = "PROGRESS_TO_THIS_STEP_ONLY_IF_CONDITIONS_SATISFIED";

    public static readonly STARTED_BY: String = "STARTED_BY";

    public static readonly DISPLAY_RESUME_BUTTON: String = "DISPLAY_RESUME_BUTTON";

    public static readonly THE_BUTTON_RETURNS_THE_FLOW_TO_LAST_STEP: String = "THE_BUTTON_RETURNS_THE_FLOW_TO_LAST_STEP";

    public static readonly USERS_ALLOWED_TO_MOVE_WORKFLOW_TO_AND_FROM: String = "USERS_ALLOWED_TO_MOVE_WORKFLOW_TO_AND_FROM";

    public static readonly WORKFLOW_SETTINGS: String = "WORKFLOW_SETTINGS";

    public static readonly DELETE_WORKFLOW: String = "DELETE_WORKFLOW";

    public static readonly UPDATE_ENTITY_STATUS_WHEN_ENTERING_STEP: String = "UPDATE_ENTITY_STATUS_WHEN_ENTERING_STEP";

    public static readonly ENTER_A_UNIQUE_WORKFLOW_NAME: String = "ENTER_A_UNIQUE_WORKFLOW_NAME";

    public static readonly A_WORKFLOW_WITH_ENTERED_NAME_ALREADY_EXISTS: String = "A_WORKFLOW_WITH_ENTERED_NAME_ALREADY_EXISTS";

    public static readonly SELECT_ICON: String = "SELECT_ICON";

    public static readonly SELECT_ICON_FOR_THE_BUTTON: String = "SELECT_ICON_FOR_THE_BUTTON";

    public static readonly CHOOSE_STATUS: String = "CHOOSE_STATUS";

    public static readonly CHOOSE_ASSIGNEE: String = "CHOOSE_ASSIGNEE";

    public static readonly CHOOSE_PLACE_AFTER: String = "CHOOSE_PLACE_AFTER";

    public static readonly NEW: String = "NEW";

    public static readonly WORKFLOW_FILTER: String = "WORKFLOW_FILTER";

    public static readonly USAGES: String = "USAGES";

    public static readonly CREATE_NEW_ITEM_DIALOG_BOX: String = "CREATE_NEW_ITEM_DIALOG_BOX";

    public static readonly ADDING_ROWS_TO_TABLE: String = "ADDING_ROWS_TO_TABLE";

    public static readonly ADMINISTRATION_PAGES: String = "ADMINISTRATION_PAGES";

    public static readonly USERS_CAN_CHANGE_ITEM_STATUS_USING_WORKFLOW: String = "USERS_CAN_CHANGE_ITEM_STATUS_USING_WORKFLOW";

    public static readonly USERS_CAN_ATTACH_FILES_TO_ITEM_CANNOT_BE_UNSELECTED: String = "USERS_CAN_ATTACH_FILES_TO_ITEM_CANNOT_BE_UNSELECTED";

    public static readonly USERS_CAN_CHANGE_ITEMS_ORDER_INSIDE_TABLES: String = "USERS_CAN_CHANGE_ITEMS_ORDER_INSIDE_TABLES";

    public static readonly ENTITY_WILL_APPEAR_IN_RECENT_VISITED_ITEMS: String = "ENTITY_WILL_APPEAR_IN_RECENT_VISITED_ITEMS";

    public static readonly ITEMS_ARE_ARRANGED_IN_A_TREE: String = "ITEMS_ARE_ARRANGED_IN_A_TREE";

    public static readonly USERS_CAN_CREATE_ITEMS_BY: String = "USERS_CAN_CREATE_ITEMS_BY";

    public static readonly MODIFIED_LABEL: String = "MODIFIED_LABEL";

    public static readonly MODIFIED_BY: String = "MODIFIED_BY";

    public static readonly CREATED_LABEL: String = "CREATED_LABEL";

    public static readonly CREATED_BY: String = "CREATED_BY";

    public static readonly REPORTS: String = "REPORTS";

    public static readonly USER_CAN_CREATE_REPORTS: String = "USER_CAN_CREATE_REPORTS";

    public static readonly SET_ENTITIES_ORDER: String = "SET_ENTITIES_ORDER";

    public static readonly USERS_CAN_FILTER_ITEMS_USING: String = "USERS_CAN_FILTER_ITEMS_USING";

    public static readonly AUTO_COMPLETE_TEXT_BOX: String = "AUTO_COMPLETE_TEXT_BOX";

    public static readonly LIST: String = "LIST";

    public static readonly USERS_CAN_CREATE_REPORT_BASED_ON_LOOKUP: String = "USERS_CAN_CREATE_REPORT_BASED_ON_LOOKUP";

    public static readonly PROPERTY_REPORTS_HEADER: String = "PROPERTY_REPORTS_HEADER";

    public static readonly LANGUAGES: String = "LANGUAGES";

    public static readonly REPORT_ENTITIES_ORDER: String = "REPORT_ENTITIES_ORDER";

    public static readonly REPORT_ENTITIES_ORDER_SUB_HEADER: String = "REPORT_ENTITIES_ORDER_SUB_HEADER";

    public static readonly WILL_BE_APPENDED_TO_WORKFLOW: String = "WILL_BE_APPENDED_TO_WORKFLOW";

    public static readonly WILL_BE_ADDED_AS_CHILD_TO_WORKFLOW: String = "WILL_BE_ADDED_AS_CHILD_TO_WORKFLOW";

    public static readonly WEB_SITE: String = "WEB_SITE";

    public static readonly NOTIFICATIONS: String = "NOTIFICATIONS";

    public static readonly SEND_EMAIL_NOTIFICATION_WHEN: String = "SEND_EMAIL_NOTIFICATION_WHEN";

    public static readonly ITEM_WAS_CREATED: String = "ITEM_WAS_CREATED";

    public static readonly ITEM_WAS_MODIFIED: String = "ITEM_WAS_MODIFIED";

    public static readonly ITEM_WAS_DELETED: String = "ITEM_WAS_DELETED";

    public static readonly YOU_CAN_ALSO_SET_WORKFLOW_NOTIFICATION_FROM_WE: String = "YOU_CAN_ALSO_SET_WORKFLOW_NOTIFICATION_FROM_WE";

    public static readonly RECIPIENTS: String = "RECIPIENTS";

    public static readonly SEPARATE_USERS_OR_EMAIL_USING_SEMI_COLONS: String = "SEPARATE_USERS_OR_EMAIL_USING_SEMI_COLONS";

    public static readonly TO: String = "TO";

    public static readonly CC: String = "CC";

    public static readonly BCC: String = "BCC";

    public static readonly SEND_EMAIL_NOTIFICATION_TO_THE_FOLLOWING_USERS: String = "SEND_EMAIL_NOTIFICATION_TO_THE_FOLLOWING_USERS";

    public static readonly SEND_EMAIL_NOTIFICATION_WHEN_PROPERTY_VALUE_CHANGED: String = "SEND_EMAIL_NOTIFICATION_WHEN_PROPERTY_VALUE_CHANGED";

    public static readonly NOTIFICATION: String = "NOTIFICATION";

    public static readonly TO_ASSIGNEE: String = "TO_ASSIGNEE";

    public static readonly TO_ADDITIONAL_USERS: String = "TO_ADDITIONAL_USERS";

    public static readonly SEND_NOTIFICATION_WHEN_WORKFLOW_HAS_MOVED_TO_THIS_STEP: String = "SEND_NOTIFICATION_WHEN_WORKFLOW_HAS_MOVED_TO_THIS_STEP";

    public static readonly PERSISTENCEBASEDTO_NAME_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_NAME_DISPLAY_NAME";

    public static readonly NAME_FORMAT: String = "NAME_FORMAT";

    public static readonly PRIMARY_PROPERTIES_FOR_BROWSING_REPORTS_NOTIFICATIONS: String = "PRIMARY_PROPERTIES_FOR_BROWSING_REPORTS_NOTIFICATIONS";

    public static readonly PRIMARY_NAME_PROPERTY: String = "PRIMARY_NAME_PROPERTY";

    public static readonly UNIQUE_NAME_PROPERTY: String = "UNIQUE_NAME_PROPERTY";

    public static readonly SINGLE_LINE_PROPERTY: String = "SINGLE_LINE_PROPERTY"

    public static readonly NEW_ACTION: String = "NEW_ACTION";

    public static readonly NEW_ACTION_TOOLTIP: String = "NEW_ACTION_TOOLTIP";

    public static readonly SET_PROPERTY_VALUE: String = "SET_PROPERTY_VALUE";

    public static readonly XML_ACTION: String = "XML_ACTION";

    public static readonly XML_RULE: String = "XML_RULE";

    public static readonly ACTIONS: String = "ACTIONS";

    public static readonly CONDITIONALLY: String = "CONDITIONALLY";

    public static readonly PERFORM_ACTIONS_WHEN_ENTERING_STEP: String = "PERFORM_ACTIONS_WHEN_ENTERING_STEP";

    public static readonly PERFORM_ACTIONS_WHEN_EXITING_STEP: String = "PERFORM_ACTIONS_WHEN_EXITING_STEP";

    public static readonly TO_BE: String = "TO_BE";

    public static readonly SET: String = "SET";

    public static readonly PROPERTY_TO_SET_VALUE_TO: String = "PROPERTY_TO_SET_VALUE_TO";

    public static readonly VALUE_TO_SET: String = "VALUE_TO_SET";

    public static readonly ENABLE_CONDITION: String = "ENABLE_CONDITION";

    public static readonly CONDITIONS_TO_CHECK_BEFORE_RUNNING_THE_ACTION_OPTIONAL: String = "CONDITIONS_TO_CHECK_BEFORE_RUNNING_THE_ACTION_OPTIONAL";

    public static readonly ACTION_NAME: String = "ACTION_NAME";

    public static readonly ADD_CONDITION_XML_ELEMENTS_INSIDE_SERVERSTEP: String = "ADD_CONDITION_XML_ELEMENTS_INSIDE_SERVERSTEP";

    public static readonly ADD_JAVASCRIPT_XML_ELEMENTS_INSIDE_CUSTOM: String = "ADD_JAVASCRIPT_XML_ELEMENTS_INSIDE_CUSTOM";

    public static readonly ADD_CONDITION_XML_ELEMENTS: String = "ADD_CONDITION_XML_ELEMENTS";

    public static readonly SELECT_OPTION: String = "SELECT_OPTION";

    public static readonly ACTIONS_TO_PERFORM_AFTER_USER_CLICK: String = "ACTIONS_TO_PERFORM_AFTER_USER_CLICK";

    public static readonly ACTION_BUTTON: String = "ACTION_BUTTON";

    public static readonly CREATE_ACTION_BUTTON: String = "CREATE_ACTION_BUTTON";

    public static readonly FIRST_TAB_DEFAULT_NAME: String = "FIRST_TAB_DEFAULT_NAME";

    public static readonly HOME: String = "HOME";

    public static readonly DELETE_WORKFLOW_TEXT: String = "DELETE_WORKFLOW_TEXT";

    public static readonly ARE_YOU_SURE_DELETE_WORKFLOW: String = "ARE_YOU_SURE_DELETE_WORKFLOW";

    public static readonly DELETE_WORKFLOW_TITLE: String = "DELETE_WORKFLOW_TITLE";

    public static readonly DELETE_AUTH_TREE: String = "DELETE_AUTH_TREE";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_TREE: String = "DO_YOU_WANT_TO_DELETE_THE_TREE";

    public static readonly YOU_SHOUD_REMOVE_FORMS_BEFORE_DELETE: String = "YOU_SHOUD_REMOVE_FORMS_BEFORE_DELETE";

    public static readonly DO_YOU_WANT_TO_REMOVE_THE_ROLE: String = "DO_YOU_WANT_TO_REMOVE_THE_ROLE";

    public static readonly DO_YOU_WANT_TO_REMOVE_THE_STEP: String = "DO_YOU_WANT_TO_REMOVE_THE_STEP";

    public static readonly REMOVE_ROLE: String = "REMOVE_ROLE";

    public static readonly REMOVE_STEP: String = "REMOVE_STEP";

    public static readonly NEW_FORM: String = "NEW_FORM";

    public static readonly NEW_WORKFLOW: String = "NEW_WORKFLOW";

    public static readonly THIS_WORKFLOW_IS_BASED: String = "THIS_WORKFLOW_IS_BASED_ON";

    public static readonly THIS_FORM_IS_BASED_ON: String = "THIS_FORM_IS_BASED_ON";

    public static readonly INSERT_NEW_PROPERTY: String = "INSERT_NEW_PROPERTY";

    public static readonly INSERT_NEW_COLUMN_PROPERTY: String = "INSERT_NEW_COLUMN_PROPERTY";

    public static readonly TIME_CREATED: String = "TIME_CREATED";

    public static readonly TIME_UPDATED: String = "TIME_UPDATED";

    public static readonly UPDATED_BY: String = "UPDATED_BY";

    public static readonly SAVING_CHANGES: String = "SAVING_CHANGES";

    public static readonly SORRY: String = "SORRY";

    public static readonly SAVE_FAILED_MESSAGE: String = "SAVE_FAILED_MESSAGE";

    public static readonly PERSISTENCEBASEDTO_FOLLOWERS_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_FOLLOWERS_DISPLAY_NAME";

    public static readonly FOLLOWERS_DISPLAY_NAME: String = "FOLLOWERS_DISPLAY_NAME";

    public static readonly USERS_CAN_ADD_ITEMS_TO_FOLLOW_LIST_CANNOT_BE_UNSELECTED: String = "USERS_CAN_ADD_ITEMS_TO_FOLLOW_LIST_CANNOT_BE_UNSELECTED";

    public static readonly USER_CAN_INTEGRATE_ENTITY_WITH_EXTERNAL: String = "USER_CAN_INTEGRATE_ENTITY_WITH_EXTERNAL";

    public static readonly FOLLOWED_ITEMS_CAN_BE_VIEWED_IN_SCOREBOARD: String = "FOLLOWED_ITEMS_CAN_BE_VIEWED_IN_SCOREBOARD";

    public static readonly REMOVE_THIS_ITEM_FROM_FOLLOWED: String = "REMOVE_THIS_ITEM_FROM_FOLLOWED";

    public static readonly CUSTOM_LINK_HELP_TEXT: String = "CUSTOM_LINK_HELP_TEXT";

    public static readonly NEW_ACTION_BUTTON: String = "NEW_ACTION_BUTTON";

    public static readonly RESET_ZOOM: String = "RESET_ZOOM";

    public static readonly FIT_TO_WINDOW_TOOLTIP: String = "FIT_TO_WINDOW_TOOLTIP";

    public static readonly MANAGE_BUTTONS: String = "MANAGE_BUTTONS";

    public static readonly IMPORT_EXPORT: String = "IMPORT_EXPORT";

    public static readonly LOG: String = "LOG";

    public static readonly EXPORT_LOCATION: String = "EXPORT_LOCATION";

    public static readonly IMPORT_LOCATION: String = "IMPORT_LOCATION";

    public static readonly IMPORT: String = "IMPORT";

    public static readonly STEP_ONE_IMPORT_DB_SCHEMA: String = "STEP_ONE_IMPORT_DB_SCHEMA";

    public static readonly STEP_TWO_IMPORT_SOLUTION_CONFIGURATION: String = "STEP_TWO_IMPORT_SOLUTION_CONFIGURATION";

    public static readonly EXPORT: String = "EXPORT";

    public static readonly STEP_ONE_DESCRIPTION: String = "STEP_ONE_DESCRIPTION";

    public static readonly STEP_TWO_DESCRIPTION: String = "STEP_TWO_DESCRIPTION";

    public static readonly STEP_THREE_DESCRIPTION: String = "STEP_THREE_DESCRIPTION";

    public static readonly ADMINISTRATION_PAGES_SETTINGS: String = "ADMINISTRATION_PAGES_SETTINGS";

    public static readonly ADMIN_CAN_MANAGE_ITEMS_BY: String = "ADMIN_CAN_MANAGE_ITEMS_BY";

    public static readonly TREE_ENTITY_AS_ROOT: String = "TREE_ENTITY_AS_ROOT";

    public static readonly TREE_ANOTHER_ENTITY_AS_ROOT: String = "TREE_ANOTHER_ENTITY_AS_ROOT";

    public static readonly CUSTOM_INPUT_URL: String = "CUSTOM_INPUT_URL";

    public static readonly CONFIGURATION_ITEMS_SECTION: String = "CONFIGURATION_ITEMS_SECTION";

    public static readonly THE_ENTITY_WILL_BE_DISPLAYED_CONFIGURATION_ITEMS: String = "THE_ENTITY_WILL_BE_DISPLAYED_CONFIGURATION_ITEMS";

    public static readonly DEFINE: String = "DEFINE";

    public static readonly HIERARCHICAL_ADMIN_PAGE_DEFINITION: String = "HIERARCHICAL_ADMIN_PAGE_DEFINITION";

    public static readonly RELATIONSHIP_PROPERTY: String = "RELATIONSHIP_PROPERTY";

    public static readonly NO_LOOKUP_PROPERTY_FOUND: String = "NO_LOOKUP_PROPERTY_FOUND";

    public static readonly NEW_HIERARCHY_LEVEL: String = "NEW_HIERARCHY_LEVEL";

    public static readonly EDIT_HIERARCHY_LEVEL: String = "EDIT_HIERARCHY_LEVEL";

    public static readonly NEW_HIERARCHY_LEVEL_TIP: String = "NEW_HIERARCHY_LEVEL_TIP";

    public static readonly DELETE_ITEM_SUB_TITLE: String = "DELETE_ITEM_SUB_TITLE";

    public static readonly DELETE_ITEM: String = "DELETE_ITEM";

    public static readonly DELETE_ITEM_TEXT: String = "DELETE_ITEM_TEXT";

    public static readonly SELECT_AT_LEAST_ONE_OPTION: String = "SELECT_AT_LEAST_ONE_OPTION";

    public static readonly VALIDATION_FAILED: String = "VALIDATION_FAILED";

    public static readonly SOME_SETTINGS_HAVE_INVALID_DATA: String = "SOME_SETTINGS_HAVE_INVALID_DATA";

    public static readonly AUTHENTICATION: String = "AUTHENTICATION";

    public static readonly INTEGRATIONS: String = "INTEGRATIONS";

    public static readonly LOGGING_TROUBLESHOOT: String = "LOGGING_TROUBLESHOOT";

    public static readonly OBSOLETE: String = "OBSOLETE";

    public static readonly SERVER_ADMIN: String = "SERVER_ADMIN";

    public static readonly CANNOT_DELETE_OBJECT_CAUSE_OTHER_USING_IT: String = "CANNOT_DELETE_OBJECT_CAUSE_OTHER_USING_IT";

    public static readonly CANNOT_DELETE_LANE_WITH_STEPS: String = "CANNOT_DELETE_LANE_WITH_STEPS";

    public static readonly TO_DELETE_THIS_LANE_FIRST_DELETE_STEPS: String = "TO_DELETE_THIS_LANE_FIRST_DELETE_STEPS";

    public static readonly MY_WORK: String = "MY_WORK";

    public static readonly NEW_POLICY: String = "NEW_POLICY";

    public static readonly CALENDARS: String = "CALENDARS";

    public static readonly SELECT_POLICY_FROM_TREE: String = "SELECT_POLICY_FROM_TREE";

    public static readonly CALENDAR: String = "CALENDAR";

    public static readonly ENTITIES_AND_TASK_GROUPS: String = "ENTITIES_AND_TASK_GROUPS";

    public static readonly REMOVE_ENTITY_SUB_TITLE: String = "REMOVE_ENTITY_SUB_TITLE";

    public static readonly REMOVE_ENTITY_TITLE: String = "REMOVE_ENTITY_TITLE";

    public static readonly REMOVE_ENTITY_TEXT: String = "REMOVE_ENTITY_TEXT";

    public static readonly DELETE_TASK_GROUP_SUB_TITLE: String = "DELETE_TASK_GROUP_SUB_TITLE";

    public static readonly DELETE_TASK_GROUP_TITLE: String = "DELETE_TASK_GROUP_TITLE";

    public static readonly ADD_ENTITY: String = "ADD_ENTITY";

    public static readonly ADD_ENTITY_TOOLTIP: String = "ADD_ENTITY_TOOLTIP";

    public static readonly NEW_TASK_GROUP: String = "NEW_TASK_GROUP";

    public static readonly NEW_TASK_STYLE: String = "NEW_TASK_STYLE";

    public static readonly NEW_TASK_GROUP_TOOLTIP: String = "NEW_TASK_GROUP_TOOLTIP";

    public static readonly NEW_TASK_STYLE_TOOLTIP: String = "NEW_TASK_STYLE_TOOLTIP";

    public static readonly MY_WORK_POLICY_INFO: String = "MY_WORK_POLICY_INFO";

    public static readonly VIEWING_WORKSHEET_OF_OTHER_USERS: String = "VIEWING_WORKSHEET_OF_OTHER_USERS";

    public static readonly USERS_CAN_VIEW_WORKSHEETS: String = "USERS_CAN_VIEW_WORKSHEETS";

    public static readonly USE_ROLE_GROUPS_TO_CHECK_DIFFERENT: String = "USE_ROLE_GROUPS_TO_CHECK_DIFFERENT";

    public static readonly VIEWING_WORKSHEET_FOR_EXAMPLE: String = "VIEWING_WORKSHEET_FOR_EXAMPLE";

    public static readonly VIEWING_WORKSHEET_FOR_EXAMPLE_SECOND: String = "VIEWING_WORKSHEET_FOR_EXAMPLE_SECOND";

    public static readonly ADD_ENTITY_TO_MY_WORK_POLICY: String = "ADD_ENTITY_TO_MY_WORK_POLICY";

    public static readonly DELETE_MY_WORK_POLICY: String = "DELETE_MY_WORK_POLICY";

    public static readonly DELETE_MY_WORK_POLICY_HEADER: String = "DELETE_MY_WORK_POLICY_HEADER";

    public static readonly DELETE_MY_WORK_POLICY_TEXT: String = "DELETE_MY_WORK_POLICY_TEXT";

    public static readonly DELETE_CALENDAR: String = "DELETE_CALENDAR";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_CALENDAR: String = "DO_YOU_WANT_TO_DELETE_THE_CALENDAR";

    public static readonly CREATE_NEW_MY_WORK_CALENDAR: String = "CREATE_NEW_MY_WORK_CALENDAR";

    public static readonly TASK_GROUP: String = "TASK_GROUP";

    public static readonly EXAMPLE_PORTFOLIO_REQUIREMENT_TASK: String = "EXAMPLE_PORTFOLIO_REQUIREMENT_TASK";

    public static readonly USE_THE_FOLLOWING_NAME_FORMAT_IN_MYWORK_INSTEAD_OF_THE_DEFAULT: String = "USE_THE_FOLLOWING_NAME_FORMAT_IN_MYWORK_INSTEAD_OF_THE_DEFAULT";

    public static readonly SET_TASK_GROUP_DISPLAY_NAME: String = "SET_TASK_GROUP_DISPLAY_NAME";

    public static readonly INFORMATION: String = "INFORMATION";

    public static readonly SPECIFY_WHO_CAN_TRACK_TIME_AGAINST_ITEMS: String = "SPECIFY_WHO_CAN_TRACK_TIME_AGAINST_ITEMS";

    public static readonly SPECIFY_WITH_USERS_ABLE_TO_VIEW_TASK_GROUP: String = "SPECIFY_WITH_USERS_ABLE_TO_VIEW_TASK_GROUP";

    public static readonly NO_ITEMS_BE_INCLUDED_IN_GROUP: String = "NO_ITEMS_BE_INCLUDED_IN_GROUP";

    public static readonly NO_ITEMS_BE_AVAILABLE_FOR_TRACKING_ADD_EVERYONE: String = "NO_ITEMS_BE_AVAILABLE_FOR_TRACKING_ADD_EVERYONE";

    public static readonly ALL_ITEMS_ARE_AVAILABLE_BECAUSE_EVERYONE: String = "ALL_ITEMS_ARE_AVAILABLE_BECAUSE_EVERYONE";

    public static readonly ALL_ITEMS_BE_INCLUDED_IN_GROUP_BECAUSE_EVERYONE: String = "ALL_ITEMS_BE_INCLUDED_IN_GROUP_BECAUSE_EVERYONE";

    public static readonly THE_GROUP_NOT_DISPLAYED_ADD_EVERYONE: String = "THE_GROUP_NOT_DISPLAYED_ADD_EVERYONE";

    public static readonly THE_GROUP_ALWAYS_DISPLAYED_BECAUSE_EVERYONE: String = "THE_GROUP_ALWAYS_DISPLAYED_BECAUSE_EVERYONE";

    public static readonly THIS_ENTITY_WILL_BE_AVAILABLE_TO_ALL_BECAUSE_EVERYONE: String = "THIS_ENTITY_WILL_BE_AVAILABLE_TO_ALL_BECAUSE_EVERYONE";

    public static readonly AUTOMATIC_ADD_THIS_TASK_GROUP_TASKS_TO_WORKSHEET: String = "AUTOMATIC_ADD_THIS_TASK_GROUP_TASKS_TO_WORKSHEET";

    public static readonly NEW_CALENDAR: String = "NEW_CALENDAR";

    public static readonly WORK_DAYS: String = "WORK_DAYS";

    public static readonly SUNDAY: String = "SUNDAY";

    public static readonly MONDAY: String = "MONDAY";

    public static readonly TUESDAY: String = "TUESDAY";

    public static readonly WEDNESDAY: String = "WEDNESDAY";

    public static readonly THURSDAY: String = "THURSDAY";

    public static readonly FRIDAY: String = "FRIDAY";

    public static readonly SATURDAY: String = "SATURDAY";

    public static readonly SELECTED_WORK_DAYS: String = "SELECTED_WORK_DAYS";

    public static readonly EDIT_CALENDAR: String = "EDIT_CALENDAR";

    public static readonly DAY_EXCEPTIONS: String = "DAY_EXCEPTIONS";

    public static readonly NEW_DAY_EXCEPTION: String = "NEW_DAY_EXCEPTION";

    public static readonly DELETE_ENTITY: String = "DELETE_ENTITY";

    public static readonly DELETE_PROPERTY: String = "DELETE_PROPERTY";

    public static readonly CHOICE_OPTIONS: String = "CHOICE_OPTIONS";

    public static readonly NEW_CHOICE_OPTION: String = "NEW_CHOICE_OPTION";

    public static readonly EDIT_CHOICE_OPTION: String = "EDIT_CHOICE_OPTION";

    public static readonly TIME_AND_PROGRESS_TRACKING: String = "TIME_AND_PROGRESS_TRACKING";

    public static readonly INCLUDE_THIS_ENTITY_IN_MY_WORK_POLICIES: String = "INCLUDE_THIS_ENTITY_IN_MY_WORK_POLICIES";

    public static readonly IF_SELECTED_USERS_CAN_TRACK_TIME_AND_PROGRES_VIA_MY_WORK: String = "IF_SELECTED_USERS_CAN_TRACK_TIME_AND_PROGRES_VIA_MY_WORK";

    public static readonly PERSISTENCEBASEDTO_MYWORKTASK_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_MYWORKTASK_DISPLAY_NAME";

    public static readonly PERSISTENCEBASEDTO_MYWORKTASK_DESCRIPTION: String = "PERSISTENCEBASEDTO_MYWORKTASK_DESCRIPTION";

    public static readonly MYWORKTASK_ENTITY_DISPLAY_NAME: String = "MYWORKTASK_ENTITY_DISPLAY_NAME";

    public static readonly FOLLOWERS_PROPERTY_DISPLAY_NAME: String = "FOLLOWERS_ENTITY_DISPLAY_NAME";

    public static readonly ATTACHMENTS_PROPERTY_DISPLAY_NAME: String = "ATTACHMENTS_PROPERTY_DISPLAY_NAME";

    public static readonly ENTITYCATEGORY_TITLE_PROPERTY_DISPLAY_NAME: String = "ENTITYCATEGORY_TITLE_PROPERTY_DISPLAY_NAME";

    public static readonly USER_ENTITY_DISPLAY_NAME: String = "USER_ENTITY_DISPLAY_NAME";

    public static readonly INSTANCELEVELINTEGRATIONOPERATION_ENTITY_DISPLAY_NAME: String = "INSTANCELEVELINTEGRATIONOPERATION_ENTITY_DISPLAY_NAME";

    public static readonly TRACKING: String = "TRACKING";

    public static readonly LINK_TO_ITEM: String = "LINK_TO_ITEM";

    public static readonly LINK_TO_ITEM_EXAMPLE: String = "LINK_TO_ITEM_EXAMPLE";

    public static readonly TASK_FORM: String = "TASK_FORM";

    public static readonly TASK_FORM_TIP: String = "TASK_FORM_TIP";

    public static readonly TASK_TIME_REPORT_FORM: String = "TASK_TIME_REPORT_FORM";

    public static readonly TASK_TIME_REPORT_FORM_TIP: String = "TASK_TIME_REPORT_FORM_TIP";

    public static readonly USERS_CAN_TRACK: String = "USERS_CAN_TRACK";

    public static readonly PROPERTY_HOLDING_PLANNED_WORK: String = "PROPERTY_HOLDING_PLANNED_WORK";

    public static readonly DEFAULT_VALUES: String = "DEFAULT_VALUES";

    public static readonly TASK: String = "TASK";

    public static readonly TASK_TIME_REPORT: String = "TASK_TIME_REPORT";

    public static readonly SET_INITIAL_VALUE_OF_TASK: String = "SET_INITIAL_VALUE_OF_TASK";

    public static readonly SET_INITIAL_VALUE_OF_TASK_TIME_REPORTS: String = "SET_INITIAL_VALUE_OF_TASK_TIME_REPORTS";

    public static readonly CHOOSE_PROPERTY_TO_SET_VALUE_TO: String = "CHOOSE_PROPERTY_TO_SET_VALUE_TO";

    public static readonly TASK_GROUPS: String = "TASK_GROUPS";

    public static readonly TASK_STYLES: String = "TASK_STYLES";

    public static readonly SET_TRACKING_PERMISSIONS: String = "SET_TRACKING_PERMISSIONS";

    public static readonly OPEN_WEEK_DAYS: String = "OPEN_WEEK_DAYS";

    public static readonly WORK_WEEK_DAYS: String = "WORK_WEEK_DAYS";

    public static readonly NON_WORK_WEEK_DAYS: String = "NON_WORK_WEEK_DAYS";

    public static readonly OPEN_NON_WORK_WEEK_DAYS: String = "OPEN_NON_WORK_WEEK_DAYS";

    public static readonly OPEN_DAY_EXCEPTIONS: String = "OPEN_DAY_EXCEPTIONS";

    public static readonly TASKS: String = "TASKS";

    public static readonly OPEN_TASK_LINES: String = "OPEN_TASK_LINES";

    public static readonly ATTENDANCE: String = "ATTENDANCE";

    public static readonly OPEN_ATTENDANCE_LINES: String = "OPEN_ATTENDANCE_LINES";

    public static readonly TRACKING_PERMISSIONS: String = "TRACKING_PERMISSIONS";

    public static readonly WORKSHEET_CONDITION: String = "WORKSHEET_CONDITION";

    public static readonly OPEN_WORKSHEET_BEFORE: String = "OPEN_WORKSHEET_BEFORE";

    public static readonly OPEN_WORKSHEET_AFTER: String = "OPEN_WORKSHEET_AFTER";

    public static readonly ADMIN_TIME: String = "ADMIN_TIME";

    public static readonly OPEN_ADMIN_TIME_LINES: String = "OPEN_ADMIN_TIME_LINES";

    public static readonly WORKSHEETS_AND_TASKS: String = "WORKSHEETS_AND_TASKS";

    public static readonly WORKSHEET_AUTH_TREE: String = "WORKSHEET_AUTH_TREE";

    public static readonly WORKSHEET_WORKFLOW: String = "WORKSHEET_WORKFLOW";

    public static readonly WORKSHEET_WORKFLOW_TIP: String = "WORKSHEET_WORKFLOW_TIP";

    public static readonly WORKSHEET_FORM: String = "WORKSHEET_FORM";

    public static readonly WORKSHEET_FORM_TIP: String = "WORKSHEET_FORM_TIP";

    public static readonly ADMIN_TIME_REPORT_FORM: String = "ADMIN_TIME_REPORT_FORM";

    public static readonly ADMIN_TIME_REPORT_TIP: String = "ADMIN_TIME_REPORT_TIP";

    public static readonly VALIDATIONS: String = "VALIDATIONS";

    public static readonly MAX_WORK_PER_DAY: String = "MAX_WORK_PER_DAY";

    public static readonly MIN_WORK_PER_DAY: String = "MIN_WORK_PER_DAY";

    public static readonly TOTAL_ACTUAL_WORK_ATTENDANCE: String = "TOTAL_ACTUAL_WORK_ATTENDANCE";

    public static readonly DAVIATION_RANGE: String = "DAVIATION_RANGE";

    public static readonly DEFAULT_VALUES_OF_ADMIN_TIME_REPORT: String = "DEFAULT_VALUES_OF_ADMIN_TIME_REPORT";

    public static readonly SET_INITIAL_VALUE_OF_ADMIN_TIME_REPORTS: String = "SET_INITIAL_VALUE_OF_ADMIN_TIME_REPORTS";

    public static readonly COLOR: String = "COLOR";

    public static readonly BACKGROUND_COLOR: String = "BACKGROUND_COLOR";

    public static readonly TASK_NAME_SAMPLE: String = "TASK_NAME_SAMPLE";

    public static readonly CHANGE_COLOR: String = "CHANGE_COLOR";

    public static readonly CONDITIONS: String = "CONDITIONS";

    public static readonly SPECIFY_WHEN_TASK_NAME_HIGHLIGHTED: String = "SPECIFY_WHEN_TASK_NAME_HIGHLIGHTED";

    public static readonly DELETE_TASK_STYLE_SUB_TITLE: String = "DELETE_TASK_STYLE_SUB_TITLE";

    public static readonly DELETE_TASK_STYLE_TITLE: String = "DELETE_TASK_STYLE_TITLE";

    public static readonly LOOKUP_ENTITY: String = "LOOKUP_ENTITY";

    public static readonly REVERSE_LOOKUP: String = "REVERSE_LOOKUP";

    public static readonly REVERSE_LOOKUP_PRIMARY_SUB_TEXT: String = "REVERSE_LOOKUP_PRIMARY_SUB_TEXT";

    public static readonly TABLE_SYSTEM_NAME: String = "TABLE_SYSTEM_NAME";

    public static readonly REVERSE_LOOKUP_SYSTEM_NAME: String = "REVERSE_LOOKUP_SYSTEM_NAME";

    public static readonly REVERSE_LOOKUP_DISPLAY_NAME: String = "REVERSE_LOOKUP_DISPLAY_NAME";

    public static readonly REVERSE_LOOKUP_DISPLAY_NAME_INPUT_HELP: String = "REVERSE_LOOKUP_DISPLAY_NAME_INPUT_HELP";

    public static readonly WORKSHEET_WEEK_START: String = "WORKSHEET_WEEK_START";

    public static readonly WORKSHEET_WEEK_END: String = "WORKSHEET_WEEK_END";

    public static readonly WORKSHEET: String = "WORKSHEET";

    public static readonly RESULTS_FILTER: String = "RESULTS_FILTER";

    public static readonly LOGGED_IN_USER_IS_ASSIGNED: String = "LOGGED_IN_USER_IS_ASSIGNED";

    public static readonly FILTER_REPORT_RESULTS: String = "FILTER_REPORT_RESULTS";

    public static readonly FILTER_REPORT_RESULTS_SUB_TEXT: String = "FILTER_REPORT_RESULTS_SUB_TEXT";

    public static readonly LOGGED_IN_USER_ROLE_FILTER: String = "LOGGED_IN_USER_ROLE_FILTER";

    public static readonly LOGGED_IN_USER_ROLE: String = "LOGGED_IN_USER_ROLE";

    public static readonly LOGGED_IN_USER_IS_ASSIGNED_TO_ROLE: String = "LOGGED_IN_USER_IS_ASSIGNED_TO_ROLE";

    public static readonly EXCLUDE_FORM_BUTTONS: String = "EXCLUDE_FORM_BUTTONS";

    public static readonly ACTION_RULE_WIZARD: String = "ACTION_RULE_WIZARD";

    public static readonly STOP_RULE_WIZARD: String = "STOP_RULE_WIZARD";

    public static readonly ATTACHMENT_STOP_RULE: String = "ATTACHMENT_STOP_RULE";

    public static readonly ATTACHMENT_STOP_RULE_MESSAGE: String = "ATTACHMENT_STOP_RULE_MESSAGE";

    public static readonly ATTACHMENT_STOP_RULE_DESCRIPTION: String = "ATTACHMENT_STOP_RULE_DESCRIPTION";

    public static readonly ACTION_RULE_DESCRIPTION: String = "ACTION_RULE_DESCRIPTION";

    public static readonly STOP_RULE_DESCRIPTION: String = "STOP_RULE_DESCRIPTION";

    public static readonly NEW_ACTION_RULE: String = "NEW_ACTION_RULE";

    public static readonly NEW_STOP_RULE: String = "NEW_STOP_RULE";

    public static readonly TRIGGERING_CONDITIONS: String = "TRIGGERING_CONDITIONS";

    public static readonly TRIGGERING_CONDITIONS_DESCRIPTION: String = "TRIGGERING_CONDITIONS_DESCRIPTION";

    public static readonly TRIGGERING_CONDITIONS_STEP: String = "TRIGGERING_CONDITIONS_STEP";

    public static readonly MESSAGE_STEP: String = "MESSAGE_STEP";

    public static readonly MESSAGE_STEP_DESCRIPTION: String = "MESSAGE_STEP_DESCRIPTION";

    public static readonly MESSAGE_STEP_HELP: String = "MESSAGE_STEP_HELP";

    public static readonly TRIGGERING_CONDITIONS_STEP_DESCRIPTION: String = "TRIGGERING_CONDITIONS_STEP_DESCRIPTION";

    public static readonly ACTIONS_STEP: String = "ACTIONS_STEP";

    public static readonly ACTIONS_STEP_DESCRIPTION: String = "ACTIONS_STEP_DESCRIPTION";

    public static readonly RULE_NAME_STEP: String = "RULE_NAME_STEP";

    public static readonly RULE_NAME: String = "RULE_NAME";

    public static readonly ADDITIONAL_CONDITIONS_OPTIONAL: String = "ADDITIONAL_CONDITIONS_OPTIONAL";

    public static readonly ADDITIONAL_CONDITIONS: String = "ADDITIONAL_CONDITIONS";

    public static readonly MULTI_LOOKUP_OR_TABLE_PROPERTY: String = "MULTI_LOOKUP_OR_TABLE_PROPERTY";

    public static readonly ITEM_SET_CONDITION: String = "ITEM_SET_CONDITION";

    public static readonly PROPERTY_CHANGE_CONDITION: String = "PROPERTY_CHANGE_CONDITION";

    public static readonly TRANSITION_CONDITION: String = "TRANSITION_CONDITION";

    public static readonly ATTACHMENT_CONDITION: String = "ATTACHMENT_CONDITION";

    public static readonly SAVING_OR_MOVING_PROHIBITED_IF_ITEM_IN_SET_PASSES: String = "SAVING_OR_MOVING_PROHIBITED_IF_ITEM_IN_SET_PASSES";

    public static readonly ITEM_SET_LABEL: String = "ITEM_SET_LABEL";

    public static readonly ITEM_SET: String = "ITEM_SET";

    public static readonly NEW_PROPERTY_CHANGE_CONDITION: String = "NEW_PROPERTY_CHANGE_CONDITION";

    public static readonly EDIT_PROPERTY_CHANGE_CONDITION: String = "EDIT_PROPERTY_CHANGE_CONDITION";

    public static readonly PROPERTY_VALUE_IS_ABOUT_TO_CHANGE: String = "PROPERTY_VALUE_IS_ABOUT_TO_CHANGE";

    public static readonly NEW_VALUE_CAN_BE_EMPTY: String = "NEW_VALUE_CAN_BE_EMPTY";

    public static readonly NEW_VALUE_CANNOT_BE_EMPTY: String = "NEW_VALUE_CANNOT_BE_EMPTY";

    public static readonly IS_ABOUT_TO_CHANGE: String = "IS_ABOUT_TO_CHANGE";

    public static readonly TO_A_NON_EMPTY_VALUE: String = "TO_A_NON_EMPTY_VALUE";

    public static readonly THIS_ITEM_SET_CONDITION_PASSES_WHEN: String = "THIS_ITEM_SET_CONDITION_PASSES_WHEN";

    public static readonly ALL_ITEMS_PASS_THE_CONDITION: String = "ALL_ITEMS_PASS_THE_CONDITION";

    public static readonly AT_LEAST_ONE_ITEM_PASS_THE_CONDITION: String = "AT_LEAST_ONE_ITEM_PASS_THE_CONDITION";

    public static readonly AT_LEAST_ONE_ITEM_DOESNT_PASS_THE_CONDITION: String = "AT_LEAST_ONE_ITEM_DOESNT_PASS_THE_CONDITION";

    public static readonly NONE_OF_THE_ITEMS_PASS_THE_CONDITION: String = "NONE_OF_THE_ITEMS_PASS_THE_CONDITION";

    public static readonly SKIP_THIS_CONDITION_IF_SET_IS_EMPTY: String = "SKIP_THIS_CONDITION_IF_SET_IS_EMPTY";

    public static readonly CONDITIONS_CANNOT_BE_EMPTY: String = "CONDITIONS_CANNOT_BE_EMPTY";

    public static readonly EDIT_ITEM_SET_CONDITION: String = "EDIT_ITEM_SET_CONDITION";

    public static readonly NEW_ITEM_SET_CONDITION: String = "NEW_ITEM_SET_CONDITION";

    public static readonly NEW_MOVE_WORKFLOW_ACTION: String = "NEW_MOVE_WORKFLOW_ACTION";

    public static readonly EDIT_MOVE_WORKFLOW_ACTION: String = "EDIT_MOVE_WORKFLOW_ACTION";

    public static readonly MOVE_WORKFLOW: String = "MOVE_WORKFLOW";

    public static readonly MOVE_WORKFLOW_OF_ITEM: String = "MOVE_WORKFLOW_OF_ITEM";

    public static readonly MOVE_WORKFLOW_TO_A_SPECIFIC_STEP: String = "MOVE_WORKFLOW_TO_A_SPECIFIC_STEP";

    public static readonly ITEM: String = "ITEM";

    public static readonly TO_STEP: String = "TO_STEP";

    public static readonly BACKUP_SOLUTION_CONFIGURATION: String = "BACKUP_SOLUTION_CONFIGURATION";

    public static readonly BACKUP_SOLUTION_CONFIGURATION_TIP: String = "BACKUP_SOLUTION_CONFIGURATION_TIP";

    public static readonly ACTUAL_WORK: String = "ACTUAL_WORK";

    public static readonly ACTUAL_WORK_AND_REMAINING_WORK: String = "ACTUAL_WORK_AND_REMAINING_WORK";

    public static readonly REMAINING_WORK_AND_PERCENT_WORK_COMPLETE: String = "REMAINING_WORK_AND_PERCENT_WORK_COMPLETE";

    public static readonly ACTUAL_WORK_REMAINING_WORK_AND_PERCENT_WORK_COMPLETE: String = "ACTUAL_WORK_REMAINING_WORK_AND_PERCENT_WORK_COMPLETE";

    public static readonly HIDE_PERCENT_WORK_COMPLETE: String = "HIDE_PERCENT_WORK_COMPLETE";

    public static readonly ATTACHMENT_OF_TYPE: String = "ATTACHMENT_OF_TYPE";

    public static readonly ATTACHMENT_MUST_EXIST_FROM_THIS_STEP: String = "ATTACHMENT_MUST_EXIST_FROM_THIS_STEP";

    public static readonly AN: String = "AN";

    public static readonly THE_STEP_OF: String = "THE_STEP_OF";

    public static readonly NEW_WORKFLOW_CONDITION: String = "NEW_WORKFLOW_CONDITION";

    public static readonly EDIT_WORKFLOW_CONDITION: String = "EDIT_WORKFLOW_CONDITION";

    public static readonly NEW_WORKFLOW_FILTER: String = "NEW_WORKFLOW_FILTER";

    public static readonly EDIT_WORKFLOW_FILTER: String = "EDIT_WORKFLOW_FILTER";

    public static readonly SELECT_AN_ENTITY_WITH_WORKFLOW: String = "SELECT_AN_ENTITY_WITH_WORKFLOW";

    public static readonly SELECT_AN_ENTITY_WITH_ATTACHMENTS_SUPPORT: String = "SELECT_AN_ENTITY_WITH_ATTACHMENTS_SUPPORT";

    public static readonly IS_AT_OR_BEYOND_STEP: String = "IS_AT_OR_BEYOND_STEP";

    public static readonly IS_BEYOND_STEP: String = "IS_BEYOND_STEP";

    public static readonly IS_AT_OR_BEFORE_STEP: String = "IS_AT_OR_BEFORE_STEP";

    public static readonly IS_BEFORE_STEP: String = "IS_BEFORE_STEP";

    public static readonly IS_AT_FLOW_STEP: String = "IS_AT_FLOW_STEP";

    public static readonly IS_AT_SIDE_STEP: String = "IS_AT_SIDE_STEP";

    public static readonly PROGRESS: String = "PROGRESS";

    public static readonly REGRESS: String = "REGRESS";

    public static readonly MOVE_TO_SIDE_STEP: String = "MOVE_TO_SIDE_STEP";

    public static readonly RETURN_TO_MAIN_FLOW: String = "RETURN_TO_MAIN_FLOW";

    public static readonly WORKFLOW_IS_ABOUT_TO: String = "WORKFLOW_IS_ABOUT_TO";

    public static readonly NEW_TRANSITION_CONDITION: String = "NEW_TRANSITION_CONDITION";

    public static readonly EDIT_TRANSITION_CONDITION: String = "EDIT_TRANSITION_CONDITION";

    public static readonly TO_ANY_STEP: String = "TO_ANY_STEP";

    public static readonly TO_THIS_STEP: String = "TO_THIS_STEP";

    public static readonly FROM_A_PREVIOUS_STEP_ONLY: String = "FROM_A_PREVIOUS_STEP_ONLY";

    public static readonly RECOMMENDED_FOR_ACTION_RULES: String = "RECOMMENDED_FOR_ACTION_RULES";

    public static readonly OR_BEYOND_IT: String = "OR_BEYOND_IT";

    public static readonly OR_BEFORE_IT: String = "OR_BEFORE_IT";

    public static readonly FROM_A_LATER_STEP_ONLY: String = "FROM_A_LATER_STEP_ONLY";

    public static readonly RETURN_TO_STEP: String = "RETURN_TO_STEP";

    public static readonly ITEM_SET_ACTION: String = "ITEM_SET_ACTION";

    public static readonly EDIT_ITEM_SET_ACTION: String = "EDIT_ITEM_SET_ACTION";

    public static readonly NEW_ITEM_SET_ACTION: String = "NEW_ITEM_SET_ACTION";

    public static readonly ATTACHMENTS_TAB: String = "ATTACHMENTS_TAB";

    public static readonly MESSAGES_TAB: String = "MESSAGES_TAB";

    public static readonly HISTORY_TAB: String = "HISTORY_TAB";

    public static readonly INTEGRATION_TAB: String = "INTEGRATION_TAB";

    public static readonly INTEGRATION: String = "INTEGRATION";

    public static readonly WORKFLOWABLE_INTEGRATIONFLAG_DISPLAY_NAME: String = "WORKFLOWABLE_INTEGRATIONFLAG_DISPLAY_NAME";

    public static readonly INTEGRATIONFLAG_SUCCESS: String = "INTEGRATIONFLAG_SUCCESS";

    public static readonly INTEGRATIONFLAG_WARNING: String = "INTEGRATIONFLAG_WARNING";

    public static readonly INTEGRATIONFLAG_FAILED: String = "INTEGRATIONFLAG_FAILED";

    public static readonly WORKFLOWABLE_INTEGRATIONINFORMATIONS_DISPLAY_NAME: String = "WORKFLOWABLE_INTEGRATIONINFORMATIONS_DISPLAY_NAME";

    public static readonly AN_ILIO_WILL_BE_CREATED_AND_THEN_RUN: String = "AN_ILIO_WILL_BE_CREATED_AND_THEN_RUN";

    public static readonly RUN_THIS_ACTION_ONLY_IF_CONDITIONS_ARE_SATISFIED: String = "RUN_THIS_ACTION_ONLY_IF_CONDITIONS_ARE_SATISFIED";

    public static readonly ONE_TIME: String = "ONE_TIME";

    public static readonly REOCCURRING: String = "REOCCURRING";

    public static readonly JAVASCRIPT_FUNCTON: String = "JAVASCRIPT_FUNCTON";

    public static readonly INTEGRATION_OPERATION: String = "INTEGRATION_OPERATION";

    public static readonly RUN_TYPE: String = "RUN_TYPE";

    public static readonly EDIT_INTEGRATION_OPERATION: String = "EDIT_INTEGRATION_OPERATION";

    public static readonly NEW_INTEGRATION_OPERATION: String = "NEW_INTEGRATION_OPERATION";

    public static readonly ACTION_RULE_TRIGGERING_CONDITIONS_STEP_DESCRIPTION: String = "ACTION_RULE_TRIGGERING_CONDITIONS_STEP_DESCRIPTION";

    public static readonly SKIP_THIS_ITEM_SET_CONDITION_IF_SET_IS_EMPTY: String = "SKIP_THIS_ITEM_SET_CONDITION_IF_SET_IS_EMPTY";

    public static readonly SET_PROPERTY_MULTI_LOOKUP_OR_TABLE: String = "SET_PROPERTY_MULTI_LOOKUP_OR_TABLE";

    public static readonly ITEM_CONDITIONS: String = "ITEM_CONDITIONS";

    public static readonly SPECIFY_ACTIONS_TO_BE_PERFORMED_FOR_EACH_ITEM_OF_SET: String = "SPECIFY_ACTIONS_TO_BE_PERFORMED_FOR_EACH_ITEM_OF_SET";

    public static readonly ITEM_SET_ACTION_NAME: String = "ITEM_SET_ACTION_NAME";

    public static readonly STOP_RULES_ARE_TRIGGERED_AFTER_ACTION_RULES: String = "STOP_RULES_ARE_TRIGGERED_AFTER_ACTION_RULES";

    public static readonly ACTIONS_DEFINED_HERE_WONT_BE_PERFORMED_IF_SKIP_THIS_STEP_TO_DO_DEFINE_RULE: String = "ACTIONS_DEFINED_HERE_WONT_BE_PERFORMED_IF_SKIP_THIS_STEP_TO_DO_DEFINE_RULE";

    public static readonly IMPORT_ENVIRONMENT_APPLICATION_PREFERENCES: String = "IMPORT_ENVIRONMENT_APPLICATION_PREFERENCES";

    public static readonly EXPORT_ENVIRONMENT_APPLICATION_PREFERENCES: String = "EXPORT_ENVIRONMENT_APPLICATION_PREFERENCES";

    public static readonly BY: String = "BY";

    public static readonly SAVE_AS_NEW: String = "SAVE_AS_NEW";

    public static readonly SAVE_THIS_ITEM_AS_NEW: String = "SAVE_THIS_ITEM_AS_NEW";

    public static readonly ENVIRONMENT_APPLICATION_PREFERENCE: String = "ENVIRONMENT_APPLICATION_PREFERENCE";

    public static readonly BY_MIDDLE_SENTENCE: String = "BY_MIDDLE_SENTENCE";

    public static readonly USE_THE_FOLLOWING_INSTRUCTION_LINE_INSTEAD_OF_THE_DEFAULT_SETTING: String = "USE_THE_FOLLOWING_INSTRUCTION_LINE_INSTEAD_OF_THE_DEFAULT_SETTING";

    public static readonly GRAPHICAL_INDICATOR_NAME: String = "GRAPHICAL_INDICATOR_NAME";

    public static readonly DISPLAY_LANGUAGES: String = "DISPLAY_LANGUAGES";

    public static readonly SELECT_LANGUAGES_TO_DISPLAY_THE_SITE: String = "SELECT_LANGUAGES_TO_DISPLAY_THE_SITE";

    public static readonly SET_AS_DEFAULT: String = "SET_AS_DEFAULT";

    public static readonly TRANSLATE_SOLUTION: String = "TRANSLATE_SOLUTION";

    public static readonly MSP_TRANSLATION_ADVANCED: String = "MSP_TRANSLATION_ADVANCED";

    public static readonly TRANSLATE_SOLUTION_OBJECTS_TO_SELECTED_LANGUAGES: String = "TRANSLATE_SOLUTION_OBJECTS_TO_SELECTED_LANGUAGES";

    public static readonly EXPORT_SOLUTION_OBJECT_NAMES: String = "EXPORT_SOLUTION_OBJECT_NAMES";

    public static readonly EXPORT_ONLY_NAMES_MISSING_TRANSLATION: String = "EXPORT_ONLY_NAMES_MISSING_TRANSLATION";

    public static readonly FILL_OBJECT_NAME_TRANSLATIONS: String = "FILL_OBJECT_NAME_TRANSLATIONS";

    public static readonly IMPORT_SOLUTION_OBJECTS_NAMES: String = "IMPORT_SOLUTION_OBJECTS_NAMES";

    public static readonly TRANSLATE_MSP_TO_ADDITIONAL_LANGUAGES: String = "TRANSLATE_MSP_TO_ADDITIONAL_LANGUAGES";

    public static readonly EXPORT_MSP_LANGUAGE_ENTRIES: String = "EXPORT_MSP_LANGUAGE_ENTRIES";

    public static readonly FILL_LANGUAGE_ENTRY_TRANSLATIONS: String = "FILL_LANGUAGE_ENTRY_TRANSLATIONS";

    public static readonly IMPORT_MSP_LANGUAGE_ENTRIES: String = "IMPORT_MSP_LANGUAGE_ENTRIES";

    public static readonly MSP_TRANSLATION: String = "MSP_TRANSLATION";

    public static readonly TRANSLATE_THE_SOLUTION_TO_ADDITIONAL_LANGUAGES: String = "TRANSLATE_THE_SOLUTION_TO_ADDITIONAL_LANGUAGES";

    public static readonly EXPORT_ONLY_ENTRIES_MISSING_TRANSLATION: String = "EXPORT_ONLY_ENTRIES_MISSING_TRANSLATION";

    public static readonly EXPORTING_SOLUTION_OBJECT_TRANSLATIONS: String = "EXPORTING_SOLUTION_OBJECT_TRANSLATIONS";

    public static readonly EXPORT_MSP_TRANSLATIONS: String = "EXPORT_MSP_TRANSLATIONS";

    public static readonly IMPORTING_SOLUTION_OBJECT_TRANSLATIONS: String = "IMPORTING_SOLUTION_OBJECT_TRANSLATIONS";

    public static readonly IMPORTING_MSP_TRANSLATIONS: String = "IMPORTING_MSP_TRANSLATIONS";

    public static readonly DONE_PLEASE_RELOAD_SETTINGS_IN_ORDER_FOR_CHANGES: String = "DONE_PLEASE_RELOAD_SETTINGS_IN_ORDER_FOR_CHANGES";

    public static readonly DONE: String = "DONE";

    public static readonly SAVE_TRANSLATION_WORKBOOK_UPPERCASE: String = "SAVE_TRANSLATION_WORKBOOK_UPPERCASE";

    public static readonly SAVE_TRANSLATION_WORKBOOK: String = "SAVE_TRANSLATION_WORKBOOK";

    public static readonly SERVER_HEALTH: String = "SERVER_HEALTH";

    public static readonly LONG_RUNNING_OPERATIONS: String = "LONG_RUNNING_OPERATIONS";

    public static readonly TO_SET_OPERATION_DURATION_THRESHOLDS_CLICK_APPLICATION_PREFERENCES: String = "TO_SET_OPERATION_DURATION_THRESHOLDS_CLICK_APPLICATION_PREFERENCES";

    public static readonly TIME: String = "TIME";

    public static readonly REFRESH: String = "REFRESH";

    public static readonly OPERATION: String = "OPERATION";

    public static readonly DURATION_MS: String = "DURATION_MS";

    public static readonly CONTEXT: String = "CONTEXT";

    public static readonly CLIENT_IP: String = "CLIENT_IP";

    public static readonly MSP_USER_NAME: String = "MSP_USER_NAME";

    public static readonly WORKSHEET_USER: String = "WORKSHEET_USER";

    public static readonly MY_WORK_POLICY_ASSIGNMENT: String = "MY_WORK_POLICY_ASSIGNMENT";

    public static readonly MY_WORK_POLICY_ASSIGNMENT_TEXT: String = "MY_WORK_POLICY_ASSIGNMENT_TEXT";

    public static readonly MY_WORK_POLICY_ASSIGNMENT_ORDER: String = "MY_WORK_POLICY_ASSIGNMENT_ORDER";

    public static readonly MY_WORK_POLICIES_ASSIGNMENT_ORDER_TEXT: String = "MY_WORK_POLICIES_ASSIGNMENT_ORDER_TEXT";

    public static readonly THE_COMPARISON_WILL_BE_DONE_USING_BOTH_DATE_AND_TIME_COMPONENTS: String = "THE_COMPARISON_WILL_BE_DONE_USING_BOTH_DATE_AND_TIME_COMPONENTS";

    public static readonly ENTITY_AND_FORMS_STEP_LABEL: String = "ENTITY_AND_FORMS_STEP_LABEL";

    public static readonly REPORTING_MODE_STEP_LABEL: String = "REPORTING_MODE_STEP_LABEL";

    public static readonly REPORTING_MODE: String = "REPORTING_MODE";

    public static readonly PROGRESS_COLUMN: String = "PROGRESS_COLUMN";

    public static readonly PROGRESS_COLUMN_HELP: String = "PROGRESS_COLUMN_HELP";

    public static readonly ACTUAL_WORK_AND_PROGRESS: String = "ACTUAL_WORK_AND_PROGRESS";

    public static readonly ACTUAL_WORK_AGAINST_ESTIMATED_WORK: String = "ACTUAL_WORK_AGAINST_ESTIMATED_WORK";

    public static readonly ACTUAL_WORK_UNLIMITED: String = "ACTUAL_WORK_UNLIMITED";

    public static readonly PERCENT_COMPLETE_ONLY: String = "PERCENT_COMPLETE_ONLY";

    public static readonly DAY_COLUMNS: String = "DAY_COLUMNS";

    public static readonly PERCENT_COMPLETE: String = "PERCENT_COMPLETE";

    public static readonly REMAINING_WORK: String = "REMAINING_WORK";

    public static readonly WORK: String = "WORK";

    public static readonly DAY_COLUMNS_USER_REPORT: String = "DAY_COLUMNS_USER_REPORT";

    public static readonly PERCENT_COMPLETE_CALCULATED_AS: String = "PERCENT_COMPLETE_CALCULATED_AS";

    public static readonly REMAINING_WORK_USER_REPORT: String = "REMAINING_WORK_USER_REPORT";

    public static readonly WORK_USER_REPORT: String = "WORK_USER_REPORT";

    public static readonly PERCENT_COMPLETE_USER_REPORT: String = "PERCENT_COMPLETE_USER_REPORT";

    public static readonly REMAINING_WORK_CALCULATED_AS: String = "REMAINING_WORK_CALCULATED_AS";

    public static readonly ACTUAL_WORK_AGAINST_ESTIMATED_WORK_HELP: String = "ACTUAL_WORK_AGAINST_ESTIMATED_WORK_HELP";

    public static readonly ACTUAL_WORK_UNLIMITED_HELP: String = "ACTUAL_WORK_UNLIMITED_HELP";

    public static readonly NOT_APPLICABLE: String = "NOT_APPLICABLE";

    public static readonly WORKSHEET_COLUMNS_BEHAVIOUR: String = "WORKSHEET_COLUMNS_BEHAVIOUR";

    public static readonly TASK_FORMS: String = "TASK_FORMS";

    public static readonly REPORTING: String = "REPORTING";

    public static readonly SESSION_END_MESSAGE_TEXT: String = "SESSION_END_MESSAGE_TEXT";

    public static readonly SESSION_END_MESSAGE_SUB_TEXT: String = "SESSION_END_MESSAGE_SUB_TEXT";

    public static readonly SESSION_END: String = "SESSION_END";

    public static readonly KEEP_ME_SIGNED_IN: String = "KEEP_ME_SIGNED_IN";

    public static readonly CLOSE_SESSION: String = "CLOSE_SESSION";

    public static readonly SESSION_ENDED_MESSAGE: String = "SESSION_ENDED_MESSAGE";

    public static readonly CREATE_APPLICATION_PREFERENCE_HEADER: String = "CREATE_APPLICATION_PREFERENCE_HEADER";

    public static readonly SYNC_WORK_PROPERTY_FROM_MY_WORK: String = "SYNC_WORK_PROPERTY_FROM_MY_WORK";

    public static readonly TYPE_A_DATE: String = "TYPE_A_DATE";

    public static readonly EXCLUDE_PROPERTY_FROM_REPORT_GENERATOR: String = "EXCLUDE_PROPERTY_FROM_REPORT_GENERATOR";

    public static readonly EXCLUDE_PROPERTY_FROM_EVENTS_GENERATOR: String = "EXCLUDE_PROPERTY_FROM_EVENTS_GENERATOR";

    public static readonly ENTITY_CATEGORY_FOR_NEW_ROW: String = "ENTITY_CATEGORY_FOR_NEW_ROW";

    public static readonly ENTITY_CATEGORY_FOR_NEW_ROW_NOTE: String = "ENTITY_CATEGORY_FOR_NEW_ROW_NOTE";

    public static readonly ENTITY_CLASS_NAME: String = "ENTITY_CLASS_NAME";

    public static readonly OVERRIDE_WORKSHEET_COLUMNS: String = "OVERRIDE_WORKSHEET_COLUMNS";

    public static readonly DISPLAYED_COLUMNS_MAX_3: String = "DISPLAYED_COLUMNS_MAX_3";

    public static readonly AVAILABLE_COLUMNS: String = "AVAILABLE_COLUMNS";

    public static readonly ORCHESTRATORS: String = "ORCHESTRATORS";

    public static readonly ORCHESTRATORS_COMPONENTS_FOR_RUNNING_INTEGRATION: String = "ORCHESTRATORS_COMPONENTS_FOR_RUNNING_INTEGRATION";

    public static readonly ADD_ILIOS_TO_RUN_ON_THIS_ORC: String = "ADD_ILIOS_TO_RUN_ON_THIS_ORC";

    public static readonly ADD_OLIOS_TO_RUN_ON_THIS_ORC: String = "ADD_OLIOS_TO_RUN_ON_THIS_ORC";

    public static readonly AVAILABLE_ILIOS: String = "AVAILABLE_ILIOS";

    public static readonly SELECTED_ILIOS: String = "SELECTED_ILIOS";

    public static readonly AVAILABLE_OLIOS: String = "AVAILABLE_OLIOS";

    public static readonly SELECTED_OLIOS: String = "SELECTED_OLIOS";

    public static readonly ILIOS_NOT_ADDED_TO_ANY_WILL_RUN_ON_FIRST: String = "ILIOS_NOT_ADDED_TO_ANY_WILL_RUN_ON_FIRST";

    public static readonly OLIOS_NOT_ADDED_TO_ANY_WILL_RUN_ON_FIRST: String = "OLIOS_NOT_ADDED_TO_ANY_WILL_RUN_ON_FIRST";

    public static readonly ADD_THIS_INIO_TO_AN_ORC: String = "ADD_THIS_INIO_TO_AN_ORC";

    public static readonly TO_RUN_THIS_OPERATION_CLICK_SETTINGS: String = "TO_RUN_THIS_OPERATION_CLICK_SETTINGS";

    public static readonly ORCHESTRATOR: String = "ORCHESTRATOR";

    public static readonly ADD_ORCHESTRATOR: String = "ADD_ORCHESTRATOR";

    public static readonly ITEM_INTEGRATION: String = "ITEM_INTEGRATION";

    public static readonly GENERAL_INTEGRATION: String = "GENERAL_INTEGRATION";

    public static readonly ITEM_LEVEL_INTEGRATION_OPERATION: String = "ITEM_LEVEL_INTEGRATION_OPERATION";

    public static readonly ORCHESTRATOR_LEVEL_INTEGRATION_OPERATION: String = "ORCHESTRATOR_LEVEL_INTEGRATION_OPERATION";

    public static readonly CONNECTION: String = "CONNECTION";

    public static readonly ORCHESTRATOR_2_MSP_PORT: String = "ORCHESTRATOR_2_MSP_PORT";

    public static readonly MSP_2_ORCHESTRATOR_PORT: String = "MSP_2_ORCHESTRATOR_PORT";

    public static readonly ORCHESTRATOR_HOST_NAME: String = "ORCHESTRATOR_HOST_NAME";

    public static readonly INSERT_ONLY_NUMBERS: String = "INSERT_ONLY_NUMBERS";

    public static readonly EXPAND: String = "EXPAND";

    public static readonly DEFAULT_WIDTH: String = "DEFAULT_WIDTH";

    public static readonly OVERRIDE_DEFAULT_WIDTH: String = "OVERRIDE_DEFAULT_WIDTH";

    public static readonly DO_YOU_WANT_TO_DELETE_THE_ORCHESTRATOR: String = "DO_YOU_WANT_TO_DELETE_THE_ORCHESTRATOR";

    public static readonly DELETE_ORCHESTRATOR: String = "DELETE_ORCHESTRATOR";

    public static readonly PROVIDERS: String = "PROVIDERS";

    public static readonly NEW_PROVIDER: String = "NEW_PROVIDER";

    public static readonly HOST_NAME: String = "HOST_NAME";

    public static readonly PORT: String = "PORT";

    public static readonly TIMEOUT: String = "TIMEOUT";

    public static readonly MSP_CONNECTION_TIMEOUT: String = "MSP_CONNECTION_TIMEOUT";

    public static readonly LOOKUP_PROPERTY: String = "LOOKUP_PROPERTY";

    public static readonly TABULAR_REPORTS_PROPERTY_CATEGORY: String = "TABULAR_REPORTS_PROPERTY_CATEGORY";

    public static readonly REPORT_TARGET: String = "REPORT_TARGET";//Nadav Lev

    public static readonly REPORT_TARGET_FRAME_NAME: String = "REPORT_TARGET_FRAME_NAME";// Nadav Lev

    public static readonly AUTO_ADD_TASKS_FROM_PREVIOUS_WEEK: String = "AUTO_ADD_TASKS_FROM_PREVIOUS_WEEK";

    public static readonly STEP_THREE_RELOAD_SETTINGS: String = "STEP_THREE_RELOAD_SETTINGS";

    public static readonly RELOAD_SETTINGS: String = "RELOAD_SETTINGS";

    public static readonly WORKSAPCE_ID: String = "WORKSAPCE_ID";

    public static readonly LICENSE_ROLE: String = "LICENSE_ROLE";

    public static readonly NOTE_THE_FIRST_BUTTON_WILL_ALWAYS_BE_DISPLAYED_IN_FULL_SIZE: String = "NOTE_THE_FIRST_BUTTON_WILL_ALWAYS_BE_DISPLAYED_IN_FULL_SIZE";

    private static readonly NONE_LICENSE_ROLE: String = "NONE_LICENSE_ROLE";

    private static readonly SOLUTION_DESIGNER_LICENSE_ROLE: String = "SOLUTION_DESIGNER_LICENSE_ROLE";

    private static readonly ADMINISTRATOR_LICENSE_ROLE: String = "ADMINISTRATOR_LICENSE_ROLE";

    private static readonly PROFESSIONAL_LICENSE_ROLE: String = "PROFESSIONAL_LICENSE_ROLE";

    private static readonly STANDARD_LICENSE_ROLE: String = "STANDARD_LICENSE_ROLE";

    private static readonly VIEWER_LICENSE_ROLE: String = "VIEWER_LICENSE_ROLE";

    public static readonly HELIX_ROLE: String = "HELIX_ROLE";

    public static readonly PERSISTENCEBASEDTO_INTEGRATION_IDENTIFIER_DISPLAY_NAME: String = "PERSISTENCEBASEDTO_INTEGRATION_IDENTIFIER_DISPLAY_NAME";

    public static readonly ENABLE_FOR_EXECUTION_CENTER: String = "ENABLE_FOR_EXECUTION_CENTER";
    public static readonly MILESTONES_TABLE_DESCRIPTION_PROPERTY: String = "MILESTONES_TABLE_DESCRIPTION_PROPERTY";
    public static readonly MILESTONES_TABLE_STATUS_PROPERTY: String = "MILESTONES_TABLE_STATUS_PROPERTY";
    public static readonly MILESTONES_TABLE_STATUS_DELIVERABLE_STATUS_PROPERTY: String = "MILESTONES_TABLE_STATUS_DELIVERABLE_STATUS_PROPERTY";
    public static readonly MILESTONES_TABLE_DUEDATE_PROPERTY: String = "MILESTONES_TABLE_DUEDATE_PROPERTY";
    public static readonly MILESTONES_TABLE_PROPERTY: String = "MILESTONES_TABLE_PROPERTY";
    public static readonly EXECUTION_CENTER_INTEGRATION: String = "EXECUTION_CENTER_INTEGRATION";
    public static readonly GOALS_PROPERTY: String = "GOALS_PROPERTY";
    public static readonly MILESTONES_TABLE_OWNER_PROPERTY: String = "MILESTONES_TABLE_OWNER_PROPERTY";
    public static readonly ACTIVITY_OWNER_PROPERTY: String = "ACTIVITY_OWNER_PROPERTY";

    public static readonly SIMPLE_MODE: String = "SIMPLE_MODE";

    public static readonly CSS_CLASS: String = "CSS_CLASS";

    public static readonly SUFFIX: String = "SUFFIX";

    public static readonly SUFFIX_TOOLIP: String = "SUFFIX_TOOLIP";

    public static readonly HIDE_LIST_BUTTON: String = "HIDE_LIST_BUTTON";

    public static readonly PRODUCTS: String = "PRODUCTS";

    public static readonly MANAGE_PRODUCTS: String = "MANAGE_PRODUCTS";

    public static readonly PRODUCT: String = "PRODUCT";

    public static readonly CREATE_NEW_PRODUCT: String = "CREATE_NEW_PRODUCT";

    public static readonly PRODUCT_SN: String = "PRODUCT_SN";

    public static readonly ACTION_ITEMS: String = "ACTION_ITEMS";

    public static readonly ACTION_ITEMS_CRUD_LEVEL_OF_CONTROL: String = "ACTION_ITEMS_CRUD_LEVEL_OF_CONTROL";

    public static readonly PRESENT_NEW_ACTION_ITEM_SECTION: String = "PRESENT_NEW_ACTION_ITEM_SECTION";

    public static readonly ENABLE_MARK_COMPLETE_ACTION_ITEM: String = "ENABLE_MARK_COMPLETE_ACTION_ITEM";

    public static readonly ENABLE_DELETE_ACTION_ITEM: String = "ENABLE_DELETE_ACTION_ITEM";

    public static readonly ATTACHMENTS_ITEMS: String = "ATTACHMENTS_ITEMS";

    public static readonly ATTACHMENTS_ITEMS_CRUD_LEVEL_OF_CONTROL: String = "ATTACHMENTS_ITEMS_CRUD_LEVEL_OF_CONTROL";

    public static readonly PRESENT_DROP_FILES_TO_ATTACH: String = "PRESENT_DROP_FILES_TO_ATTACH";

    public static readonly PRESENT_EDIT_BUTTON_WITH_EDIT_TITLE: String = "PRESENT_EDIT_BUTTON_WITH_EDIT_TITLE";

    public static readonly ENABLE_DELETE_ATTACHMENT_BUTTON: String = "ENABLE_DELETE_ATTACHMENT_BUTTON";

    public static readonly PARTICIPANTS: String = "PARTICIPANTS";

    public static readonly FILTER_PARTICIPANTS: String = "FILTER_PARTICIPANTS";


    /****************************************************************/

    private _currentLocale: String = 'en';


    private _languages: Dictionary = {} as any;


    private _languagesMap: Dictionary = {} as any



    /**
     *
     */
    constructor() {
        
        this.languagesMap = AppCacheModule.FlexSettings.translations as Dictionary<any>
    }

    get languages(): [] {
        return this._languages;
    }


    set languages(value: []) {
        this._languages = value;
    }


    get languagesMap(): Dictionary {
        return this._languagesMap;
    }


    set languagesMap(value: Dictionary) {
        this._languagesMap = value;
    }


    get currentLocale(): String {
        return this._currentLocale;
    }


    set currentLocale(value: String) {
        this._currentLocale = value;
        // dispatchEvent(new Event("localeChanged"));
    }

    @Emit("localeChanged")
    public getLocalizedString(key: String): String {
        var value: String = (this.languagesMap[this.currentLocale] as Dictionary)[key] as String;
        //trace("[LanguagesPresentationModel][getLocalizedString] key=" + key + ", value = " + value);
        return value;
    }


    public getLocalizedStringOfPrimaryLanguage(key: String): String {
        var value: String = (this.languagesMap[LanguagesPresentationModel.PRIMARY_LANGUAGE_INITIALS] as Dictionary)[key] as String;
        return value;
    }


    public getTranslation(locale: String, key: String): String {
        var value: String = (this.languagesMap[locale] as Dictionary)[key] as String;
        return value;
    }


    public changeLocale(): void {
        if (this.languagesMap.getKeys().length == 2) {
            if (this.currentLocale == this.languagesMap.getKeys()[0]) {
                this.currentLocale = this.languagesMap.getKeys()[1];
            }
            else {
                this.currentLocale = this.languagesMap.getKeys()[0];
            }
        }
    }
}