import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | github-label', function(hooks) {
  setupRenderingTest(hooks);

  test('label is rendered with a text color opposite to the background color', async function(assert) {

    await render(hbs`
      {{github-label label="Help Wanted" labelColor="000000"}}
    `);
    assert.equal(this.element.textContent.trim(), 'Help Wanted');
    assert.equal(find('.github-label').style.color, 'rgb(255, 255, 255)');

    await render(hbs`
      {{github-label label="Help Wanted" labelColor="FFFFFF"}}
    `);
    assert.equal(find('.github-label').style.color, 'rgb(0, 0, 0)');
  });
});
