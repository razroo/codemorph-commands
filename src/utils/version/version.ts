// getNameAndVersion() {

// }

export function extractNameAndVersion(packageString: string): { name: string, version: string } | null {
  const regex = /^(@?[^@]+)@(.+)$/;
  const matches = packageString.match(regex);

  console.log('matches');
  console.log(matches);
  console.log('packageString');
  console.log(packageString);

  if (matches && matches.length === 3) {
    const name = matches[1];
    const version = matches[2];
    return { name, version };
  }

  return null;
}