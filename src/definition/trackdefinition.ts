import * as data from "./data";

export const trackdefinition: data.DefinitionInfo = {
    name: "TRACKDEFINITION",
    hasTag: true,
    description: "A track definition.",
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
            name: "NUMFRAMES",
            description: "The number of frames in the track.",
            args: [
                {
                    name: "num frames",
                    description: "The number of frames.",
                    format: "%d",
                },
            ],
        },
        {
            name: "FRAME",
            description: "A frame in the track.",
            args: [
                {
                    name: "scale",
                    description: "The scale of the frame.",
                    format: "%d",
                },
                {
                    name: "x-loc",
                    description: "The x location of the frame.",
                    format: "%d",
                },
                {
                    name: "y-loc",
                    description: "The y location of the frame.",
                    format: "%d",
                },
                {
                    name: "z-loc",
                    description: "The z location of the frame.",
                    format: "%d",
                },
                {
                    name: "w-rot",
                    description: "The w rotation of the frame.",
                    format: "%d",
                },
                {
                    name: "x-rot",
                    description: "The x rotation of the frame.",
                    format: "%d",
                },
                {
                    name: "y-rot",
                    description: "The y rotation of the frame.",
                    format: "%d",
                },
                {
                    name: "z-rot",
                    description: "The z rotation of the frame.",
                    format: "%d",
                },
            ],
        },
        {
            name: "NUMLEGACYFRAMES",
            description: "The number of legacy frames in the track.",
            args: [
                {
                    name: "num legacy frames",
                    description: "The number of legacy frames.",
                    format: "%d",
                },
            ],
        },
    ],
};

export default trackdefinition;