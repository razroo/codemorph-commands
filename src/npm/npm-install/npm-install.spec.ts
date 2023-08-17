import { morphCommand } from "../../command-morph/command-morph";

describe('npmInstall', () => {
  it('should return npm install with needed codemod', async() => {
    const npmInstallCommandText = 'npm install apollo-angular';
    const mockPackageJson = {name: 'hello', dependencies: []};
    const stringifiedMockPackageJson = JSON.stringify(mockPackageJson);
    const result = await morphCommand(npmInstallCommandText, stringifiedMockPackageJson);
    const expected = 'npm install apollo-angular';
    expect(result).toEqual(expected);
  });  
});