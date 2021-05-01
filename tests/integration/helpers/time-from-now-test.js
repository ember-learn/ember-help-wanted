import { render } from '@ember/test-helpers';
import FakeTimers from '@sinonjs/fake-timers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | time-from-now', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.clock = FakeTimers.install({
      now: new Date('2020-11-05T20:59:54Z'),
      shouldAdvanceTime: true,
    });
  });

  hooks.afterEach(function () {
    this.clock.uninstall();
  });

  test('returns an empty string when date is undefined', async function (assert) {
    this.updatedAt = undefined;

    await render(hbs`
      <div data-test-output>
        {{time-from-now this.updatedAt}}
      </div>
    `);

    assert.dom('[data-test-output]').hasNoText('We see the correct output.');
  });

  test('returns a user-friendly string when we pass a date', async function (assert) {
    this.updatedAt = new Date('2020-11-02T20:59:54Z');

    await render(hbs`
      <div data-test-output>
        {{time-from-now this.updatedAt}}
      </div>
    `);

    assert
      .dom('[data-test-output]')
      .hasText('3 days ago', 'We see the correct output.');
  });
});
