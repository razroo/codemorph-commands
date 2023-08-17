import { morphCommand } from "../../command-morph/command-morph";

describe('npmInstall', () => {
  it('should return npm install with needed codemod', () => {
    const npmInstallCommandText = 'npm install test';
    const result = morphCommand(npmInstallCommandText);
    const expected = 'npm install test';
    expect(result).toEqual(expected);
  });  
});