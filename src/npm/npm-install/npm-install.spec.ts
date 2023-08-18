import { morphCommand } from "../../command-morph/command-morph";

describe('npmInstall', () => {
  it('should return npm install with needed codemod', async() => {
    const npmInstallCommandText = 'npm install apollo-angular';
    const mockPackageJson = {
      name: 'hello', 
      dependencies: {
        "angular": "16.0.0"
      }
    };
    const stringifiedMockPackageJson = JSON.stringify(mockPackageJson);
    const result = await morphCommand(npmInstallCommandText, stringifiedMockPackageJson);
    const expected = `{
  "name": "hello",
  "dependencies": {
    "angular": "16.0.0",
    "apollo-angular": "5.0.0"
  }
}`;
    expect(result).toEqual(expected);
  });  
});