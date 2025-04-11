import { setupMirage as _setupMirage } from 'ember-mirage/test-support';
import mirageConfig from 'ember-help-wanted/tests/mirage/config';

export function setupMirage(hooks, options = {}) {
  options.createServer = options.createServer || mirageConfig;

  return _setupMirage(hooks, options);
}
