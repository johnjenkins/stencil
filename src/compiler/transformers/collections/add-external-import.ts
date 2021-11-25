import type * as d from '../../../declarations';
import { dirname, join, sep } from 'path';
import { isString, parsePackageJson } from '@utils';
import { parseCollection } from './parse-collection-module';
import { tsResolveModuleNamePackageJsonPath, tsResolveModuleName } from '../../sys/typescript/typescript-resolve-module';

export const addExternalImport = (
  config: d.Config,
  compilerCtx: d.CompilerCtx,
  buildCtx: d.BuildCtx,
  moduleFile: d.Module,
  containingFile: string,
  moduleId: string,
  resolveCollections: boolean
) => {
  if (!moduleFile.externalImports.includes(moduleId)) {
    moduleFile.externalImports.push(moduleId);
    moduleFile.externalImports.sort();
  }
  let isSymLink = false;
  console.log('checking!', moduleId)

  if (!resolveCollections || compilerCtx.resolvedCollections.has(moduleId)) {
    // we've already handled this collection moduleId before
    return;
  }

  let pkgJsonFilePath = tsResolveModuleNamePackageJsonPath(config, compilerCtx, moduleId, containingFile);
  console.log(pkgJsonFilePath, moduleId, '???');

  // cache that we've already parsed this
  // compilerCtx.resolvedCollections.add(moduleId);

  const module = tsResolveModuleName(config, compilerCtx, moduleId, containingFile);
  // we got ourselves a symlink! Add it to our local imports for hmr and such
  if (
    module.resolvedModule.originalPath &&
    typeof module.resolvedModule.originalPath === 'string' &&
    module.resolvedModule.resolvedFileName !== module.resolvedModule.originalPath
  ) {
    isSymLink = true;
    moduleFile.localImports.push(module.resolvedModule.originalPath);
  }

  if (pkgJsonFilePath == null) {
    return;
  }

  const realPkgJsonFilePath = config.sys.realpathSync(pkgJsonFilePath);
  if (realPkgJsonFilePath.path) {
    pkgJsonFilePath = realPkgJsonFilePath.path;
  }

  if (pkgJsonFilePath === config.packageJsonFilePath) {
    // same package silly!
    return;
  }

  // open up and parse the package.json
  // sync on purpose :(
  const pkgJsonStr = compilerCtx.fs.readFileSync(pkgJsonFilePath);
  if (pkgJsonStr == null) {
    return;
  }
  const parsedPkgJson = parsePackageJson(pkgJsonStr, pkgJsonFilePath);
  if (parsedPkgJson.diagnostic) {
    buildCtx.diagnostics.push(parsedPkgJson.diagnostic);
    return;
  }

  if (!isString(parsedPkgJson.data.collection) || !parsedPkgJson.data.collection.endsWith('.json')) {
    // this import is not a stencil collection
    return;
  }

  if (!isString(parsedPkgJson.data.types) || !parsedPkgJson.data.types.endsWith('.d.ts')) {
    // this import should have types
    return;
  }

  // this import is a stencil collection
  // let's parse it and gather all the module data about it
  // internally it'll cached collection data if we've already done this
  const collection = parseCollection(
    config,
    compilerCtx,
    buildCtx,
    moduleId,
    parsedPkgJson.filePath,
    parsedPkgJson.data
  );
  if (!collection) {
    return;
  }

  // check if we already added this collection to the build context
  const alreadyHasCollection = buildCtx.collections.some((c) => {
    return c.collectionName === collection.collectionName;
  });

  if (alreadyHasCollection) {
    // we already have this collection in our build context
    return;
  }

  // if (collection.moduleFiles && collection.moduleFiles.length && isSymLink) {

  //   moduleFile.localImports.push(...collection.moduleFiles.map(mod => {
  //     const pathParts = mod.jsFilePath.split(sep);
  //     const partIndex = pathParts.findIndex(part => part === parsedPkgJson.data.name);

  //     return join(
  //       (module.resolvedModule.originalPath as string).split(parsedPkgJson.data.name)[0],
  //       join(...pathParts.slice(partIndex))
  //     )
  //   }));
  // }

  // console.log('new collection!')

  // let's add the collection to the build context
  // buildCtx.collections.push(collection);

  if (Array.isArray(collection.dependencies)) {
    // this collection has more collections
    // let's keep digging down and discover all of them
    collection.dependencies.forEach((dependencyModuleId) => {
      const resolveFromDir = dirname(pkgJsonFilePath);
      addExternalImport(
        config,
        compilerCtx,
        buildCtx,
        moduleFile,
        resolveFromDir,
        dependencyModuleId,
        resolveCollections
      );
    });
  }
};
