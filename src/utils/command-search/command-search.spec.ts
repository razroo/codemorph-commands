import { extractPackageName, getFirstWordOfCommand, getSecondWordOfCommand } from "./command-search";

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
    it('should get the second word of the command tool', () => {
      const commandText = 'npm install text';
      const result = getSecondWordOfCommand(commandText);
      const expected = 'install';
      expect(result).toEqual(expected);
    });  
  });

  describe('extractPackageName', () => {
    it('should extract the package name from a command', () => {
      const sampleCommand = 'npm install apollo-angular';
      const result = extractPackageName(sampleCommand);
      expect(result).toEqual('apollo-angular');
    });

    it('should extract the package name from a command if has semicolon in front of it', () => {
      const sampleCommand = 'npm install apollo-angular;';
      const result = extractPackageName(sampleCommand);
      expect(result).toEqual('apollo-angular');
    });

    it('should extract the package name from a command if has version and keep version in tact', () => {
      const sampleCommand = 'npm install apollo-angular@^3.0.1;';
      const result = extractPackageName(sampleCommand);
      expect(result).toEqual('apollo-angular@^3.0.1');
    });
  })
  
});