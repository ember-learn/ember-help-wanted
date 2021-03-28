import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
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

  test('label is rendered with provided @backgroundColor', async function (assert) {
    await render(hbs`
      <GithubLabel
        @backgroundColor="000000"
        @label="Help Wanted"
      />
    `);

    assert.strictEqual(
      find('.github-label').style.backgroundColor,
      'rgb(0, 0, 0)'
    );
  });

  test('label is rendered with a text color opposite to the provided @backgroundColor', async function (assert) {
    await render(hbs`
      <GithubLabel
        @backgroundColor="000000"
        @label="Help Wanted"
      />
    `);

    assert.strictEqual(find('.github-label').style.color, 'rgb(255, 255, 255)');

    await render(hbs`
      <GithubLabel
        @backgroundColor="FFFFFF"
        @label="Help Wanted"
      />
    `);

    assert.strictEqual(find('.github-label').style.color, 'rgb(0, 0, 0)');
  });
});
