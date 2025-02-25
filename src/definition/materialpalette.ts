// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const materialpalette: data.DefinitionInfo = {
    Name: "MATERIALPALETTE",
    HasTag: true,
    Note: "Wld Material Palette",
    Description: "",
    Properties: [
        {
            Name: "NUMMATERIALS",
            Note: "Number of materials in the palette",
            Description: "",
            Args: [
                {
                    Name: "count",
                    Note: "Number of materials",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: [
                {
                    Name: "MATERIAL",
                    Note: "Material tag",
                    Description: "",
                    Args: [
                        {
                            Name: "tag",
                            Note: "Tag of material",
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
}
