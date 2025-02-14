import * as data from "./data";

export const dmspritedef2: data.DefinitionInfo = {
    name: "DMSPRITEDEF2",
    hasTag: true,
    description: "A DM sprite definition.",
    properties: [
        {
            name: "TAGINDEX",
            description: "The index of the tag.",
            args: [
                {
                    name: "index",
                    description: "The index of the tag.",
                    format: "%d",
                },
            ],
        },
        {
            name: "CENTEROFFSET",
            description: "The center offset of the sprite.",
            args: [
                {
                    name: "x",
                    description: "The x offset.",
                    format: "%0.8f",
                },
                {
                    name: "y",
                    description: "The y offset.",
                    format: "%0.8f",
                },
                {
                    name: "z",
                    description: "The z offset.",
                    format: "%0.8f",
                },
            ],
        },
        {
            name: "NUMVERTICES",
            description: "The number of vertices in the sprite.",
            args: [
                {
                    name: "num vertices",
                    description: "The number of vertices.",
                    format: "%d",
                },
            ],
        },
        {
            name: "XYZ",
            description: "The coordinates of a vertex.",
            args: [
                {
                    name: "x",
                    description: "The x coordinate.",
                    format: "%0.8f",
                },
                {
                    name: "y",
                    description: "The y coordinate.",
                    format: "%0.8f",
                },
                {
                    name: "z",
                    description: "The z coordinate.",
                    format: "%0.8f",
                },
            ],
        },
        {
            name: "NUMUVS",
            description: "The number of UVs in the sprite.",
            args: [
                {
                    name: "num uvs",
                    description: "The number of UVs.",
                    format: "%d",
                },
            ],
        },
        {
            name: "NUMVERTEXNORMALS",
            description: "The number of vertex normals in the sprite.",
            args: [
                {
                    name: "num vertex normals",
                    description: "The number of vertex normals.",
                    format: "%d",
                },
            ],
        },
        {
            name: "NUMVERTEXCOLORS",
            description: "The number of vertex colors in the sprite.",
            args: [
                {
                    name: "num vertex colors",
                    description: "The number of vertex colors.",
                    format: "%d",
                },
            ],
        },
        {
            name: "SKINASSIGNMENTGROUPS",
            description: "The skin assignment groups.",
            args: [
                {
                    name: "group size",
                    description: "The size of the group.",
                    format: "%d",
                },
                {
                    name: "group data",
                    description: "The data of the group.",
                    format: "%s",
                },
            ],
        },
        {
            name: "MATERIALPALETTE",
            description: "The material palette used by the sprite.",
            args: [
                {
                    name: "palette name",
                    description: "The name of the material palette.",
                    format: "%s",
                },
            ],
        },
        {
            name: "DMTRACKINST",
            description: "The DM track instance.",
            args: [
                {
                    name: "track instance",
                    description: "The track instance.",
                    format: "%s",
                },
            ],
        },
        {
            name: "POLYHEDRON",
            description: "The polyhedron definition.",
            args: [
                {
                    name: "definition",
                    description: "The definition of the polyhedron.",
                    format: "%s",
                },
            ],
        },
        {
            name: "NUMFACE2S",
            description: "The number of face2s in the sprite.",
            args: [
                {
                    name: "num face2s",
                    description: "The number of face2s.",
                    format: "%d",
                },
            ],
        },
        {
            name: "NUMMESHOPS",
            description: "The number of mesh operations in the sprite.",
            args: [
                {
                    name: "num meshops",
                    description: "The number of mesh operations.",
                    format: "%d",
                },
            ],
        },
        {
            name: "MESHOP",
            description: "A mesh operation.",
            args: [
                {
                    name: "operation",
                    description: "The mesh operation.",
                    format: "%s",
                },
            ],
        },
        {
            name: "FACEMATERIALGROUPS",
            description: "The face material groups.",
            args: [
                {
                    name: "group size",
                    description: "The size of the group.",
                    format: "%d",
                },
                {
                    name: "group data",
                    description: "The data of the group.",
                    format: "%s",
                },
            ],
        },
        {
            name: "VERTEXMATERIALGROUPS",
            description: "The vertex material groups.",
            args: [
                {
                    name: "group size",
                    description: "The size of the group.",
                    format: "%d",
                },
                {
                    name: "group data",
                    description: "The data of the group.",
                    format: "%s",
                },
            ],
        },
        {
            name: "BOUNDINGBOXMIN",
            description: "The minimum bounding box coordinates.",
            args: [
                {
                    name: "x",
                    description: "The x coordinate.",
                    format: "%0.8f",
                },
                {
                    name: "y",
                    description: "The y coordinate.",
                    format: "%0.8f",
                },
                {
                    name: "z",
                    description: "The z coordinate.",
                    format: "%0.8f",
                },
            ],
        },
        {
            name: "BOUNDINGBOXMAX",
            description: "The maximum bounding box coordinates.",
            args: [
                {
                    name: "x",
                    description: "The x coordinate.",
                    format: "%0.8f",
                },
                {
                    name: "y",
                    description: "The y coordinate.",
                    format: "%0.8f",
                },
                {
                    name: "z",
                    description: "The z coordinate.",
                    format: "%0.8f",
                },
            ],
        },
        {
            name: "BOUNDINGRADIUS",
            description: "The bounding radius of the sprite.",
            args: [
                {
                    name: "radius",
                    description: "The bounding radius.",
                    format: "%0.8f",
                },
            ],
        },
        {
            name: "FPSCALE",
            description: "The FPS scale of the sprite.",
            args: [
                {
                    name: "scale",
                    description: "The FPS scale.",
                    format: "%d",
                },
            ],
        },
        {
            name: "HEXONEFLAG",
            description: "The hex one flag.",
            args: [
                {
                    name: "flag",
                    description: "The hex one flag.",
                    format: "%d",
                },
            ],
        },
        {
            name: "HEXTWOFLAG",
            description: "The hex two flag.",
            args: [
                {
                    name: "flag",
                    description: "The hex two flag.",
                    format: "%d",
                },
            ],
        },
        {
            name: "HEXFOURTHOUSANDFLAG",
            description: "The hex four thousand flag.",
            args: [
                {
                    name: "flag",
                    description: "The hex four thousand flag.",
                    format: "%d",
                },
            ],
        },
        {
            name: "HEXEIGHTTHOUSANDFLAG",
            description: "The hex eight thousand flag.",
            args: [
                {
                    name: "flag",
                    description: "The hex eight thousand flag.",
                    format: "%d",
                },
            ],
        },
        {
            name: "HEXTENTHOUSANDFLAG",
            description: "The hex ten thousand flag.",
            args: [
                {
                    name: "flag",
                    description: "The hex ten thousand flag.",
                    format: "%d",
                },
            ],
        },
        {
            name: "HEXTWENTYTHOUSANDFLAG",
            description: "The hex twenty thousand flag.",
            args: [
                {
                    name: "flag",
                    description: "The hex twenty thousand flag.",
                    format: "%d",
                },
            ],
        },
    ],
};

export default dmspritedef2;