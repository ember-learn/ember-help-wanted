import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pull-requests', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pull-requests');
    assert.ok(route);
  });
});
