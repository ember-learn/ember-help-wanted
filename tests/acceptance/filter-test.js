import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | filter', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('filter using labels', async function(assert) {
    assert.expect(4);

    server.createList('github-issue', 5, { labels: [{ id: 1, name: 'good first issue', color: '84b6eb' }] });
    server.createList('github-issue', 5, { labels: [{ id: 2, name: 'hacktoberfest', color: '1433eb' }] });

    await visit('/learning');
    assert.dom('.current-filter-label').doesNotExist();
    assert.dom('[data-test-github-issue]').exists({ count: 10 });
    // TODO: use semantic selections / data-test-*
    await click('[data-test-github-issue]:first-child [data-test-github-issue-filter-label]');
    assert.dom('[data-test-github-issue]').exists({ count: 5 });
    await click('.current-filter-label button');
    assert.dom('[data-test-github-issue]').exists({ count: 10 });
  });
});
