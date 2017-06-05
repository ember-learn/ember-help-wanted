import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cell-title', 'Integration | Component | cell title', {
  integration: true
});

test('it renders', function(assert) {

  this.set('row', {
    link: 'https://github.com/emberjs/ember.js/issues/10341',
    title: 'Compatibility with ES6 class syntax'
  });
  this.render(hbs`{{cell-title row=row}}`);

  assert.equal(this.$('a').attr('href'), this.get('row.link'));
  assert.equal(this.$('a').text().trim(), this.get('row.title'));
});
