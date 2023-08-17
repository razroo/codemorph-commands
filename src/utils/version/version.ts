// getNameAndVersion() {

// }

export function extractNameAndVersion(packageString: string): { name: string, version: string | undefined } {
  const regex = /^(@?[^@]+)@(.+)$/;
  const matches = packageString.match(regex);

  if (matches && matches.length === 3) {
    const name = matches[1];
    const version = matches[2];
    return { name, version };
  } else {
    return {name: packageString, version: undefined};
  }
}