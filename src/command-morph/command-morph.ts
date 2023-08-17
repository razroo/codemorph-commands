import { getFirstWordOfCommand } from "../utils/word-search";
import { npmCommandMorph } from "../npm/npm-command-morph";
import { CommandMorph } from "./command-morph.interface";

export function morphCommand(commandText: string): any {
  const commandTool = getFirstWordOfCommand(commandText);
  switch(commandTool) {
    case CommandMorph.npm: 
      return npmCommandMorph(commandText);      
  }
}

