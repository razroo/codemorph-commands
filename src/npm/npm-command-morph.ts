import { getSecondWordOfCommand } from "../utils/command-search/command-search";
import { NpmCommandMorph } from "./interfaces/npm-command-morph.interface";
import { npmInstallCodemorph } from "./npm-install/npm-install";

export async function npmCommandMorph(commandText: string): any {
   const commandType = getSecondWordOfCommand(commandText);
   switch(commandType) {
     case NpmCommandMorph.install: 
       return await npmInstallCodemorph(commandText, '');
    default: 
      return {} 
   }
}