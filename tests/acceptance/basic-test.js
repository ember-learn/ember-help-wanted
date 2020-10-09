import { module, test } from 'qunit';
import { visit, currentURL, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import percySnapshot from '@percy/ember';

module('Acceptance | basic', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visit /learning', async function(assert) {
    assert.expect(4);

    server.createList('github-issue', 10, { state: 'open' });
    await visit('/learning');
    assert.equal(currentURL(), '/learning');

    const issues = findAll('[data-test-github-issue]');
    assert.ok(issues.length > 0, 'can list issues');

    const labels = findAll('[data-test-github-issue]:first-child .github-label');
    assert.ok(labels.length > 0, 'can list issue labels');

    const projects = findAll('[data-test-github-issue]:first-child [data-test-github-issue-project]');
    assert.ok(projects.length > 0, 'can list projects');
    await percySnapshot('Learning tab')
  });

  test('visit /', async function(assert) {
    server.createList('github-repository', 5);
    await visit('/');
    assert.equal(currentURL(), '/');
    await percySnapshot('Index')
  });

  test('total issues displayed', async function(assert) {
    assert.expect(1);
    server.createList('github-issue', 5, { state: 'open' });
    await visit('/learning');
    assert.dom('.total-issues').hasText('5 issues displayed');
  });

});
