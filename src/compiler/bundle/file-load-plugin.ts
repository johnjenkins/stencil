import type * as d from '../../declarations';
import { normalizeFsPath } from '@utils';
import type { Plugin } from 'rollup';

export const fileLoadPlugin = (fs: d.InMemoryFileSystem): Plugin => {
  return {
    name: 'fileLoadPlugin',

    load(id) {
      const fsFilePath = normalizeFsPath(id);
      if (id.endsWith('.d.ts')) {
        return '';
      }
      console.log('LOADING ', fsFilePath)
      return fs.sys.readFile(fsFilePath);
    },
  };
};
