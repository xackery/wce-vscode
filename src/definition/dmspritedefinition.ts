// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const dmspritedefinition: data.DefinitionInfo = {
    Name: "DMSPRITEDEFINITION",
    HasTag: true,
    Note: "Wld DM sprite definition",
    Description: "",
    Properties: [
        {
            Name: "TAGINDEX",
            Note: "The index of the tag",
            Description: "",
            Args: [
                {
                    Name: "index",
                    Note: "The index of the tag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "FRAGMENT1",
            Note: "Fragment 1",
            Description: "",
            Args: [
                {
                    Name: "index",
                    Note: "fragment index",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "MATERIALPALETTE",
            Note: "Material palette tag",
            Description: "",
            Args: [
                {
                    Name: "tag",
                    Note: "Tag",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "FRAGMENT3",
            Note: "Fragment 3",
            Description: "",
            Args: [
                {
                    Name: "fragment 3",
                    Note: "fragment 3",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "CENTER?",
            Note: "center?",
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
                }
            ],
            Properties: null
        },
        {
            Name: "PARAMS1?",
            Note: "params1",
            Description: "",
            Args: [
                {
                    Name: "params1",
                    Note: "params1",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "params1",
                    Note: "params1",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "params1",
                    Note: "params1",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "NUMVERTICES",
            Note: "The number of vertices in the sprite",
            Description: "",
            Args: [
                {
                    Name: "num vertices",
                    Note: "The number of vertices",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "XYZ",
                    Note: "The coordinates of a vertex",
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
                        }
                    ],
                    Properties: null
                }
            ]
        },
        {
            Name: "NUMTEXCOORDS",
            Note: "The number of texture coords",
            Description: "",
            Args: [
                {
                    Name: "num tex coords",
                    Note: "The number of tex coords",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "UV",
                    Note: "The coordinates of a texture normal",
                    Description: "",
                    Args: [
                        {
                            Name: "u",
                            Note: "The u coordinate",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        },
                        {
                            Name: "v",
                            Note: "The v coordinate",
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
            Name: "NUMNORMALS",
            Note: "The number of vertex normals in the sprite",
            Description: "",
            Args: [
                {
                    Name: "num vertex normals",
                    Note: "The number of vertex normals",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "XYZ",
                    Note: "The coordinates of a texture normal",
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
                        }
                    ],
                    Properties: null
                }
            ]
        },
        {
            Name: "NUMCOLORS",
            Note: "The number of vertex colors in the sprite",
            Description: "",
            Args: [
                {
                    Name: "num vertex colors",
                    Note: "The number of vertex colors",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "RGBA",
                    Note: "The coordinates of a vertex",
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
                }
            ]
        },
        {
            Name: "NUMFACES",
            Note: "The number of face2s in the sprite",
            Description: "",
            Args: [
                {
                    Name: "num face2s",
                    Note: "The number of face2s",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "DMFACE",
                    Note: "DM Face 2 Entries",
                    Description: "",
                    Args: null,
                    Properties: null
                },
                {
                    Name: "FLAG",
                    Note: "face flags",
                    Description: "",
                    Args: [
                        {
                            Name: "flag",
                            Note: "face flags",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "DATA",
                    Note: "face data",
                    Description: "",
                    Args: [
                        {
                            Name: "face data index 0",
                            Note: "Index 0 of face data",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "face data index 1",
                            Note: "Index 1 of face data",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "face data index 2",
                            Note: "Index 2 of face data",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "face data index 3",
                            Note: "Index 3 of face data",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "TRIANGLE",
                    Note: "Triangle indexes",
                    Description: "",
                    Args: [
                        {
                            Name: "vert index 0",
                            Note: "Index 0 of triangle",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "vert index 1",
                            Note: "Index 1 of triangle",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "vert index 2",
                            Note: "Index 2 of triangle",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        }
                    ],
                    Properties: null
                }
            ]
        },
        {
            Name: "NUMMESHOPS",
            Note: "The number of mesh operations in the sprite",
            Description: "",
            Args: [
                {
                    Name: "num meshops",
                    Note: "The number of mesh operations",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "MESHOP",
                    Note: "A mesh operation",
                    Description: "",
                    Args: [
                        {
                            Name: "arg 0",
                            Note: "arg 0",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "arg 1",
                            Note: "arg 1",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "arg 2",
                            Note: "arg 2",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        },
                        {
                            Name: "arg 3",
                            Note: "arg 3",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "arg 4",
                            Note: "arg 4",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        }
                    ],
                    Properties: null
                }
            ]
        },
        {
            Name: "SKINASSIGNMENTGROUPS",
            Note: "The skin assignment groups",
            Description: "",
            Args: [
                {
                    Name: "group size",
                    Note: "The size of the group",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "group data",
                    Note: "The data of the group",
                    Description: "",
                    Format: "%d...",
                    Example: "2 3"
                }
            ],
            Properties: null
        },
        {
            Name: "DATA8",
            Note: "data 8 information",
            Description: "",
            Args: [
                {
                    Name: "8 info",
                    Note: "8 info",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "FACEMATERIALGROUPS",
            Note: "The face material groups",
            Description: "",
            Args: [
                {
                    Name: "group size",
                    Note: "The size of the group",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "group entry 1",
                    Note: "The data of the group",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "group entry 2",
                    Note: "The data of the group",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "VERTEXMATERIALGROUPS",
            Note: "The vertex material groups",
            Description: "",
            Args: [
                {
                    Name: "group size",
                    Note: "The size of the group",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "group entry 1",
                    Note: "The data of the group",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "group entry 2",
                    Note: "The data of the group",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "PARAMS2?",
            Note: "params2",
            Description: "",
            Args: [
                {
                    Name: "params2",
                    Note: "params2",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "params2",
                    Note: "params2",
                    Description: "",
                    Format: "%d",
                    Example: ""
                },
                {
                    Name: "params2",
                    Note: "params2",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        }
    ]
}
