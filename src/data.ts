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
    {
        name: "SIMPLESPRITEDEF",
        hasTag: true,
        description: "A simple sprite definition.",
        properties: [
            {
                name: "TAGINDEX",
                description: "The index of the tag.",
                args: [
                    {
                        name: "index",
                        description: "The index of the tag.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "VARIATION",
                description: "The variation of the sprite.",
                args: [
                    {
                        name: "variation",
                        description: "The variation of the sprite.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "SKIPFRAMES?",
                description: "The number of frames to skip.",
                args: [
                    {
                        name: "frames",
                        description: "The number of frames to skip.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "ANIMATED?",
                description: "Is the sprite animated?",
                args: [
                    {
                        name: "is animated",
                        description: "0: no, 1: yes.",
                        format: "%s",
                    },
                ],
            },
            {
                name: "SLEEP?",
                description: "The number of frames to sleep.",
                args: [
                    {
                        name: "frames",
                        description: "The number of frames to sleep.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "CURRENTFRAME?",
                description: "The current frame of the sprite.",
                args: [
                    {
                        name: "frame",
                        description: "The current frame of the sprite.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "NUMFRAMES",
                description: "The number of frames in the sprite.",
                args: [
                    {
                        name: "frames",
                        description: "The number of frames in the sprite.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "FRAME",
                description: "A frame in the sprite.",
                args: [
                    {
                        name: "name",
                        description: "The name of the frame.",
                        format: "%s",
                    },
                ],
            },
            {
                name: "NUMFILES",
                description: "The number of files in the frame.",
                args: [
                    {
                        name: "files",
                        description: "The number of files in the frame.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "FILE",
                description: "A file in the frame.",
                args: [
                    {
                        name: "name",
                        description: "The name of the file.",
                        format: "%s",
                    },
                ],
            },
        ]
    },
    {
        name: "MATERIALDEFINITION",
        hasTag: true,
        description: "A material definition.",
        properties: [
            {
                name: "TAGINDEX",
                description: "The index of the tag.",
                args: [
                    {
                        name: "index",
                        description: "The index of the tag.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "VARIATION",
                description: "The variation of the material.",
                args: [
                    {
                        name: "variation",
                        description: "The variation of the material.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "RENDERMETHOD",
                description: "The render method of the material.",
                args: [
                    {
                        name: "method",
                        description: "The render method of the material.",
                        format: "%s",
                    },
                ],
            },
            {
                name: "RGBPEN",
                description: "The RGB pen of the material.",
                args: [
                    {
                        name: "red",
                        description: "The red value of the RGB pen.",
                        format: "%d",
                    },
                    {
                        name: "green",
                        description: "The green value of the RGB pen.",
                        format: "%d",
                    },
                    {
                        name: "blue",
                        description: "The blue value of the RGB pen.",
                        format: "%d",
                    },
                    {
                        name: "alpha",
                        description: "The alpha value of the RGB pen.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "BRIGHTNESS",
                description: "The brightness of the material.",
                args: [
                    {
                        name: "brightness",
                        description: "The brightness of the material.",
                        format: "%0.8f",
                    },
                ],
            },
            {
                name: "SCALEDAMBIENT",
                description: "The scaled ambient of the material.",
                args: [
                    {
                        name: "ambient",
                        description: "The scaled ambient of the material.",
                        format: "%0.8f",
                    },
                ],
            },
            {
                name: "SIMPLESPRITEINST",
                description: "A simple sprite instance.",
                args: [],
            },
            {
                name: "TAG",
                description: "A tag.",
                args: [
                    {
                        name: "tag",
                        description: "The tag.",
                        format: "%s",
                    },
                ],
            },
            {
                name: "HEXFIFTYFLAG",
                description: "The hex fifty flag.",
                args: [
                    {
                        name: "flag",
                        description: "The hex fifty flag.",
                        format: "%d",
                    },
                ],
            },
            {
                name: "PAIRS?",
                description: "The number of pairs.",
                args: [
                    {
                        name: "pairs",
                        description: "The number of pairs.",
                        format: "%d",
                    },
                    {
                        name: "value",
                        description: "The value of the pairs.",
                        format: "%0.8f",
                    },
                ],
            },
            {
                name: "DOUBLESIDED",
                description: "Is the material double sided?",
                args: [
                    {
                        name: "is double sided",
                        description: "0: no, 1: yes.",
                        format: "%s",
                    },
                ],
            },
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


