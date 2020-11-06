import { click, currentURL, visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import FakeTimers from '@sinonjs/fake-timers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-help-wanted/mirage/scenarios/default';
import { module, skip, test } from 'qunit';

module('Acceptance | issues', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    loadDefaultScenario(this.server);

    this.clock = FakeTimers.install({
      now: new Date('2020-11-05T20:59:54Z'),
      shouldAdvanceTime: true,
    });
  });

  hooks.afterEach(function() {
    this.clock.uninstall();
  });


  test('Percy snapshot', async function(assert) {
    await visit('/ember-learn');
    await percySnapshot(assert);

    assert.ok(true);
  });


  test('A user can visit an issues page with help wanted issues', async function(assert) {
    await visit('/adopted-ember-addons');

    assert.strictEqual(
      currentURL(),
      '/adopted-ember-addons',
      'The user is on the issues page for adopted-ember-addons.'
    );

    assert.dom('[data-test-github-issue]')
      .exists(
        { count: 9 },
        'The user sees 9 help wanted issues in adopted-ember-addons.'
      );
  });


  test('A user can visit an issues page with no help wanted issues', async function(assert) {
    await visit('/ember-data');

    assert.strictEqual(
      currentURL(),
      '/ember-data',
      'The user is on the issues page for ember-data.'
    );

    assert.dom('[data-test-github-issue]')
      .doesNotExist('The user sees 0 help wanted issues in ember-data.');
  });


  test('A user can visit another issues page', async function(assert) {
    await visit('/adopted-ember-addons');
    await click('[data-test-link="RFCs"]');

    assert.strictEqual(
      currentURL(),
      '/RFCs',
      'The user is on the issues page for RFCs.'
    );

    assert.dom('[data-test-github-issue]')
      .exists(
        { count: 17 },
        'The user sees 17 help wanted issues in RFCs.'
      );
  });


  skip('A user can filter issues by a label', async function(assert) {
    await visit('/ember-learn');

    assert.dom('[data-test-github-issue]')
      .exists(
        { count: 65 },
        'The user sees 65 help wanted issues in ember-learn.'
      );

    await click('[data-test-button="good first issue"]');

    // TODO: Fix the bug in filtering issues
  });
});
