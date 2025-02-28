import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | github issue', function (hooks) {
  setupTest(hooks);

  test("repositoryHtml returns the GitHub repo's URL", function (assert) {
    const store = this.owner.lookup('service:store');

    const model = store.createRecord('github-issue', {
      repositoryUrl:
        'https://api.github.com/repos/ember-learn/ember-help-wanted',
    });

    assert.strictEqual(
      model.repositoryHtml,
      'https://github.com/ember-learn/ember-help-wanted',
      'We get the correct value.',
    );
  });

  test("repositoryName returns the GitHub repo's name", function (assert) {
    const store = this.owner.lookup('service:store');

    const model = store.createRecord('github-issue', {
      repositoryUrl:
        'https://api.github.com/repos/ember-learn/ember-help-wanted',
    });

    assert.strictEqual(
      model.repositoryName,
      'ember-learn/ember-help-wanted',
      'We get the correct value.',
    );
  });
});
