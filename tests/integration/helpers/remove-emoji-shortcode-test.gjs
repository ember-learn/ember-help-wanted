import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import removeEmojiShortcode from '../../../app/helpers/remove-emoji-shortcode';

module('Integration | Helper | remove-emoji-shortcode', function (hooks) {
  setupRenderingTest(hooks);

  test('returns an empty string when label is undefined', async function (assert) {
    await render(
      <template>
        <div data-test-output>
          {{(removeEmojiShortcode)}}
        </div>
      </template>,
    );

    assert.dom('[data-test-output]').hasNoText('We see the correct output.');
  });

  test("returns the label unmodified when the label doesn't include emoji shortcodes", async function (assert) {
    await render(
      <template>
        <div data-test-output>
          {{removeEmojiShortcode "help wanted"}}
        </div>
      </template>,
    );

    assert
      .dom('[data-test-output]')
      .hasText('help wanted', 'We see the correct output.');
  });

  test('removes an emoji shortcode when the label includes them', async function (assert) {
    await render(
      <template>
        <div data-test-output>
          {{removeEmojiShortcode ":pray: help wanted"}}
        </div>
      </template>,
    );

    assert
      .dom('[data-test-output]')
      .hasText('help wanted', 'We see the correct output.');
  });

  test('removes all emoji shortcodes when the label includes them', async function (assert) {
    await render(
      <template>
        <div data-test-output>
          {{removeEmojiShortcode
            "  :hamster: help  :revolving_hearts:  wanted :pray::pray:  "
          }}
        </div>
      </template>,
    );

    assert
      .dom('[data-test-output]')
      .hasText('help wanted', 'We see the correct output.');
  });
});
