import {
  Serializer
}
from 'ember-pouch';

export
default Serializer.extend({

  serialize(snapshot, options) {
    let json = this._super(...arguments);
    let githubDataAsString = JSON.stringify(snapshot.attr('githubData'));
    json.githubData = githubDataAsString;
    return json;
  },
  normalize(typeClass, hash) {
    let o = this._super(...arguments);
    let githubDataAsObject = o.data.attributes.githubData;
    o.data.attributes.githubData = JSON.parse(githubDataAsObject);
    return o;
  }
});

