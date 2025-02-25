// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const actordef: data.DefinitionInfo = {
    Name: "ACTORDEF",
    HasTag: true,
    Note: "Wld actor definition",
    Description: "",
    Properties: [
        {
            Name: "CALLBACK",
            Note: "The callback function for the actor",
            Description: "",
            Args: [
                {
                    Name: "callback",
                    Note: "The callback function",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "BOUNDSREF",
            Note: "The bounds reference for the actor",
            Description: "",
            Args: [
                {
                    Name: "bounds ref",
                    Note: "The bounds reference",
                    Description: "",
                    Format: "%d",
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
            Name: "ACTIVEGEOMETRY?",
            Note: "The active geometry of the actor",
            Description: "",
            Args: [
                {
                    Name: "active geometry",
                    Note: "The active geometry",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "NUMACTIONS",
            Note: "The number of actions for the actor",
            Description: "",
            Args: [
                {
                    Name: "num actions",
                    Note: "The number of actions",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "ACTION",
                    Note: "Action entry",
                    Description: "",
                    Args: null,
                    Properties: null
                },
                {
                    Name: "UNK1",
                    Note: "Unknown entry 1",
                    Description: "",
                    Args: [
                        {
                            Name: "unk1",
                            Note: "value of unk1",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "NUMLEVELSOFDETAIL",
                    Note: "Number of levels of detail",
                    Description: "",
                    Args: [
                        {
                            Name: "lod value",
                            Note: "Number of levels of detail",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        }
                    ],
                    Properties: [
                        {
                            Name: "LEVELOFDETAIL",
                            Note: "Level of detail entry",
                            Description: "",
                            Args: null,
                            Properties: null
                        },
                        {
                            Name: "SPRITE",
                            Note: "Sprite entry tag",
                            Description: "",
                            Args: [
                                {
                                    Name: "tag",
                                    Note: "sprite tag",
                                    Description: "",
                                    Format: "%s",
                                    Example: ""
                                }
                            ],
                            Properties: null
                        },
                        {
                            Name: "SPRITEINDEX",
                            Note: "Sprite index",
                            Description: "",
                            Args: [
                                {
                                    Name: "index",
                                    Note: "Sprite index",
                                    Description: "",
                                    Format: "%d",
                                    Example: ""
                                }
                            ],
                            Properties: null
                        },
                        {
                            Name: "MINDISTANCE",
                            Note: "Minimum distance to render LOD",
                            Description: "",
                            Args: [
                                {
                                    Name: "",
                                    Note: "Minimum distance",
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
        },
        {
            Name: "USEMODELCOLLIDER",
            Note: "Ignored in RoF2. 0x80 flag. This gets ignored if ActorInst doesn't have it. Likely need to use hierarchysprite flag for things like boats",
            Description: "",
            Args: [
                {
                    Name: "use model collider",
                    Note: "0: no, 1: yes",
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
