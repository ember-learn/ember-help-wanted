import { setupMirage as _setupMirage } from 'ember-cli-mirage/test-support';

import mirageConfig from 'myApp/mirage/config';

export function setupMirage(hooks, options) {
  options = options || {};
  options.makeServer = options.makeServer || mirageConfig;
  return _setupMirage(hooks, options);
}
