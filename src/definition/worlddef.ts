// Generated from quail, DO NOT EDIT
import * as data from "./data";

export const worlddef: data.DefinitionInfo = {
    Name: "WORLDDEF",
    HasTag: false,
    Note: "Wld World definition",
    Description: "This is a collection of properties that defines a world",
    Properties: [
        {
            Name: "NEWWORLD",
            Note: "Is this a new wld file?",
            Description: "This is used exclusively in s3d files. For most cases, can just be 0 unless imported",
            Args: [
                {
                    Name: "version",
                    Note: "0: old wld versioning, 1: new wld versioning",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "ZONE",
            Note: "Should this wce be treated like a zone?",
            Description: "",
            Args: [
                {
                    Name: "is zone",
                    Note: "0: no, 1: yes",
                    Description: "",
                    Format: "%s",
                    Example: ""
                }
            ],
            Properties: null
        },
        {
            Name: "EQGVERSION?",
            Note: "Used in eqg parsing for version rebuilding",
            Description: "",
            Args: [
                {
                    Name: "version",
                    Note: "The version of the eqg file",
                    Description: "",
                    Format: "%d",
                    Example: ""
                }
            ],
            Properties: null
        }
    ]
}
