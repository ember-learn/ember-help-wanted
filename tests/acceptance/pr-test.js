import { currentURL, visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import FakeTimers from '@sinonjs/fake-timers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import loadDefaultScenario from 'ember-help-wanted/mirage/scenarios/default';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | pull-requests', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);

    this.clock = FakeTimers.install({
      now: new Date('2022-04-01T13:59:54Z'),
      shouldAdvanceTime: true,
    });
  });

  hooks.afterEach(function () {
    this.clock.uninstall();
  });

  test('Percy snapshot', async function (assert) {
    await visit('/pull-requests');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('A user can visit the pull-requests page', async function (assert) {
    await visit('/pull-requests');

    assert.strictEqual(currentURL(), '/pull-requests', 'The URL is correct.');

    assert
      .dom('[data-test-github-pr]')
      .exists({ count: 5 }, 'The user sees 5 GitHub pull requests.');
  });

  /*
   * Make sure it is sorted
   * Make sure title, repo, opened, last updated all show up
   * Make sure "WIP in title" issues are omitted
   * Make sure the date is formatted nicely
   */
});
