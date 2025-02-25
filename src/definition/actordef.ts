import * as data from "./data";

export const actordef: data.DefinitionInfo = {
    name: "ACTORDEF",
    hasTag: true,
    description: "An actor definition.",
    properties: [
        {
            name: "CALLBACK",
            description: "The callback function for the actor.",
            args: [
                {
                    name: "callback",
                    description: "The callback function.",
                    format: "%s",
                },
            ],
        },
        {
            name: "BOUNDSREF",
            description: "The bounds reference for the actor.",
            args: [
                {
                    name: "bounds ref",
                    description: "The bounds reference.",
                    format: "%d",
                },
            ],
        },
        {
            name: "CURRENTACTION?",
            description: "The current action of the actor.",
            args: [
                {
                    name: "current action",
                    description: "The current action.",
                    format: "%s",
                },
            ],
        },
        {
            name: "LOCATION?",
            description: "The location of the actor.",
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
                {
                    name: "w-rot",
                    description: "The w rotation.",
                    format: "%d",
                },
                {
                    name: "x-rot",
                    description: "The x rotation.",
                    format: "%d",
                },
                {
                    name: "y-rot",
                    description: "The y rotation.",
                    format: "%d",
                },
                {
                    name: "z-rot",
                    description: "The z rotation.",
                    format: "%d",
                },
            ],
        },
        {
            name: "ACTIVEGEOMETRY?",
            description: "The active geometry of the actor.",
            args: [
                {
                    name: "active geometry",
                    description: "The active geometry.",
                    format: "%s",
                },
            ],
        },
        {
            name: "NUMACTIONS",
            isArrayNum: true,
            description: "The number of actions for the actor.",
            args: [
                {
                    name: "num actions",
                    description: "The number of actions.",
                    format: "%d",
                },
            ],
        },
        {
            name: "USERDATA",
            description: "Unknown property 2.",
            args: [
                {
                    name: "unk2",
                    description: "Unknown property 2.",
                    format: "%d",
                },
            ],
        },
        {
            name: "USEMODELCOLLIDER",
            description: "Ignored in RoF2. 0x80 flag. This gets ignored if ActorInst doesn't have it. Likely need to use hierarchysprite flag for things like boats.",
            args: [
                {
                    name: "use model collider",
                    description: "0: no, 1: yes.",
                    format: "%d",
                },
            ],
        },
    ],
};

export default actordef;