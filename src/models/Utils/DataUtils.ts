import { BaseContent } from '../BaseContent';
import { LanguageTranslation } from '../LanguageTranslation';
import { LanguagesPresentationModel } from './LanguagesPresentationModel';

export class NumberFormatter{
    format(value: number): string {
        throw new Error('Method not implemented.');
    }
    //TODO:  needs own implementation.
    precision!:number
    useThousandsSeparator: boolean | undefined;
    rounding: any;
}
export class DataUtils {

    private static numberFormatter:NumberFormatter = new NumberFormatter();
    public static numberFormatterSimple:NumberFormatter = DataUtils.createSimpleNumberFormatter();

    public static ENTITY_CATEGORY_ID:string = "com.msp.dao.entities.EntityCategory";

    /**
     *
     */
    constructor(){
    }

    /**
     *
     * @return
     */
    private static createSimpleNumberFormatter():NumberFormatter {
      var f:NumberFormatter = new NumberFormatter();
      f.precision = 0;
      return f;
    }

    /**
     *
     * @param collection
     * @return
     */
    public static hasEmptyItem(collection:[]):boolean {
      for (let item of collection) {
        if (item == null)
          return true;
      }

      return false;
    }

  
    /**
     *
     * @param name
     * @return
     */
    public static validateDisplayName(name:string):boolean {
      var nameCopy:string = name;

      //not empty
      if (!nameCopy) {
        return false;
      }
      if (nameCopy.length == 0) {
        return false;
      }

      //contains only english letters and digits
      //if (nameCopy.replace(/\W|_/gg, "") != name) {
        if (nameCopy.replace(/\W|/, "") != name) {
        return false;
      }

      //starts with letter
      if (nameCopy.charAt(0) >= "0" && nameCopy.charAt(0) <= "9") {
        return false;
      }

      return true;
    }

    /**
     *
     * @param languages
     * @param currentLocale
     * @return
     */
    public static getDisplayNameFromLanguages(languages:LanguageTranslation[], currentLocale:string):string {
      var result='';

      for  (let lang of languages) {
        if (lang.language == currentLocale) {
          result = lang.displayName as string;
          break;
        }

      }
      return result;
    }

    /**
     *
     * @param languages
     * @param currentLocale
     * @return
     */
    public static getDescriptionFromLanguages(languages:LanguageTranslation[], currentLocale:string):string {
      var result='';

      for  (let lang of languages) {
        if (lang.language == currentLocale) {
          result = lang.description as string;
          break;
        }
      }
      return result;
    }

    /**
     *
     * @param input
     * @param currentLocale
     */
    public static setDisplayNameAndDescription(input:BaseContent, currentLocale:string):void {
      input.displayName = DataUtils.getDisplayNameFromLanguages(input.languageTranslations, currentLocale);
      input.description = DataUtils.getDescriptionFromLanguages(input.languageTranslations, currentLocale);
    }


    public static updateIBaseCreatableContentProperties(baseCreatableContent:IRecentlyEditedContent, loggedInUserFullName:String):void {

      if (baseCreatableContent.createdBy == null) {
        baseCreatableContent.createdBy = loggedInUserFullName;
      }

      if (baseCreatableContent.dateCreated == null) {
        baseCreatableContent.dateCreated = new Date();
      }

      baseCreatableContent.modifiedBy = loggedInUserFullName;
      baseCreatableContent.dateModified = new Date();

    }
    public static markModificationAndAddToRecentlyEdited(recentlyEditedContent:IRecentlyEditedContent):void {

      this. markModification(recentlyEditedContent);
      this.addItemToRecentlyEdited(recentlyEditedContent);

    }

    /**
     * set modification date and modified by
     * @param baseCreatableContent
     */
    protected static  markModification(baseCreatableContent:IBaseCreatableContent):void {

      DataUtils.updateIBaseCreatableContentProperties(baseCreatableContent, model.flexApplicationPreferences.loggedInUserFullName);

    }

    /**
     * add the data to recently edited mechanism
     * @param recentlyEditedContent
     */
    protected static addItemToRecentlyEdited(recentlyEditedContent:IRecentlyEditedContent):void {

      //TODO update model cache data.
      //model.recentlyEditedItems.put(recentlyEditedContent.uniqueId,         GeneralFactory.getItemInstance(recentlyEditedContent));

    }
  }
