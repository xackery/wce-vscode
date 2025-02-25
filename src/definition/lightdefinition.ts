// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const lightdefinition: data.DefinitionInfo = {
    Name: "LIGHTDEFINITION",
    HasTag: true,
    Note: "Wld Light",
    Description: "",
    Properties: [
        {
            Name: "CURRENTFRAME?",
            Note: "Is there a current frame, and what's value",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "NULL if skipped",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "NUMFRAMES",
            Note: "Number of frames in light",
            Description: "",
            Args: [
                {
                    Name: "count",
                    Note: "Count of frames",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "LIGHTLEVELS",
                    Note: "value of light level frame",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "light level",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        }
                    ],
                    Properties: null
                }
            ]
        },
        {
            Name: "SLEEP?",
            Note: "Is a sleep value set?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "NULL if skipped, sleep value in ms",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SKIPFRAMES",
            Note: "Are frames skipped",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "number of frames to skip",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "NUMCOLORS",
            Note: "Number of colors",
            Description: "",
            Args: [
                {
                    Name: "count",
                    Note: "Count of colors",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "COLOR",
                    Note: "Color value",
                    Description: "",
                    Args: [
                        {
                            Name: "r",
                            Note: "R Value of color",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        },
                        {
                            Name: "g",
                            Note: "G Value of color",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        },
                        {
                            Name: "b",
                            Note: "B Value of color",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        }
                    ],
                    Properties: null
                }
            ]
        }
    ]
}
