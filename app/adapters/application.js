import DS from 'ember-data';
import ENV from 'ember-help-wanted/config/environment';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  host: ENV.API_HOST
});
