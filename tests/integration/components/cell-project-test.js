import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cell-project', 'Integration | Component | cell project', {
  integration: true
});

test('it renders', function(assert) {
  this.set('row', {
    projectLink: 'https://github.com/emberjs/ember.js',
    project: 'ember.js'
  });
  this.render(hbs`{{cell-project row=row}}`);

  assert.equal(this.$('a').attr('href'), this.get('row.projectLink'));
  assert.equal(this.$('a').text().trim(), this.get('row.project'));
});
