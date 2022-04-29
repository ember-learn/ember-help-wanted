import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import FakeTimers from '@sinonjs/fake-timers';

module('Integration | Helper | luxon-date-formatter', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.clock = FakeTimers.install({
      now: new Date('2022-04-28T13:59:54Z'),
      shouldAdvanceTime: true,
    });
  });

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '2022-04-19');

    await render(hbs`{{luxon-date-formatter this.inputValue}}`);

    assert.dom(this.element).hasText('9 days ago');
  });
});
