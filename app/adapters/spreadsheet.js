import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  spreadsheets: Ember.inject.service(),

  findAll: function(store, type, sinceToken, snapshotRecordArray) {
    var worksheet = Ember.String.pluralize(type.modelName);
    return this.get('spreadsheets').fetch(worksheet);
  },

  find: function(store, type, id) {
    return this.findAll(store, type).then(function(data) {
      return data.findBy('id', id);
    });
  },

  findQuery: function(store, type, query) {
    return this.findAll(store, type).then(function(data) {
      return data.filter(function(datum){
        return Ember.keys(query).every(function(key){
          return datum[key] === query[key];
        });
      });
    });
  },

  createRecord() { throw('not supported'); },
  updateRecord() { throw('not supported'); },
  deleteRecord() { throw('not supported'); }

});
