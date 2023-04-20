
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
        //if this document has been parsed 
        if(this.documentList.indexOf(uri) !== -1){
            this.reparseFile(uri);
        }

        const filePath = URI.parse(uri).fsPath;
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        
        const document = TextDocument.create(uri, 'plaintext', 1, fileContent);

        this.documentList.push(uri);

        switch (path.extname(filePath)){
            case ".te": this.parseTE(document);	break;
            case ".if": this.parseIF(document); break;
            case ".spt": this.parseSPT(document); break;
            case ".fc": this.parseFC(document); break;
        }
    }

    private parseTE(document: TextDocument){
        //TO-DO: Add
        console.log("PARSING TE");
    }

    private parseIF(document: TextDocument){
        const text = document.getText();
        const lines = text.split(/\r?\n/);

        for(let i = 0; i < lines.length; i++)
        {
            if (/^\s*interface\(/.test(lines[i])) { // check if line starts with "interface
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
                    }while(parenthesisStack.length !== 0);
                    
                    this.addLocation(match[0], Location.create(document.uri, {
                        start: { line: startLine, character: 0 },
                        end: { line: i-1, character: lines[i].length }
                        })
                    );
                }
            }
        }

        console.log(this.definitionTable);
    }

    private parseFC(document: TextDocument){
        //TO-DO: Add
        console.log("PARSING FC");
    }

    private parseSPT(document: TextDocument){
        //TO-DO: Add
        console.log("PARSING SPT");
    }

    private reparseFile(document: string){
        this.removeFileParse(document);
        delete this.documentList[this.documentList.indexOf(document)];
    }


    //TO-DO: There is something wrong with this function idk
    removeFileParse(uri: string){
        this.definitionTable.forEach((value, key, map) => {
            if(Array.isArray(value)){
                value.filter((value, index, array) => {
                    if (value.uri === uri) {
                      array.splice(index, 1);
                    }
                  });

                if(value.length === 0){
                    map.delete(key);
                }
                else if(value.length === 1){
                    map.set(key, value[0]);
                }
            }
            else if(value.uri = uri){
                map.delete(key);
            }
        });
    }

    //returns definition array for a symbol
    getLocations(symbol: string){
        return this.definitionTable.get(symbol);
    }

  }