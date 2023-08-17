import { getFirstWordOfCommand } from "./command-morph";

describe('commandMorph', () => {
  it('should get the first word of the command tool', () => {
    const commandText = 'npm install text';
    const result = getFirstWordOfCommand(commandText);
    const expected = 'npm';
    expect(result).toEqual(expected);
  });  
});