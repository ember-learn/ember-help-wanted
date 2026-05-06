import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-help-wanted/tests/helpers';
import percySnapshot from '@percy/ember';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting root', async function (assert) {
    await visit('/');

    assert.dom('h1').hasText('Hi there');
    await percySnapshot(`root`)
  });
});
