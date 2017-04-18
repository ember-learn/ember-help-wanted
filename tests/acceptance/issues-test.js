import { test } from 'qunit';
import moduleForAcceptance from 'ember-help-wanted/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | issues', {
  beforeEach() {
    server.createList('issue', 3);
  }
});

test('visiting / will display open issues', function(assert) {
  visit('/');

  andThen(function() {
    let items = find('.issues .issue');
    assert.equal(items.length, 3, 'Number of issues');
    let project = find('.issues .issue:eq(0) .issue-project');
    assert.ok(['ember.js', 'guides', 'ember-cli', 'data'].includes(project.text()), 'display correct project name');
  });
});
