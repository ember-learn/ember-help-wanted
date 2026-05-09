import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import FakeTimers from '@sinonjs/fake-timers';
import luxonDateFormatter from '../../../app/helpers/luxon-date-formatter';

module('Integration | Helper | luxon-date-formatter', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.clock = FakeTimers.install({
      now: new Date('2022-04-28T13:59:54Z'),
      shouldAdvanceTime: true,
    });
  });

  test('it renders', async function (assert) {
    const inputValue = '2022-04-19';

    await render(<template>{{luxonDateFormatter inputValue}}</template>);

    assert.dom(this.element).hasText('9 days ago');
  });
});
