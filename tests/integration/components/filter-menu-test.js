import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filter-menu', function(hooks) {
  setupRenderingTest(hooks);

  test('renders 11 links', async function(assert) {
    await render(hbs`
      <FilterMenu />
    `);

    const links = findAll('[data-test-link]');

    assert.strictEqual(
      links.length,
      11,
      'We see 11 links.'
    );

    assert.dom(links[0])
      .hasText(
        'adopted-ember-addons',
        'We see the correct 1st link.'
      );

    assert.dom(links[links.length - 1])
      .hasText(
        'RFCs',
        'We see the correct last link.'
      );
  });
});
