import { extractPackageName } from "../../utils/command-search/command-search";
import { getNameAndVersion } from "../../utils/version/version";
import {morphCode, EditInput} from "@codemorph/core";

export async function npmInstallCodemorph(commandText: string, packageJsonString: string): Promise<string> {
  const packageName = extractPackageName(commandText);
  const {name, version} = await getNameAndVersion(packageName);
  const packageJsonParsed = JSON.parse(packageJsonString);
  const packageJsonDependencies = packageJsonParsed && packageJsonParsed.dependencies;

  const editInput: EditInput = {
    fileType: 'json',
    fileName: 'package.json',
    fileToBeAddedTo: packageJsonString,
    edits: [
      {
        nodeType: 'editJson' as any,
        valueToModify: '/dependencies',
        codeBlock: {
          ...packageJsonDependencies,
          [name]: version
        }
      }
    ]
  }
  
  const morphedCode = morphCode(editInput);
  console.log('name');
  console.log(name);
  console.log('version');
  console.log(version);
  return morphedCode;
}