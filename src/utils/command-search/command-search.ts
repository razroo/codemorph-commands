import { NpmCommandMorph } from "src/npm/interfaces/npm-command-morph.interface";
import { CommandMorph } from "../../command-morph/command-morph.interface";

export function getFirstWordOfCommand(commandText: string): CommandMorph {
  const words = commandText.trim().split(/\s+/);
  return words[0] as unknown as CommandMorph;
} 

export function getSecondWordOfCommand(commandText: string): NpmCommandMorph {
  const words = commandText.trim().split(/\s+/);
  return words[1] as unknown as NpmCommandMorph;
} 

export function extractPackageName(installCommand: string): string {
  const matchesWithVersion = installCommand.match(/npm\s+install\s+([\w-]+@[\w.^-]+)/);
  const matchesWithoutVersion = installCommand.match(/npm\s+install\s+([\w-]+)/);

  if (matchesWithVersion && matchesWithVersion.length >= 2) {
    return matchesWithVersion[1];
  } else if (matchesWithoutVersion && matchesWithoutVersion.length >= 2) {
    return matchesWithoutVersion[1];
  }

  return '';
}

