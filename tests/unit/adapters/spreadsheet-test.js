import { moduleFor, test } from 'ember-qunit';

var data = {
  products: [
    {
      id: 1,
      project: "ember-cli-mirage",
      description: "testing",
      link: "https://github.com/samselikoff/ember-cli-mirage/issues/606",
      category: "documentation",
      notes: "not much here",
      rating: 2
    },
    {
      id: 2,
      project: "ember-cli-mirage",
      description: "add ember-suave and fix any/all javascript linting errors",
      link: "https://github.com/samselikoff/ember-cli-mirage/issues/305",
      category: "linting",
      notes: "",
      rating: 3
    },
    {
      id: 3,
      project: "ember",
      description: "The Ultimate Glimmer 2 Test Porting Guide",
      link: "https://github.com/emberjs/ember.js/issues/13127",
      category: "testing",
      notes: "",
      rating: 4
    }
  ]
};

var spreadsheetsMock = {
  fetch: function(worksheet) {
    return new Ember.RSVP.Promise(function(resolve) {
      return resolve(data[worksheet]);
    });
  }
}

moduleFor('adapter:item', 'Unit | Adapter | spreadsheet', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});

var type = {typeKey: "product"};

test('.findAll returns all results', function(assert) {
  assert.expect(1);
  var adapter = this.subject({spreadsheets: spreadsheetsMock});
  adapter.findAll({}, type).then(function(results){
    assert.equal(results, data.products);
  });
});

test('.find returns the first result with a matching ID', function(assert) {
  assert.expect(1);

  var adapter = this.subject({spreadsheets: spreadsheetsMock});
  adapter.find({}, type, 2).then(function(result){
    assert.equal(result, data.products[1]);
  });
});

test('.findQuery returns results with matching attributes', function(assert) {
  assert.expect(1);

  var adapter = this.subject({spreadsheets: spreadsheetsMock});
  adapter.findQuery({}, type, {name: "Soccer Ball"})
    .then(function(result){
      assert.deepEqual(result, [data.products[0]]);
    });
});
