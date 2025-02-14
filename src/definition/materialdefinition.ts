import * as data from "./data";

export const materialdefinition: data.DefinitionInfo = {
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
};

export default materialdefinition;