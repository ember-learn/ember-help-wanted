import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('issues-table', 'Integration | Component | issues table', {
  integration: true
});

test('it renders', function(assert) {
  this.set('issues', []);
  this.render(hbs`{{issues-table issues=issues}}`);

  assert.equal(this.$('.lt-body tr').length, 0);
});
