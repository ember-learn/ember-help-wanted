'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    emberData: {
      deprecations: {
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false,
      },
    },
    'ember-scoped-css': {
      layerName: 'scoped-components',
    },
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAppPaths: ['mirage'],
  });
};
