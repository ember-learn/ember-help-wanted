'use strict';

module.exports = {
  app: {
    css: {
      pattern: 'assets/*.css',
      limit: '8.5KB',
      compression: 'gzip',
    },

    javascript: {
      pattern: 'assets/*.js',
      limit: '315KB',
      compression: 'gzip',
    },
  },
};
