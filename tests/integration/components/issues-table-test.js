import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | issues table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', function(assert) {
    this.set('issues', []);
    this.render(hbs`{{issues-table issues=issues}}`);

    assert.equal(this.$('.lt-body tr').length, 0);
  });
});
