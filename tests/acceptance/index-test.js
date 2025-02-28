import { click, currentURL, visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import FakeTimers from '@sinonjs/fake-timers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import loadDefaultScenario from 'ember-help-wanted/mirage/scenarios/default';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);

    this.clock = FakeTimers.install({
      now: new Date('2020-11-05T20:59:54Z'),
      shouldAdvanceTime: true,
    });
  });

  hooks.afterEach(function () {
    this.clock.uninstall();
  });

  test('Percy snapshot', async function (assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('A user can visit the index page', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'The URL is correct.');

    assert
      .dom('[data-test-github-repository]')
      .exists({ count: 17 }, 'The user sees 17 GitHub repositories.');
  });

  test('Each repository card shows the correct content', async function (assert) {
    await visit('/');

    // Check guides-source repository as a sample
    assert
      .dom('[data-test-github-repository="guides-source"]')
      .hasText('guides-source Forks: 376', 'The card content is correct.');

    assert
      .dom('[data-test-github-repository="guides-source"] a')
      .hasAttribute(
        'href',
        'https://github.com/ember-learn/guides-source/issues?q=is%3Aissue+is%3Aopen+label%3A%22Help+Wanted%22+sort%3Acreate-date',
        'The redirect URL is correct.',
      );
  });

  test('A user can navigate to the issues page', async function (assert) {
    await visit('/');
    await click('[data-test-link="adopted-ember-addons"]');

    assert.strictEqual(
      currentURL(),
      '/adopted-ember-addons',
      'The URL is correct.',
    );

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 9 }, 'The user sees 9 GitHub issues.');
  });
});
