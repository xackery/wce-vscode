"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.definitions = void 0;
exports.definitions = [
    {
        name: "WORLDDEF",
        hasTag: true,
        description: "A world definition. This is a collection of properties that defines a world.",
        properties: [
            {
                name: "SOMEPROP",
                description: "SOMEPROP has this description.",
                args: [
                    {
                        name: "arg1",
                        description: "arg1 has this description.",
                        format: "%s",
                    },
                    {
                        name: "arg2",
                        description: "arg2 has this description.",
                        format: "%d",
                    },
                    {
                        name: "arg3",
                        description: "arg3 has this description.",
                        format: "%f",
                    },
                ],
            }
        ],
    },
];
//# sourceMappingURL=definitions.js.map