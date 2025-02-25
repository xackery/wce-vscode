// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const hierarchicalspritedef: data.DefinitionInfo = {
    Name: "HIERARCHICALSPRITEDEF",
    HasTag: true,
    Note: "Wld  Hierarchical Sprite Def",
    Description: "",
    Properties: [
        {
            Name: "NUMDAGS",
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
                    Name: "DAG",
                    Note: "",
                    Description: "",
                    Args: null,
                    Properties: null
                },
                {
                    Name: "TAG",
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
                    Name: "SPRITE",
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
                    Name: "SPRITEINDEX",
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
                    Name: "TRACK",
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
                    Name: "TRACKINDEX",
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
                    Name: "SUBDAGLIST",
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
            Name: "NUMATTACHEDSKINS",
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
                    Name: "ATTACHEDSKIN",
                    Note: "",
                    Description: "",
                    Args: null,
                    Properties: null
                },
                {
                    Name: "DMSPRITE",
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
                    Name: "DMSPRITEINDEX",
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
                    Name: "LINKSKINUPDATESTODAGINDEX",
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
            Name: "POLYHEDRON",
            Note: "",
            Description: "",
            Args: null,
            Properties: null
        },
        {
            Name: "DEFINITION",
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
            Name: "CENTEROFFSET?",
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
            Name: "BOUNDINGRADIUS?",
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
            Name: "HEXTWOHUNDREDFLAG",
            Note: "also known as HAVEATTACHEDSKINS",
            Description: "If you have an attached skin, it has to be 1. If your meshes are just attached to DAGs and not the HS_DEF directly, then it should be 0. Some items are attached skins, and some aren't",
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
            Name: "HEXTWENTYTHOUSANDFLAG",
            Note: "also known as DAGCOLLISONS",
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
