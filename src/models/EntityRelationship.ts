
export interface EntityRelationship {
    children: EntityRelationship[];
    entityId: string;
    relationshipPropertyName: string;
}
