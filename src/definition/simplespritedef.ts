// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const simplespritedef: data.DefinitionInfo = {
    Name: "SIMPLESPRITEDEF",
    HasTag: true,
    Note: "Wld Simple Sprite",
    Description: "",
    Properties: [
        {
            Name: "TAGINDEX",
            Note: "Index of tag",
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
            Note: "Variation of tag",
            Description: "",
            Args: [
                {
                    Name: "variation",
                    Note: "Variation of tag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SKIPFRAMES?",
            Note: "Should frames be skipped?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "0: false, 1: true",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "ANIMATED?",
            Note: "Is animated?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "0: false, 1: true",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SLEEP?",
            Note: "Is there a sleep duration (in milliseconds)",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "NULL for non-value",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "CURRENTFRAME?",
            Note: "Current frame set?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "NULL for non-value",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "NUMFRAMES",
            Note: "Number of frames in simple sprite",
            Description: "",
            Args: [
                {
                    Name: "count",
                    Note: "Number of frames",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "FRAME",
                    Note: "Frame tag",
                    Description: "",
                    Args: [
                        {
                            Name: "tag",
                            Note: "Frame tag",
                            Description: "",
                            Format: "%s",
                            Example: ""
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "NUMFILES",
                    Note: "Number of files",
                    Description: "",
                    Args: [
                        {
                            Name: "count",
                            Note: "Count of files",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        }
                    ],
                    Properties: [
                        {
                            Name: "FILE",
                            Note: "Texture file name",
                            Description: "",
                            Args: [
                                {
                                    Name: "tag",
                                    Note: "tag of file",
                                    Description: "",
                                    Format: "%s",
                                    Example: ""
                                }
                            ],
                            Properties: null
                        }
                    ]
                }
            ]
        }
    ]
}
