import { click, currentURL, fillIn, visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import FakeTimers from '@sinonjs/fake-timers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import loadDefaultScenario from 'ember-help-wanted/mirage/scenarios/default';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | issues', function (hooks) {
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
    await visit('/ember-learn');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('A user can visit the issues page (no filters)', async function (assert) {
    await visit('/ember-learn');

    assert.strictEqual(currentURL(), '/ember-learn', 'The URL is correct.');

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 65 }, 'The user sees 65 GitHub issues.');
  });

  test('A user can visit the issues page (label filter)', async function (assert) {
    await visit('/ember-learn?label=good%20first%20issue');

    assert.strictEqual(
      currentURL(),
      '/ember-learn?label=good%20first%20issue',
      'The URL is correct.',
    );

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 15 }, 'The user sees 15 GitHub issues.');
  });

  test('A user can visit the issues page (title filter)', async function (assert) {
    await visit('/ember-learn?query=guides');

    assert.strictEqual(
      currentURL(),
      '/ember-learn?query=guides',
      'The URL is correct.',
    );

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('guides', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 9 }, 'The user sees 9 GitHub issues.');
  });

  test('A user can visit the issues page (title and label filters)', async function (assert) {
    await visit('/ember-learn?label=good%20first%20issue&query=guides');

    assert.strictEqual(
      currentURL(),
      '/ember-learn?label=good%20first%20issue&query=guides',
      'The URL is correct.',
    );

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('guides', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 3 }, 'The user sees 3 GitHub issues.');
  });

  test('A user can navigate to another issues page', async function (assert) {
    await visit('/adopted-ember-addons');
    await click('[data-test-link="RFCs"]');

    assert.strictEqual(currentURL(), '/RFCs', 'The URL is correct.');

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 17 }, 'The user sees 17 GitHub issues.');
  });

  test('A user can filter issues by label', async function (assert) {
    await visit('/ember-learn');
    await click('[data-test-button="good first issue"]');

    assert.strictEqual(
      currentURL(),
      '/ember-learn?label=good%20first%20issue',
      'The URL is correct.',
    );

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 15 }, 'The user sees 15 GitHub issues.');

    await percySnapshot(assert);
  });

  test('A user can clear the label filter', async function (assert) {
    await visit('/ember-learn');
    await click('[data-test-button="good first issue"]');
    await click('[data-test-button="Clear Filter"]');

    assert.strictEqual(currentURL(), '/ember-learn', 'The URL is correct.');

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 65 }, 'The user sees 65 GitHub issues.');
  });

  test('A user can filter issues by title', async function (assert) {
    await visit('/ember-learn');
    await fillIn('[data-test-field="Keyword"]', 'guides');
    await click('[data-test-button="Search"]');

    assert.strictEqual(
      currentURL(),
      '/ember-learn?query=guides',
      'The URL is correct.',
    );

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('guides', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 9 }, 'The user sees 9 GitHub issues.');

    await percySnapshot(assert);
  });

  test('A user can clear the title filter', async function (assert) {
    await visit('/ember-learn');
    await fillIn('[data-test-field="Keyword"]', 'guides');
    await click('[data-test-button="Search"]');
    await fillIn('[data-test-field="Keyword"]', '');
    await click('[data-test-button="Search"]');

    assert.strictEqual(currentURL(), '/ember-learn', 'The URL is correct.');

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 65 }, 'The user sees 65 GitHub issues.');
  });

  test('A user can filter issues by title and label', async function (assert) {
    await visit('/ember-learn');
    await fillIn('[data-test-field="Keyword"]', 'guides');
    await click('[data-test-button="Search"]');
    await click('[data-test-button="good first issue"]');

    assert.strictEqual(
      currentURL(),
      '/ember-learn?label=good%20first%20issue&query=guides',
      'The URL is correct.',
    );

    assert
      .dom('[data-test-field="Keyword"]')
      .hasValue('guides', 'The user sees the correct value for Keyword.');

    assert
      .dom('[data-test-github-issue]')
      .exists({ count: 3 }, 'The user sees 3 GitHub issues.');

    await percySnapshot(assert);
  });
});
