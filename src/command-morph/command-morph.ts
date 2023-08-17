import { npmCommandMorph } from "../npm/npm-command-morph";
import { CommandMorph } from "./command-morph.interface";

export function morphCommand(commandText: string): any {
  const commandTool = getFirstWordOfCommand(commandText);
  switch(commandTool) {
    case CommandMorph.npm: 
      return npmCommandMorph(commandText);      
  }
}

export function getFirstWordOfCommand(input: string): CommandMorph {
  const words = input.trim().split(/\s+/);
  return words[0] as unknown as CommandMorph;
}