
import { Location } from 'vscode-languageserver';
import {
	TextDocument,
} from 'vscode-languageserver-textdocument';
import { URI } from 'vscode-uri';
import * as fs from 'fs';
import * as path from 'path';
import { DefinitionInfo , TextLocation} from './definitionInfo';

export class FileParser {
    definitionTable: Map<string, DefinitionInfo>;
    documentList: Array<string>;
    constructor() {
        this.definitionTable = new Map<string, DefinitionInfo>;
        this.documentList = new Array<string>;
    }


    addLocation(symbol: string, location: Location, type:string, text: string){
        let result = this.definitionTable.get(symbol)?.defLocation;
        //if the symbol is not in the map
        if(result === undefined){
            this.definitionTable.set(symbol, new DefinitionInfo(new TextLocation(text, location), type)); //add new entry to map with location being a single object
            return;
        }
        //if result is array add it
        else if(Array.isArray(result)){
            result.push(new TextLocation(text, location)); //because result is an array, it still pushes to the array in the map
        }
        //if location already exists but is not an array
        else{
            this.definitionTable.delete(symbol); //delete the old entry
            this.definitionTable.set(symbol, new DefinitionInfo([result!, new TextLocation(text, location)], type)); //add new entry where defLocation is an array instead of a single object
        }

    }
   
    //parses a file and adds it to the definition table
    parseFile(uri: string) {
        //if this document has been already been parsed 
        if(this.documentList.indexOf(uri) !== -1){
            this.removeFileParse(uri); //remove file parse then reparse
        }

        const filePath = URI.parse(uri).fsPath;
        try {
        if(fs.existsSync(filePath)) {
            this.documentList.push(uri);

            var stats = fs.statSync(filePath);
            if(stats.size < 2000000000) {

                const fileContent = fs.readFileSync(filePath, 'utf-8');

                const document = TextDocument.create(filePath, 'plaintext', 1, fileContent);

                switch (path.extname(filePath)){
                    case ".te": this.parseTE(document, uri);break;
                    case ".if": this.parseIF(document, uri); break;
                    case ".spt": this.parseSPT(document, uri); break;
                }
            }
            else{
                console.log(filePath + " is too large of a file, cannot be parsed");
            }
        }

        }
        catch(err){
            console.log("Error in parsing " + filePath);
        }
    }

    private parseTE(document: TextDocument, uri: string){
        console.log("Parsing " + uri);
        //TO-DO: Add
        //when putting a definition into the table, please specify the type ("type" or "bool" in .te files)
        //EXAMPLE: this.addLocation(match[0], Location.create(uri, {
        //                              start: { line: startLine, character: 0 },
        //                              end: { line: i-1, character: lines[i-1].length }
        //                          }),
        //                          type 
        //                      );
    }

    private parseIF(document: TextDocument, uri: string){
        console.log("Parsing " + uri);
        const text = document.getText();
        const lines = text.split(/\r?\n/);

        if(lines !== undefined){
            for(let i = 0; i < lines.length; i++)
            {
                if (/^\s*(interface|template)\(/.test(lines[i])) { // check if line starts with "interface" or "template"
                    //check if interface or template specifically
                    let type: string;
                    if (/^\s*interface\(/.test(lines[i])) {
                        type = "interface";
                    }
                    else{
                        type = "template";
                    }
                    const match = lines[i].match(/(?<=`)(.*)(?=')/m);
                    if(match) {
                        //find end line of
                        let startLine = i;

                        let parenthesisStack = new Array();
                        parenthesisStack.push('(');
                        do{
                            let startChar = 0;
                            if(i === startLine){
                                startChar = lines[i].indexOf(match[0]);
                            }
                            for(let s = startChar; s < lines[i].length && parenthesisStack.length !== 0; s++)
                            {
                                if(lines[i].charAt(s) === '('){
                                    parenthesisStack.push('(');
                                }
                                else if(lines[i].charAt(s) === ')')
                                {
                                    parenthesisStack.pop();
                                }
                            }
                            i++;

                        }while(parenthesisStack.length !== 0 && i < lines.length);
                        let location = Location.create(uri, {
                            start: { line: startLine, character: 0 },
                            end: { line: i-1, character: lines[i-1].length }
                        });
                        let description =  "```\n"  + document.getText(location.range)+ '\n```\n' + document.uri;
                        this.addLocation(
                            match[0], 
                            Location.create(uri, {
                                start: { line: startLine, character: 0 },
                                end: { line: startLine, character: 0 }
                            }),
                            type, 
                            description
                        );
                        i--;
                    }
                }
            }
        }
        
    }
    
    private parseSPT(document: TextDocument, uri: string){
        console.log("Parsing " + uri);
        const text = document.getText();
        const lines = text.split(/\r?\n/);
        for(let i = 0; i < lines.length; i++)
        {
            if (/^\s*define\(/.test(lines[i])) { // check if line starts with define
                const match = lines[i].match(/(?<=`)([^']+)(?=')/m);
                if(match) {
                    let startLine = i;

                    let parenthesisStack = new Array();
                    parenthesisStack.push('(');
                    do{
                        let startChar = 0;
                        if(i === startLine){
                            startChar = lines[i].indexOf(match[0]);
                        }
                        for(let s = startChar; s < lines[i].length && parenthesisStack.length !== 0; s++)
                        {
                            if(lines[i].charAt(s) === '('){
                                parenthesisStack.push('(');
                            }
                            else if(lines[i].charAt(s) === ')')
                            {
                                parenthesisStack.pop();
                            }
                        }
                        i++;
                    }while(parenthesisStack.length !== 0);
                    
                    let location = Location.create(uri, {
                        start: { line: startLine, character: 0 },
                        end: { line: i-1, character: lines[i-1].length }
                    });
                    let description = "```\n"  + document.getText(location.range)+ '\n```\n' + document.uri;
                    this.addLocation(
                        match[0], 
                        Location.create(uri, {
                            start: { line: startLine, character: 0 },
                            end: { line: startLine, character: 0 }
                        }),
                        "define", 
                        description
                    );
                    i--;
                }
            }
        }
    }

    removeFileParse(uri: string){
        //verify that document is in list
        if(this.documentList.indexOf(uri) !== -1){
            console.log("Removing " + uri + " from parser");

            //remove document from list
            delete this.documentList[this.documentList.indexOf(uri)];

            //go through the map
            //for each symbol
            for (let [key, value] of this.definitionTable.entries()) {
                if (Array.isArray(value.defLocation)){ //if the value is a list
                    for (let element of value.defLocation){ //iterate through list and remove any matches
                        if (element.location.uri === uri){
                            //remove element from list
                            //this will remove the element and not set the index to undefined
                            const index = value.defLocation.indexOf(element);
                            if (index > -1) {
                                value.defLocation.splice(index, 1); //syntax splice(index, #of elements to remove at location)
                            }
                        }
                    }
                    // if at the end the list size is 0 delete symbol from map
                    if (value.defLocation.length === 0){
                        this.definitionTable.delete(key);
                    }
                    //if at the end the list size is 1, replace it with symbol and just the first value
                    else if (value.defLocation.length === 1){
                        const singleLocation = value.defLocation[0];
                        const type = value.type;
                        const singleKey = key;
                        this.definitionTable.delete(key);
                        this.definitionTable.set(singleKey, new DefinitionInfo(singleLocation, type));
                    }
                }
                //if the value is a single locations
                else{
                    //check if the location matches uri
                    if(value.defLocation.location.uri === uri){ //this should always be fine since we've already checked that it is not an array
                        //if so, remove from map
                        this.definitionTable.delete(key);
                    }
                }
            }
        }
    }

    //returns definition array for a symbol
    getLocations(symbol: string){
        return this.definitionTable.get(symbol)?.defLocation;
    }

    clearTable(){
        this.definitionTable = new Map<string, DefinitionInfo>;
        this.documentList = new Array<string>;
    }

  }