import * as data from "./data";

export const trackinstance: data.DefinitionInfo = {
    name: "TRACKINSTANCE",
    hasTag: true,
    description: "A track instance.",
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
            name: "DEFINITION",
            description: "The definition of the track.",
            args: [
                {
                    name: "definition",
                    description: "The definition of the track.",
                    format: "%s",
                },
            ],
        },
        {
            name: "DEFINITIONINDEX",
            description: "The index of the definition.",
            args: [
                {
                    name: "definition index",
                    description: "The index of the definition.",
                    format: "%d",
                },
            ],
        },
        {
            name: "INTERPOLATE",
            description: "Should the track be interpolated?",
            args: [
                {
                    name: "interpolate",
                    description: "0: no, 1: yes.",
                    format: "%d",
                },
            ],
        },
        {
            name: "REVERSE",
            description: "Should the track be reversed?",
            args: [
                {
                    name: "reverse",
                    description: "0: no, 1: yes.",
                    format: "%d",
                },
            ],
        },
        {
            name: "SLEEP?",
            description: "The sleep time for the track.",
            args: [
                {
                    name: "sleep",
                    description: "The sleep time.",
                    format: "%d",
                },
            ],
        },
    ],
};

export default trackinstance;