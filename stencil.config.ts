import { Config } from '@stencil/core';
import { less } from '@stencil/less';

export const config: Config = {
  namespace: 'aui',
  plugins: [
    less()
  ],
  globalStyle: 'src/global/app.less',
  enableCache: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
