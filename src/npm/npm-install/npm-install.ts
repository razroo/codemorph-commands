import { extractPackageName } from "../../utils/command-search/command-search";
import { getNameAndVersion } from "../../utils/version/version";

export async function npmInstallCodemorph(commandText: string, stringToUpdate: string): Promise<string> {
  const packageName = extractPackageName(commandText);
  const {name, version} = await getNameAndVersion(packageName);
  console.log('name');
  console.log(name);
  console.log('version');
  console.log(version);
  return commandText;
}