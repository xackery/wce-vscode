import *  as data from './data';
import { actordef } from './actordef';
import { actorinst } from './actorinst';
import { ambientlight } from './ambientlight';
import { blitspritedef } from './blitspritedef';
import { dmspritedef2 } from './dmspritedef2';
import { dmspritedefinition } from './dmspritedefinition';
import { dmtrackdef2 } from './dmtrackdef2';
import { eqganidef } from './eqganidef';
import { eqglayerdef } from './eqglayerdef';
import { eqgmodeldef } from './eqgmodeldef';
import { eqgskinnedmodeldef } from './eqgskinnedmodeldef';
import { eqgterdef } from './eqgterdef';
import { eqgparticlepointdef } from './eqgparticlepointdef';
import { eqgparticlerenderdef } from './eqgparticlerenderdef';
import { globalambientlightdef } from './globalambientlightdef';
import { hierarchicalspritedef } from './hierarchicalspritedef';
import { lightdefinition } from './lightdefinition';
import { materialdefinition } from './materialdefinition';
import { materialpalette } from './materialpalette';
import { particleclouddef } from './particleclouddef';
import { pointlight } from './pointlight';
import { polyhedrondefinition } from './polyhedrondefinition';
import { region } from './region';
import { rgbdeformationtrackdef } from './rgbdeformationtrackdef';
import { simplespritedef } from './simplespritedef';
import { sprite2ddef } from './sprite2ddef';
import { sprite3ddef } from './sprite3ddef';
import { trackinstance } from './trackinstance';
import { trackdefinition } from './trackdefinition';
import { worlddef } from './worlddef';
import { worldtree } from './worldtree';
import { zone } from './zone';


export function definitionByName(name: string): data.DefinitionInfo | null {
    switch (name) {
        case actordef.Name:
            return actordef;
        case actorinst.Name:
            return actorinst;
        case ambientlight.Name:
            return ambientlight;
        case blitspritedef.Name:
            return blitspritedef;
        case dmspritedef2.Name:
            return dmspritedef2;
        case dmspritedefinition.Name:
            return dmspritedefinition;
        case dmtrackdef2.Name:
            return dmtrackdef2;
        case eqganidef.Name:
            return eqganidef;
        case eqglayerdef.Name:
            return eqglayerdef;
        case eqgmodeldef.Name:
            return eqgmodeldef;
        case eqgskinnedmodeldef.Name:
            return eqgskinnedmodeldef;
        case eqgterdef.Name:
            return eqgterdef;
        case eqgparticlepointdef.Name:
            return eqgparticlepointdef;
        case eqgparticlerenderdef.Name:
            return eqgparticlerenderdef;
        case globalambientlightdef.Name:
            return globalambientlightdef;
        case hierarchicalspritedef.Name:
            return hierarchicalspritedef;
        case lightdefinition.Name:
            return lightdefinition;
        case materialdefinition.Name:
            return materialdefinition;
        case materialpalette.Name:
            return materialpalette;
        case particleclouddef.Name:
            return particleclouddef;
        case pointlight.Name:
            return pointlight;
        case polyhedrondefinition.Name:
            return polyhedrondefinition;
        case region.Name:
            return region;
        case rgbdeformationtrackdef.Name:
            return rgbdeformationtrackdef;
        case simplespritedef.Name:
            return simplespritedef;
        case sprite2ddef.Name:
            return sprite2ddef;
        case sprite3ddef.Name:
            return sprite3ddef;
        case trackinstance.Name:
            return trackinstance;
        case trackdefinition.Name:
            return trackdefinition;
        case worlddef.Name:
            return worlddef;
        case worldtree.Name:
            return worldtree;
        case zone.Name:
            return zone;
        default:
            return null;
    }
}

export default definitionByName;