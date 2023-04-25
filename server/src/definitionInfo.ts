import { Location } from 'vscode-languageserver';
export class DefinitionInfo{
    defLocation: Array<TextLocation> | TextLocation;
    type: string; // type, bool, interface, template, define
    constructor(deflocation:Array<TextLocation> | TextLocation, type:string){
        this.defLocation = deflocation;
        this.type = type;
    }
};

export class TextLocation{
    description: string;
    location: Location;
    constructor(description: string, location: Location){
        this.description = description;
        this.location = location;
    }
}