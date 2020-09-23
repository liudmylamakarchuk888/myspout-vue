import { BaseCondition } from './BaseCondition';
export interface RoleGroup {
    authorizationNodeNames: string[];

    conditions: BaseCondition[] | any[];
    title: string;
    everyone: boolean;

}
