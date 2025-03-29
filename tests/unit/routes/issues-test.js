import { setupMirage } from 'ember-mirage/test-support';
import loadDefaultScenario from 'ember-help-wanted/mirage/scenarios/default';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | issues', function (hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    loadDefaultScenario(this.server);

    this.route = this.owner.lookup('route:issues');
  });

  module('findIssues', function () {
    test('returns an empty array when category is unknown', async function (assert) {
      const issues = await this.route.findIssues();

      assert.strictEqual(issues.length, 0, 'We get 0 GitHub issues.');
    });

    test('returns an array when category is known', async function (assert) {
      const issues = await this.route.findIssues('ember-learn');

      assert.strictEqual(issues.length, 65, 'We get 65 GitHub issues.');
    });
  });
});
