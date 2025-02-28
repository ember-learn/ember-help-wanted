import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | issues', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.controller = this.owner.lookup('controller:issues');
  });

  module('clearMessage', function () {
    test('appends label to the accessibility-friendly string', function (assert) {
      assert.strictEqual(
        this.controller.clearMessage,
        'Clear search filter ',
        'We get the correct value. (1)',
      );

      this.controller.label = 'help wanted';

      assert.strictEqual(
        this.controller.clearMessage,
        'Clear search filter help wanted',
        'We get the correct value. (2)',
      );
    });
  });

  module('githubIssuesSorted', function () {
    test('sorts issues by updatedAt in descending order', function (assert) {
      assert.deepEqual(
        this.controller.githubIssuesSorted.map(({ id }) => id),
        [],
        'We get the correct value. (1)',
      );

      this.controller.model = [
        {
          id: '1',
          updatedAt: new Date('August 12, 2020'),
        },
        {
          id: '2',
          updatedAt: new Date('September 5, 2019'),
        },
        {
          id: '3',
          updatedAt: new Date('January 30, 2021'),
        },
      ];

      assert.deepEqual(
        this.controller.githubIssuesSorted.map(({ id }) => id),
        ['3', '1', '2'],
        'We get the correct value. (2)',
      );
    });
  });
});
