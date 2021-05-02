import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | issues', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:issues');

    assert.ok(route);
  });
});
