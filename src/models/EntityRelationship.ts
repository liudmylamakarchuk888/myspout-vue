
export class EntityRelationship {
    children: EntityRelationship[]=[];
    entityId: string|undefined;
    relationshipPropertyName: string|undefined;
    parent: string|undefined;
}
