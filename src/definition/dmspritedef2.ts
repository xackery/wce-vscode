// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const dmspritedef2: data.DefinitionInfo = {
    Name: "DMSPRITEDEF2",
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
            Name: "CENTEROFFSET",
            Note: "The center offset of the sprite",
            Description: "",
            Args: [
                {
                    Name: "x",
                    Note: "The x offset",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                },
                {
                    Name: "y",
                    Note: "The y offset",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                },
                {
                    Name: "z",
                    Note: "The z offset",
                    Description: "",
                    Format: "%0.8e",
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
                    Name: "VXYZ",
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
            Name: "NUMUVS",
            Note: "The number of UVs in the sprite",
            Description: "",
            Args: [
                {
                    Name: "num uvs",
                    Note: "The number of UVs",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "UV",
                    Note: "UV entry",
                    Description: "",
                    Args: [
                        {
                            Name: "u",
                            Note: "U on UV map",
                            Description: "",
                            Format: "%0.8e",
                            Example: ""
                        },
                        {
                            Name: "v",
                            Note: "V on UV map",
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
            Name: "NUMVERTEXNORMALS",
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
                    Name: "NXYZ",
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
            Name: "NUMVERTEXCOLORS",
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
            Name: "MATERIALPALETTE",
            Note: "The material palette used by the sprite",
            Description: "",
            Args: [
                {
                    Name: "palette name",
                    Note: "The name of the material palette",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "DMTRACKINST",
            Note: "The DM track instance",
            Description: "",
            Args: [
                {
                    Name: "track instance",
                    Note: "The track instance",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "POLYHEDRON",
            Note: "The polyhedron definition",
            Description: "",
            Args: null,
            Properties: null
        },
        {
            Name: "SPRITE",
            Note: "The definition reference",
            Description: "",
            Args: [
                {
                    Name: "definition",
                    Note: "The definition",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "NUMFACE2S",
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
                    Name: "DMFACE2",
                    Note: "DM Face 2 Entries",
                    Description: "",
                    Args: null,
                    Properties: null
                },
                {
                    Name: "PASSABLE",
                    Note: "Is face passable?",
                    Description: "",
                    Args: [
                        {
                            Name: "passable",
                            Note: "Is face passable?",
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
            Name: "FACEMATERIALGROUPS",
            Note: "The face material groups",
            Description: "",
            Args: [
                {
                    Name: "group entries",
                    Note: "The size of the group",
                    Description: "",
                    Format: "%d...",
                    Example: "1 1 1"
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
                    Format: "%d...",
                    Example: "1 1 1"
                }
            ],
            Properties: null
        },
        {
            Name: "BOUNDINGBOXMIN",
            Note: "The minimum bounding box coordinates",
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
            Name: "BOUNDINGBOXMAX",
            Note: "The maximum bounding box coordinates",
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
            Name: "BOUNDINGRADIUS",
            Note: "The bounding radius of the sprite",
            Description: "",
            Args: [
                {
                    Name: "radius",
                    Note: "The bounding radius",
                    Description: "",
                    Format: "%0.8e",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "FPSCALE",
            Note: "The FPS scale of the sprite",
            Description: "",
            Args: [
                {
                    Name: "scale",
                    Note: "The FPS scale",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "HEXONEFLAG",
            Note: "The hex one flag",
            Description: "",
            Args: [
                {
                    Name: "flag",
                    Note: "The hex one flag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "HEXTWOFLAG",
            Note: "The hex two flag",
            Description: "",
            Args: [
                {
                    Name: "flag",
                    Note: "The hex two flag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "HEXFOURTHOUSANDFLAG",
            Note: "The hex four thousand flag",
            Description: "",
            Args: [
                {
                    Name: "flag",
                    Note: "The hex four thousand flag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "HEXEIGHTTHOUSANDFLAG",
            Note: "The hex eight thousand flag",
            Description: "",
            Args: [
                {
                    Name: "flag",
                    Note: "The hex eight thousand flag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "HEXTENTHOUSANDFLAG",
            Note: "The hex ten thousand flag",
            Description: "",
            Args: [
                {
                    Name: "flag",
                    Note: "The hex ten thousand flag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "HEXTWENTYTHOUSANDFLAG",
            Note: "The hex twenty thousand flag",
            Description: "",
            Args: [
                {
                    Name: "flag",
                    Note: "The hex twenty thousand flag",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        }
    ]
}
