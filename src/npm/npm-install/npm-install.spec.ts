import { morphCommand } from "../../command-morph/command-morph";

describe('npmInstall', () => {
  it('should return npm install with needed codemod', async() => {
    const npmInstallCommandText = 'npm install apollo-angular@5.0.0 react --save';
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
    "apollo-angular": "5.0.0",
    "react": "18.2.0"
  }
}`;
    expect(result).toEqual(expected);
  });  

  it('should return npm install with needed codemod if saving as dev dependency', async() => {
    const npmInstallCommandText = 'npm install apollo-angular@5.0.0 react@18.2.0 --save-dev';
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
    "angular": "16.0.0"
  },
  "devDependencies": {
    "apollo-angular": "5.0.0",
    "react": "18.2.0"
  }
}`;
    expect(result).toEqual(expected);
  });  
});