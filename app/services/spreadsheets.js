import Ember from 'ember';

import Tabletop from 'tabletop';

// todo: shift to retrieving from config / component ...
var spreadsheet = "https://docs.google.com/spreadsheets/d/1nXVbdJroZ3ptUJNjuBpeQ9IPClx3kaZ7zSwD5R3daE4/pubhtml";

export default Ember.Service.extend({
  fetch: function(worksheet) {
    var promise = new Ember.RSVP.Promise(function(resolve) {
      Tabletop.init({
        key: spreadsheet,
        callback: function(data) {
          resolve(data[worksheet].elements);
        }
      });
    });

    return promise;
  }
});