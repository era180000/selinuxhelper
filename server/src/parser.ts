
import { Location } from 'vscode-languageserver';
import {
	TextDocument,
} from 'vscode-languageserver-textdocument';
import { URI } from 'vscode-uri';
import * as fs from 'fs';
import * as path from 'path';

export class FileParser {
    definitionTable: Map<string, Array<Location> | Location>;
    documentList: Array<string>;

    constructor() {
      this.definitionTable = new Map<string, Array<Location> | Location>;
      this.documentList = new Array<string>;
    }

    addLocation(symbol: string, location: Location){
        let result = this.definitionTable.get(symbol);
        //else add it to the map
        if( result === undefined){
            this.definitionTable.set(symbol, location);
            return;
        }
        //if result is array add it
        else if(Array.isArray(result)){
            result.push(location);
        }
        //if location already exists add it to the list
        else{
            this.definitionTable.delete(symbol);
            this.definitionTable.set(symbol, [result!, location]);
        }

    }
   
    //parses a file and adds it to the definition table
    parseFile(uri: string) {
        //if this document has been already been parsed 
        if(this.documentList.indexOf(uri) !== -1){
            this.removeFileParse(uri); //remove file parse then reparse
        }

        const filePath = URI.parse(uri).fsPath;
        //console.log(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        const document = TextDocument.create(filePath, 'plaintext', 1, fileContent);

        this.documentList.push(filePath);

        switch (path.extname(filePath)){
            case ".te": this.parseTE(document);	break;
            case ".if": this.parseIF(document, uri); break;
            case ".spt": this.parseSPT(document); break;
        }
    }

    private parseTE(document: TextDocument){
        //TO-DO: Add
        console.log("PARSING TE");
    }

    private parseIF(document: TextDocument, uri: string){
        const text = document.getText();
        const lines = text.split(/\r?\n/);

        if(lines !== undefined){
            for(let i = 0; i < lines.length; i++)
            {
                if (/^\s*(interface|template)\(/.test(lines[i])) { // check if line starts with "interface
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
                        
                        this.addLocation(match[0], Location.create(uri, {
                            start: { line: startLine, character: 0 },
                            end: { line: i-1, character: lines[i-1].length }
                            })
                        );
                        i--;
                    }
                }
            }
        }

    }
    
    private parseSPT(document: TextDocument){
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
                    
                    this.addLocation(match[0], Location.create(document.uri, {
                        start: { line: startLine, character: 0 },
                        end: { line: i-1, character: lines[i-1].length }
                        })
                    );
                    i--;
                }
            }
        }
    }

    //TO-DO: There is something wrong with this function idk
    removeFileParse(uri: string){

        //remove document from list
        delete this.documentList[this.documentList.indexOf(uri)];

        //go through the map
        //for each symbol
        for (let [key, value] of this.definitionTable.entries()) {
            if (Array.isArray(value)){ //if the value is a list
                for (let element of value){ //iterate through list and remove any matches
                    if (element.uri === uri){
                        //remove element from list
                        //this will remove the element and not set the index to undefined
                        const index = value.indexOf(element);
                        if (index > -1) {
                            value.splice(index, 1); //syntax splice(index, #of elements to remove at location)
                        }
                    }
                }
                // if at the end the list size is 0 delete symbol from map
                if (value.length === 0){
                    this.definitionTable.delete(key);
                }
                //if at the end the list size is 1, replace it with symbol and just the first value
                else if (value.length === 1){
                    const singleLocation = value[0];
                    const singleKey = key;
                    this.definitionTable.delete(key);
                    this.definitionTable.set(singleKey, singleLocation);
                }
            }
            //  if the value is a single locations
            else{
                //check if the location matches uri
                if(value.uri === uri){
                    //if so, remove from map
                    this.definitionTable.delete(key);
                }
            }
        }

    }

    //returns definition array for a symbol
    getLocations(symbol: string){
        return this.definitionTable.get(symbol);
    }

    clearTable(){
        this.definitionTable = new Map<string, Array<Location> | Location>;
        this.documentList = new Array<string>;
    }

  }