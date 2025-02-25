import * as data from './data';
import actordef from './actordef';
import dmspritedef2 from './dmspritedef2';
import hierarchicalspritedef from './hierarchicalspritedef';
import materialdefinition from './materialdefinition';
import materialpalette from './materialpalette';
import simplespritedef from './simplespritedef';
import trackdefinition from './trackdefinition';
import trackinstance from './trackinstance';
import worlddef from './worlddef';
import zone from './zone';


export function definitionByName(name: string): data.DefinitionInfo | null {
    switch (name) {
        case actordef.name:
            return actordef;
        case dmspritedef2.name:
            return dmspritedef2;
        case hierarchicalspritedef.name:
            return hierarchicalspritedef;
        case materialdefinition.name:
            return materialdefinition;
        case materialpalette.name:
            return materialpalette;
        case simplespritedef.name:
            return simplespritedef;
        case trackdefinition.name:
            return trackdefinition;
        case trackinstance.name:
            return trackinstance;
        case worlddef.name:
            return worlddef;
        case zone.name:
            return zone;
        default:
            return null;
    }
}

export default definitionByName;