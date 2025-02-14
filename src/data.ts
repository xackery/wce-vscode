export const definitions: DefinitionInfo[] = [
    {
        name: "WORLDDEF",
        hasTag: false,
        description: "A world definition. This is a collection of properties that defines a world.",
        properties: [
            {
                name: "NEWWORLD",
                description: "Is this a new wld file?",
                args: [
                    {
                        name: "version",
                        description: "0: old wld versioning, 1: new wld versioning.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "ZONE",
                description: "Should this wce be treated like a zone?",
                args: [
                    {
                        name: "is zone",
                        description: "0: no, 1: yes.",
                        format: "%s",
                    },
                ],
            },
            {
                name: "EQGVERSION?",
                description: "Used in eqg parsing for version rebuilding.",
                args: [
                    {
                        name: "version",
                        description: "The version of the eqg file.",
                        format: "%d",
                    },
                ],
            }

        ],
    },
];

export interface DefinitionInfo {
    name: string;
    hasTag: boolean;
    description: string;
    properties: PropertyInfo[]; // Map SOMEDEF to its properties and args
}

export interface PropertyInfo {
    name: string;
    args: ArgInfo[];
    description: string;
}

export interface ArgInfo {
    name: string;
    description: string;
    format: string;
}


