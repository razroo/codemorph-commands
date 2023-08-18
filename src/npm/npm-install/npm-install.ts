import { determineDependencyType } from "../../utils/dependency-type/dependency-type";
import { extractPackageName } from "../../utils/command-search/command-search";
import { getNameAndVersion } from "../../utils/version/version";
import {morphCode, EditInput} from "@codemorph/core";

export async function npmInstallCodemorph(commandText: string, packageJsonString: string): Promise<string> {
  const packageName = extractPackageName(commandText);
  const {name, version} = await getNameAndVersion(packageName);
  const packageJsonParsed = JSON.parse(packageJsonString);
  const packageJsonDependencies = packageJsonParsed && packageJsonParsed.dependencies;
  const dependencyType = determineDependencyType(commandText);

  const editInput: EditInput = {
    fileType: 'json',
    fileName: 'package.json',
    fileToBeAddedTo: packageJsonString,
    edits: [
      {
        nodeType: 'editJson' as any,
        valueToModify: `/${dependencyType}`,
        codeBlock: {
          ...packageJsonDependencies,
          [name]: version
        }
      }
    ]
  }
  
  const morphedCode = morphCode(editInput);
  return morphedCode;
}