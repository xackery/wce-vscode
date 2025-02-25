
export interface DefinitionInfo {
    name: string;
    hasTag?: boolean;
    description: string;
    properties: PropertyInfo[]; // Map SOMEDEF to its properties and args
}

export interface PropertyInfo {
    name: string;
    isArrayNum?: boolean;
    args: ArgInfo[];
    description: string;
}

export interface ArgInfo {
    name: string;
    description: string;
    format: string;
}
