import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';
import moment from 'moment';

export default Model.extend({
  number: attr('number'),
  title: attr('string'),
  state: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  body: attr('string'),
  repositoryName: attr('string'),
  url: attr('string'),
  htmlUrl: attr('string'),
  repositoryHtml: attr('string'),
  repositoryUrl: attr('string'),

  labels: attr(),

  updatedAtFormatted: computed('updatedAt', function() {
    let updatedAt = this.get('updatedAt');
    return moment(updatedAt).format('MM-DD-YYYY hh:mm Z');
  })
});
