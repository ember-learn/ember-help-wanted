import { setupMirage } from 'ember-mirage/test-support';
import loadDefaultScenario from 'ember-help-wanted/mirage/scenarios/default';
import filterIssues from 'ember-help-wanted/utils/filter-issues';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Utility | filter-issues', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    loadDefaultScenario(this.server);

    const route = this.owner.lookup('route:issues');

    this.issues = await route.findIssues('ember-learn');
  });

  module('filterIssues', function () {
    test('returns an array when label and query are undefined', function (assert) {
      const filteredIssues = filterIssues(this.issues, {
        label: undefined,
        query: undefined,
      });

      assert.strictEqual(filteredIssues.length, 65, 'We get 65 GitHub issues.');
    });

    test('returns an array when label is defined', function (assert) {
      const filteredIssues = filterIssues(this.issues, {
        label: 'good first issue',
        query: undefined,
      });

      assert.strictEqual(filteredIssues.length, 15, 'We get 15 GitHub issues.');
    });

    test('returns an array when query is defined', function (assert) {
      const filteredIssues = filterIssues(this.issues, {
        label: undefined,
        query: 'guides',
      });

      assert.strictEqual(filteredIssues.length, 9, 'We get 9 GitHub issues.');
    });

    test('returns an array when label and query are defined', function (assert) {
      const filteredIssues = filterIssues(this.issues, {
        label: 'good first issue',
        query: 'guides',
      });

      assert.strictEqual(filteredIssues.length, 3, 'We get 3 GitHub issues.');
    });
  });
});
