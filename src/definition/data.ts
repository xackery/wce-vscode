
export interface DefinitionInfo {
    Name: string;
    HasTag?: boolean;
    Note: string;
    Description: string;
    Properties: PropertyInfo[];
}

export interface PropertyInfo {
    Name: string;
    Args: ArgInfo[] | null;
    Note: string;
    Description: string;
    Properties: PropertyInfo[] | null;
}

export interface ArgInfo {
    Name: string;
    Note: string;
    Description: string;
    Format: string;
    Example: string;
}
