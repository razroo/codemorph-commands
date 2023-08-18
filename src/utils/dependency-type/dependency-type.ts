export function determineDependencyType(commandText: string): string | undefined {
  const regexPattern = /--save(-dev|-optional)?/;
  const match = commandText.match(regexPattern);
  const saveFlag = match && match[0];
  if(match) {
    let saveLocation: string;
    switch (saveFlag) {    
      case '--save-dev':
        saveLocation = 'devDependencies';
        break;
      case '--save-optional':
        saveLocation = 'optionalDependencies';
        break;
      default:
        saveLocation = 'dependencies';
        break;
    }
    return saveLocation;
  } else {
    return 'dependencies';
  }
}