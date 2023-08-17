import { CommandMorph } from "../command-morph/command-morph.interface";

export function getFirstWordOfCommand(input: string): CommandMorph {
  const words = input.trim().split(/\s+/);
  return words[0] as unknown as CommandMorph;
} 

export function getSecondWordOfCommand(input: string): CommandMorph {
  const words = input.trim().split(/\s+/);
  return words[1] as unknown as CommandMorph;
} 

