
import {Dictionary} from 'lodash'
export class HashMap<T> implements Dictionary<T> {

  
    constructor() {
    }

    [index: string]: T;

    public put({ key, value }: { key: String; value: any; }) {
        this[key] = value;
    }

  
    public remove(key: String) {
        this[key] = null;
    }

   
    public containsKey(key: String): Boolean {
        return this[key] != null;
    }

   
    public containsValue(value: any): Boolean {
        for (let prop: String in this) {

            if (this[prop] == value) {
                return true;
            }
        }
        return false;
    }

   
    public getValue(key: String):any {
        if (this[key] != null) {
            return this[key];
        }
    }

    
    public getValues(): any[] {
        let values: any[] = [];

        for (let prop: String in this) {

            if (this[prop] != null) {
                values.push(this[prop]);
            }
        }
        return values;
    }
 
    public getKeys(): [] {
        let keys: [] = [];
        for (let prop: String in this) {

            if (this[prop] != null) {
                keys.push(prop);
            }
        }
        return keys;
    }

    public getKey(value: any): String | undefined {
        for (let prop: String in this) {
            let obj: any = this[prop];
            if (obj != null && obj == value) {
                return prop;
            }
        }
        return undefined;
    }
 
    public size(): Number {
        let size: Number = 0;

        for (const prop: String in this) {

            if (this[prop] != null) {
                size++;
            }
        }
        return size;
    }
 
    public isEmpty(): Boolean {
        let size: Number = 0;

        for (let prop:String in this) {

            if (this[prop] != null) {
                size++;
            }
        }
        return size <= 0;
    }

 
    public clear() {
        for (let prop: String in this) {

            this[prop] = null;
        }
    }
}
