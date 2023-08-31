import { determineDependencyType } from "../../utils/dependency-type/dependency-type";
import { extractPackageNames } from "../../utils/command-search/command-search";
import { getNameAndVersion } from "../../utils/version/version";
import {morphCode, EditInput} from "@codemorph/core";

export async function npmInstallCodemorph(commandText: string, packageJsonString: string): Promise<string> {
  const packageNames = extractPackageNames(commandText);
  const dependencyObject = {} as any;
  for(const packageName of packageNames) {
    const {name, version} = await getNameAndVersion(packageName);
    dependencyObject[name] = version;
  }
  
  const packageJsonParsed = JSON.parse(packageJsonString);
  const dependencyType = determineDependencyType(commandText);
  const packageJsonDependencies = packageJsonParsed && dependencyType === 'dependencies' ? packageJsonParsed.dependencies : packageJsonParsed.devDependencies;

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
          ...dependencyObject
        }
      }
    ]
  }
  
  const morphedCode = morphCode(editInput);
  return morphedCode;
}