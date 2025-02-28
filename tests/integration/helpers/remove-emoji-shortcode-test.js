import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Helper | remove-emoji-shortcode', function (hooks) {
  setupRenderingTest(hooks);

  test('returns an empty string when label is undefined', async function (assert) {
    await render(hbs`
      <div data-test-output>
        {{!--
          this lint requires manually adding the () around the helper, which is
          not supported in ember 3.28 --}}
        {{! template-lint-disable no-curly-component-invocation}}
        {{(remove-emoji-shortcode)}}
      </div>
    `);

    assert.dom('[data-test-output]').hasNoText('We see the correct output.');
  });

  test("returns the label unmodified when the label doesn't include emoji shortcodes", async function (assert) {
    await render(hbs`
      <div data-test-output>
        {{remove-emoji-shortcode "help wanted"}}
      </div>
    `);

    assert
      .dom('[data-test-output]')
      .hasText('help wanted', 'We see the correct output.');
  });

  test('removes an emoji shortcode when the label includes them', async function (assert) {
    await render(hbs`
      <div data-test-output>
        {{remove-emoji-shortcode ":pray: help wanted"}}
      </div>
    `);

    assert
      .dom('[data-test-output]')
      .hasText('help wanted', 'We see the correct output.');
  });

  test('removes all emoji shortcodes when the label includes them', async function (assert) {
    await render(hbs`
      <div data-test-output>
        {{remove-emoji-shortcode "  :hamster: help  :revolving_hearts:  wanted :pray::pray:  "}}
      </div>
    `);

    assert
      .dom('[data-test-output]')
      .hasText('help wanted', 'We see the correct output.');
  });
});
