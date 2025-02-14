import * as data from './data';
import worlddef from './worlddef';
import materialpalette from './materialpalette';
import dmspritedef2 from './dmspritedef2';
import trackdefinition from './trackdefinition';
import trackinstance from './trackinstance';
import hierarchicalspritedef from './hierarchicalspritedef';
import actordef from './actordef';

export function definitionByName(name: string): data.DefinitionInfo | null {
    switch (name) {
        case worlddef.name:
            return worlddef;
        case materialpalette.name:
            return materialpalette;
        case dmspritedef2.name:
            return dmspritedef2;
        case trackdefinition.name:
            return trackdefinition;
        case trackinstance.name:
            return trackinstance;
        case hierarchicalspritedef.name:
            return hierarchicalspritedef;
        case actordef.name:
            return actordef;
        default:
            return null;
    }
}

export default definitionByName;