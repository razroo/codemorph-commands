import { extractNameAndVersion } from "./version";

describe('Version', () => {
  it('should extract the package name and version if at sign in beginning', () => {
    const packageNameAndVersion = '@apollo/client@^3.3.19';
    const result = extractNameAndVersion(packageNameAndVersion);
    const expected = { name: "@apollo/client", version: "^3.3.19" };
    expect(result).toEqual(expected);
  });
});