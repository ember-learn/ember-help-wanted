import DS from 'ember-data';
import ENV from 'ember-help-wanted/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_HOST
});
