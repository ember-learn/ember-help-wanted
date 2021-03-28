/* eslint-disable ember/no-classic-classes */
import ENV from 'ember-help-wanted/config/environment';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
  host: ENV.API_HOST,
});
