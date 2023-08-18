import { determineDependencyType } from "./dependency-type";

describe('determineDependencyType', () => {
  it('should return dev dependency type based on the command text', () => {
    const commandText = 'npm install @angular/core react --save-dev';
    const result = determineDependencyType(commandText);
    expect(result).toEqual('devDependencies')
  });

  it('should return dependencies type based on --save flag', () => {
    const commandText = 'npm install @angular/core react --save';
    const result = determineDependencyType(commandText);
    expect(result).toEqual('dependencies');
  });
  
  it('should return optionalDependencies type based on --save-optional flag', () => {
    const commandText = 'npm install @angular/core react --save-optional';
    const result = determineDependencyType(commandText);
    expect(result).toEqual('optionalDependencies');
  });

  it('should return dependencies if no dependency type', () => {
    const commandText = 'npm install @angular/core react';
    const result = determineDependencyType(commandText);
    expect(result).toEqual('dependencies');
  });
});