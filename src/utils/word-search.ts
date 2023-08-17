import { NpmCommandMorph } from "src/npm/interfaces/npm-command-morph.interface";
import { CommandMorph } from "../command-morph/command-morph.interface";

export function getFirstWordOfCommand(commandText: string): CommandMorph {
  const words = commandText.trim().split(/\s+/);
  return words[0] as unknown as CommandMorph;
} 

export function getSecondWordOfCommand(commandText: string): NpmCommandMorph {
  const words = commandText.trim().split(/\s+/);
  return words[1] as unknown as NpmCommandMorph;
} 

