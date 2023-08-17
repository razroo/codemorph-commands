import { npmCommandMorph } from "src/npm/npm-command-morph";
import { CommandMorph } from "./command-morph.interface";

export function morphCommand(commandTool: CommandMorph, commandText: string): any {
  switch(commandTool) {
    case CommandMorph.npm: 
      return npmCommandMorph(commandText);      
  }
}