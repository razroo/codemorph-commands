import { getFirstWordOfCommand } from "../utils/command-search/command-search";
import { npmCommandMorph } from "../npm/npm-command-morph";
import { CommandMorph } from "./command-morph.interface";

export async function morphCommand(commandText: string, packageJsonString: string): Promise<any> {
  const commandTool = getFirstWordOfCommand(commandText);
  switch(commandTool) {
    case CommandMorph.npm: 
      return await npmCommandMorph(commandText, packageJsonString);      
  }
}

