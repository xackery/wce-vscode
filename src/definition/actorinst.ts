// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const actorinst: data.DefinitionInfo = {
    Name: "ACTORINST",
    HasTag: true,
    Note: "Wld actor instance",
    Description: "",
    Properties: [
        {
            Name: "DEFINITION",
            Note: "Reference to the actor's sprite tag",
            Description: "",
            Args: [
                {
                    Name: "tag",
                    Note: "Actor's sprite reference tag",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "CURRENTACTION?",
            Note: "The current action of the actor",
            Description: "",
            Args: [
                {
                    Name: "current action",
                    Note: "The current action",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "LOCATION?",
            Note: "The location of the actor",
            Description: "",
            Args: [
                {
                    Name: "x",
                    Note: "The x coordinate",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                },
                {
                    Name: "y",
                    Note: "The y coordinate",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                },
                {
                    Name: "z",
                    Note: "The z coordinate",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                },
                {
                    Name: "x-rot",
                    Note: "The x rotation",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "y-rot",
                    Note: "The y rotation",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "z-rot",
                    Note: "The z rotation",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "BOUNDINGRADIUS?",
            Note: "Radius around the actor instance for bounds",
            Description: "",
            Args: [
                {
                    Name: "radius",
                    Note: "Radius",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SCALEFACTOR?",
            Note: "Scale factor of the actor instance",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "Scale factor amount",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SOUND?",
            Note: "Has a sound tag attached?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "NULL if empty, sound tag",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "ACTIVE?",
            Note: "Is actor instance active?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "NULL if empty, 1 if set to true",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SPRITEVOLUMEONLY?",
            Note: "Uses sprite volume?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "NULL empty",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "DMRGBTRACK?",
            Note: "References an RGB Track?",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "NULL if not set, tag otherwise",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SPHERE",
            Note: "Reference to sphere tag",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "tag of sphere",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "SPHERERADIUS",
            Note: "Radius of sphere",
            Description: "",
            Args: [
                {
                    Name: "",
                    Note: "radius of sphere",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "USEBOUNDINGBOX",
            Note: "Use a bounding box",
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
            Name: "USERDATA",
            Note: "Unknown property 2",
            Description: "",
            Args: [
                {
                    Name: "unk2",
                    Note: "Unknown property 2",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        }
    ]
}
