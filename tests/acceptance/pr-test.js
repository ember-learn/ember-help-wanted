import { currentURL, visit, findAll } from '@ember/test-helpers';
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
      .exists({ count: 4 }, 'The user sees 4 GitHub pull requests.');
    const rows = findAll('[data-test-github-pr]');
    const first = rows[0];
    const last = rows[rows.length - 1];
    assert
      .dom(first)
      .hasText('Update sitemap handbook 14 days ago 14 days ago');
    assert
      .dom(last)
      .hasText(
        'Update editor plugin information for VSCode, neovim, and Atom guides-source 4 months ago 19 hours ago',
      );
  });

  test('Omits PRs with WIP in the title', async function (assert) {
    await visit('/pull-requests');

    assert.strictEqual(currentURL(), '/pull-requests', 'The URL is correct.');
    assert
      .dom('[data-test-pr-table-body]')
      .doesNotIncludeText('Pick older version in to version fix');
  });
});
