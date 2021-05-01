import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | github-label', function (hooks) {
  setupRenderingTest(hooks);

  test('label is rendered with provided @label', async function (assert) {
    await render(hbs`
      <GithubLabel
        @backgroundColor="000000"
        @label="Help Wanted"
      />
    `);

    assert.strictEqual(this.element.textContent.trim(), 'Help Wanted');
  });
});
