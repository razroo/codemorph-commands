import { extractNameAndVersion } from "./version";

describe('Version', () => {
  it('should extract the package name and version if YES at sign in beginning', () => {
    const packageNameAndVersion = '@apollo/client@^3.3.19';
    const result = extractNameAndVersion(packageNameAndVersion);
    const expected = { name: "@apollo/client", version: "^3.3.19" };
    expect(result).toEqual(expected);
  });

  it('should extract the package name and version if NO at sign in beginning', () => {
    const packageNameAndVersion = 'apollo-angular@^3.0.1';
    const result = extractNameAndVersion(packageNameAndVersion);
    const expected = { name: "apollo-angular", version: "^3.0.1" };
    expect(result).toEqual(expected);
  });
});