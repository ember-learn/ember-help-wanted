import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | label-with-emoji', function (hooks) {
  setupRenderingTest(hooks);

  test('it translates the label', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{label-with-emoji "help wanted :sos:"}}`);

    assert.strictEqual(this.element.textContent.trim(), 'help wanted');

    assert.strictEqual(
      find('img').src,
      'https://assets-cdn.github.com/images/icons/emoji/unicode/1f198.png?v8'
    );
  });
});
