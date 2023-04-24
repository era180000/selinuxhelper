import { Location } from 'vscode-languageserver';
export class DefinitionInfo{
    defLocation: Array<Location> | Location;
    type: string; // type, bool, interface, template, define
    constructor(deflocation:Array<Location> | Location, type:string){
        this.defLocation = deflocation;
        this.type = type;
    }
};