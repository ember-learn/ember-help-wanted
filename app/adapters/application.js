import {  Adapter }
from 'ember-pouch';
import PouchDB from 'pouchdb';
import config from 'ember-hitlist/config/environment';
import Ember from 'ember';

const { assert, isEmpty } = Ember;

// uncomment to enable debugging of PouchDB
// PouchDB.debug.enable('*');

function createDb() {
  let {
    localDb, remoteDb
  } = config.emberPouch;

  assert('emberPouch.localDb must be set', !isEmpty(localDb));

  let db = new PouchDB(localDb);

  if (config.emberPouch.remoteDb) {
    let remote = new PouchDB(remoteDb);

    db.sync(remote, {
      live: true,
      retry: true
    });
  }

  return db;
}

export default Adapter.extend({
  init() {
      this._super(...arguments);
      this.set('db', createDb());
    }
});

