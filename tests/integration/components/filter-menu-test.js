import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filter-menu', function(hooks) {
  setupRenderingTest(hooks);

  test(`it renders and it's not empty`, async function(assert) {
    await render(hbs`<FilterMenu />`);
    assert.notEqual(this.element.textContent.trim(), '');
  });

  test('buttons were rendered', async function(assert) {
    await render(hbs`<FilterMenu />`);
    assert.ok(findAll('[data-test-link]').length > 0);
  });
});
