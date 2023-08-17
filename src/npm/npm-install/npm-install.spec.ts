import { morphCommand } from "../../command-morph/command-morph";

describe('npmInstall', () => {
  it('should return npm install with needed codemod', async() => {
    const npmInstallCommandText = 'npm install apollo-angular';
    const result = await morphCommand(npmInstallCommandText);
    const expected = 'npm install apollo-angular';
    expect(result).toEqual(expected);
  });  
});