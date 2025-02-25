import * as data from "./data";

export const hierarchicalspritedef: data.DefinitionInfo = {
    name: "HIERARCHICALSPRITEDEF",
    hasTag: true,
    description: "A hierarchical sprite definition.",
    properties: [
        {
            name: "NUMDAGS",
            isArrayNum: true,
            description: "The number of DAGs in the sprite.",
            args: [
                {
                    name: "num dags",
                    description: "The number of DAGs.",
                    format: "%d",
                },
            ],
        },
        {
            name: "NUMATTACHEDSKINS",
            isArrayNum: true,
            description: "The number of attached skins in the sprite.",
            args: [
                {
                    name: "num attached skins",
                    description: "The number of attached skins.",
                    format: "%d",
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
            name: "CENTEROFFSET?",
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
            name: "BOUNDINGRADIUS?",
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
            name: "HEXTWOHUNDREDFLAG",
            description: "The hex two hundred flag.",
            args: [
                {
                    name: "flag",
                    description: "The hex two hundred flag.",
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

export default hierarchicalspritedef;