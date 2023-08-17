import { getFirstWordOfCommand, getSecondWordOfCommand } from "./word-search";

describe('WordSearch', () => {
  describe('getFirstWordOfCommand', () => {
    it('should get the first word of the command tool', () => {
      const commandText = 'npm install text';
      const result = getFirstWordOfCommand(commandText);
      const expected = 'npm';
      expect(result).toEqual(expected);
    });  
  });  

  describe('getSecondWordOfCommand', () => {
    it('should get the first word of the command tool', () => {
      const commandText = 'npm install text';
      const result = getSecondWordOfCommand(commandText);
      const expected = 'install';
      expect(result).toEqual(expected);
    });  
  });
  
});