import { Icon } from './Icon';
import { KeyValue } from './KeyValue';

export interface Node {
    attributes: KeyValue[];
    children: Node[];
    icons: Icon[];
    name: string;
    parent: Node | null;
    tooltip: string;
    branch: boolean;
    id: null | string;
}

 