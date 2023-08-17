import axios from "axios";

export async function getNameAndVersion(packageString: string): Promise<{ name: string, version: string}> {
  const {name, version} = extractNameAndVersion(packageString);
  if(name && version) {
    return {name, version};
  } else {
    const response = await axios.get(`https://registry.npmjs.org/${name}`);
    const data = response.data;
    const packageName = data.name;
    const packageVersion = data.version;
    return {name: packageName, version: packageVersion};
  }
}

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