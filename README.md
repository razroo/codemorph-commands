![Codemorph Logo](assets/codemorph-commands-logo-small.png "Codemorph - Extensible Codemod Library") ![Codemorph Logo](assets/razroo-certified-logo.png "Razroo Certified")

Codemorph Commands is an extensible, easy-to-understand, easy-to-contribute, easy-to-use **Codemod** library. Codemorph is platform agnostic and currenrly supports **npm**.

Codemorph commands allows for commands to be used in a virtual file system. For instance,
npm install react --save, will be turned into a code mod that updates the package.json 
dependencies. 

# Important Note 🌟🌟🌟🌟🌟

Being that Codemorph makes use of many system-based code modifiers, even though this library is built using ESM, we find that it affects the initial bundle size for FE application.

We highly recommend using this in either system applications or backend applications. However, FE applications using this library will experience optimization bailouts. It is therefore not recommended that this library is used with production-grade FE applications.

![Pass a star to your codemorph](https://github.com/razroo/codemorph/assets/8540141/29433c8a-9ce0-4202-94ce-fec8f00d3b78)

# How to Install Codemorph Commands

```
npm install @codemorph/commands --save
```

# How To Use Codemorph Commands
We have not implements the `filesToAffect` logic as we have for the @codemorph/core library. 
We will do soon. However, for now the assumption is that if it's a command, package.json will 
be the only files impacted.

```
const packageJson = {name: 'hello', dependencies: {}};
const stringifiedPackageJson = JSON.stringify(packageJson);
const commandText = "npm install react@18.0.0 --save"
// uses await as it pulls information from npm registry in certain scenarios
const morphedPackageJson = await morphCommand(commandText, stringifiedPackageJson);
/* 
Will return
{name: 'hello', dependencies: {react: '18.0.0'}};
*/
```