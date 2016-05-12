import { moduleFor } from 'ember-qunit';
import {
  skip
} from 'qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
skip('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
