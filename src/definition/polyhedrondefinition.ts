// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const polyhedrondefinition: data.DefinitionInfo = {
    Name: "POLYHEDRONDEFINITION",
    HasTag: true,
    Note: "Wld Polyhedron Definition",
    Description: "",
    Properties: [
        {
            Name: "BOUNDINGRADIUS",
            Note: "",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SCALEFACTOR",
            Note: "",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "NUMVERTICES",
            Note: "",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "XYZ",
                    Note: "",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        },
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        },
                        {
                            Name: "",
                            Note: "",
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
            Name: "NUMFACES",
            Note: "",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "VERTEXLIST",
                    Note: "",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%d...",
                            Example: "1 1"
                        }
                    ],
                    Properties: null
                }
            ]
        },
        {
            Name: "HEXONEFLAG",
            Note: "",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        }
    ]
}
