import { click, currentURL, find, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import loadDefaultScenario from 'ember-help-wanted/mirage/scenarios/default';
import { module, test } from 'qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    loadDefaultScenario(this.server);
  });


  test('A a user can visit the index page', async function(assert) {
    await visit('/');

    assert.strictEqual(
      currentURL(),
      '/',
      'The user is on the index page.'
    );

    assert.dom('[data-test-github-repository]')
      .exists(
        { count: 17 },
        'The user sees 17 repos with help wanted issues.'
      );
  });


  test('Each repository card shows the correct content', async function(assert) {
    await visit('/');

    // Check guides-source repository as a representative
    const repository = find('[data-test-github-repository="guides-source"]');

    assert.dom(repository)
      .hasText(
        'guides-source Forks: 376',
        'The card content is correct.'
      );

    assert.dom('a', repository)
      .hasAttribute(
        'href',
        'https://github.com/ember-learn/guides-source/issues?q=is%3Aissue+is%3Aopen+label%3A%22Help+Wanted%22+sort%3Acreate-date',
        'The redirect URL is correct.'
      );
  });


  test('A user can visit the issues page', async function(assert) {
    await visit('/');
    await click('[data-test-link="adopted-ember-addons"]');

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
});
