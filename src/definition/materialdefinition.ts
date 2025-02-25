// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const materialdefinition: data.DefinitionInfo = {
    Name: "MATERIALDEFINITION",
    HasTag: true,
    Note: "Wld Material",
    Description: "",
    Properties: [
        {
            Name: "TAGINDEX",
            Note: "For tag variations, starts at 0, increases by 1",
            Description: "",
            Args: [
                {
                    Name: "index",
                    Note: "Index of tag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "VARIATION",
            Note: "For variations",
            Description: "",
            Args: [
                {
                    Name: "index",
                    Note: "Variation of tag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "RENDERMETHOD",
            Note: "Method for rendering",
            Description: "",
            Args: [
                {
                    Name: "method",
                    Note: "Rendering method",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "RGBPEN",
            Note: "RGB Colorizing",
            Description: "",
            Args: [
                {
                    Name: "r",
                    Note: "Red",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "g",
                    Note: "Green",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "b",
                    Note: "Blue",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "a",
                    Note: "Alpha",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "BRIGHTNESS",
            Note: "Color brightness",
            Description: "",
            Args: [
                {
                    Name: "amount",
                    Note: "Brightness amount",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SCALEDAMBIENT",
            Note: "Scaled ambient amount",
            Description: "",
            Args: [
                {
                    Name: "amount",
                    Note: "Scaled ambient amount",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SIMPLESPRITEINST",
            Note: "Simple sprite instance section",
            Description: "",
            Args: null,
            Properties: null
        },
        {
            Name: "TAG",
            Note: "Simple sprite instance tag",
            Description: "",
            Args: [
                {
                    Name: "tag",
                    Note: "Simple sprite instance tag",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "HEXFIFTYFLAG",
            Note: "Hex fifty flag",
            Description: "",
            Args: [
                {
                    Name: "flag",
                    Note: "Hex fifty flag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "PAIRS?",
            Note: "Pairs of flags?",
            Description: "",
            Args: [
                {
                    Name: "pairs",
                    Note: "Pairs 0",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "pairs",
                    Note: "Pairs 1",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "DOUBLESIDED",
            Note: "Is material double sided?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "0: False, 1: True",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        }
    ]
}
