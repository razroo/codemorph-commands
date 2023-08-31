import { NpmCommandMorph } from "../../npm/interfaces/npm-command-morph.interface";
import { CommandMorph } from "../../command-morph/command-morph.interface";

export function getFirstWordOfCommand(commandText: string): CommandMorph {
  const words = commandText.trim().split(/\s+/);
  return words[0] as unknown as CommandMorph;
} 

export function getSecondWordOfCommand(commandText: string): NpmCommandMorph {
  const words = commandText.trim().split(/\s+/);
  return words[1] as unknown as NpmCommandMorph;
} 

function containsDoubleAmpersand(input: string): boolean {
  const regex = /&&/;
  return regex.test(input);
}

export function extractPackageNames(commandText: string): string[] {
  const commandTextCleaned = commandText.replace(/npm/g, '')
    .replace(/install/g, '')
    .replace(/--save-dev/g, '')
    .replace(/--save/g, '')
    .replace(/;/g, '')
    .trim();
  
  if(containsDoubleAmpersand(commandTextCleaned)) {
    return commandTextCleaned.split('&&').map(packageName => packageName.trim());
  } else {
    return commandTextCleaned.split(' ');
  }
}



