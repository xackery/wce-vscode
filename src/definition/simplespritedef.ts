import * as data from "./data";

export const simplespritedef: data.DefinitionInfo = {
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
    ],
};

export default simplespritedef;