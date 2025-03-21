// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const eqgmodeldef: data.DefinitionInfo = {
    Name: "EQGMODELDEF",
    HasTag: true,
    Note: "EQG Model Definition",
    Description: "",
    Properties: [
        {
            Name: "VERSION",
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
        },
        {
            Name: "NUMMATERIALS",
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
                    Name: "MATERIAL",
                    Note: "",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%s",
                            Example: ""
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "SHADERTAG",
                    Note: "",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%s",
                            Example: ""
                        }
                    ],
                    Properties: null
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
                },
                {
                    Name: "NUMPROPERTIES",
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
                            Name: "PROPERTY",
                            Note: "",
                            Description: "",
                            Args: [
                                {
                                    Name: "",
                                    Note: "",
                                    Description: "",
                                    Format: "%s",
                                    Example: ""
                                },
                                {
                                    Name: "",
                                    Note: "",
                                    Description: "",
                                    Format: "%d",
                                    Example: ""
                                },
                                {
                                    Name: "",
                                    Note: "",
                                    Description: "",
                                    Format: "%s",
                                    Example: ""
                                }
                            ],
                            Properties: null
                        }
                    ]
                },
                {
                    Name: "ANIMSLEEP",
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
                },
                {
                    Name: "NUMANIMTEXTURES",
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
                            Name: "TEXTURE",
                            Note: "",
                            Description: "",
                            Args: [
                                {
                                    Name: "",
                                    Note: "",
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
                    Name: "VERTEX",
                    Note: "",
                    Description: "",
                    Args: null,
                    Properties: null
                },
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
                },
                {
                    Name: "UV",
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
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "UV2",
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
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "NORMAL",
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
                },
                {
                    Name: "TINT",
                    Note: "",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
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
                    Name: "FACE",
                    Note: "",
                    Description: "",
                    Args: null,
                    Properties: null
                },
                {
                    Name: "TRIANGLE",
                    Note: "",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        },
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%d",
                            Example: ""
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "MATERIAL",
                    Note: "",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%s",
                            Example: ""
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "PASSABLE",
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
                },
                {
                    Name: "TRANSPARENT",
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
                },
                {
                    Name: "COLLISIONREQUIRED",
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
                },
                {
                    Name: "CULLED",
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
                },
                {
                    Name: "DEGENERATE",
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
        },
        {
            Name: "NUMBONES",
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
                    Name: "BONE",
                    Note: "",
                    Description: "",
                    Args: null,
                    Properties: null
                },
                {
                    Name: "NAME",
                    Note: "",
                    Description: "",
                    Args: [
                        {
                            Name: "",
                            Note: "",
                            Description: "",
                            Format: "%s",
                            Example: ""
                        }
                    ],
                    Properties: null
                },
                {
                    Name: "NEXT",
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
                },
                {
                    Name: "CHILDREN",
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
                },
                {
                    Name: "CHILDINDEX",
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
                },
                {
                    Name: "PIVOT",
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
                },
                {
                    Name: "QUATERNION",
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
                },
                {
                    Name: "SCALE",
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
        }
    ]
}
