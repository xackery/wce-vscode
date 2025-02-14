import * as data from "./data";

export const materialpalette: data.DefinitionInfo = {
    name: "MATERIALPALETTE",
    hasTag: true,
    description: "A material palette definition.",
    properties: [
        {
            name: "NUMMATERIALS",
            description: "The number of materials in the palette.",
            args: [
                {
                    name: "num materials",
                    description: "The number of materials.",
                    format: "%d",
                },
            ],
        },
        {
            name: "MATERIAL",
            description: "A material in the palette.",
            args: [
                {
                    name: "material name",
                    description: "The name of the material.",
                    format: "%s",
                },
            ],
        },
    ],
};

export default materialpalette;