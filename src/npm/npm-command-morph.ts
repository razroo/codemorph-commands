import { getSecondWordOfCommand } from "../utils/word-search"
import { NpmCommandMorph } from "./interfaces/npm-command-morph.interface";
import { npmInstallCodemorph } from "./npm-install/npm-install";

export function npmCommandMorph(commandText: string): any {
   const commandType = getSecondWordOfCommand(commandText);
   switch(commandType) {
     case NpmCommandMorph.install: 
       return npmInstallCodemorph(commandText)
    default: 
      return {} 
   }
}