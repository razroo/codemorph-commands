import { getNameAndVersion } from "./version";

describe('Version', () => {
  describe('getNameAndVersion', () => {
    it('should extract the package name and version if YES at sign in beginning', async() => {
      const packageNameAndVersion = '@apollo/client@^3.3.19';
      const result = await getNameAndVersion(packageNameAndVersion);
      const expected = { name: "@apollo/client", version: "^3.3.19" };
      expect(result).toEqual(expected);
    });
  
    it('should extract the package name and version if NO at sign in beginning', async() => {
      const packageNameAndVersion = 'apollo-angular@^3.0.1';
      const result = await getNameAndVersion(packageNameAndVersion);
      const expected = { name: "apollo-angular", version: "^3.0.1" };
      expect(result).toEqual(expected);
    });
  
    it('should still extract the package name if no version', async() => {
      const packageNameAndVersion = 'apollo-angular';
      const result = await getNameAndVersion(packageNameAndVersion);
      const expected = { name: "apollo-angular", version: undefined };
      expect(result.name).toEqual("apollo-angular");
      expect(result.version).not.toEqual(undefined);
    });
  });  
});