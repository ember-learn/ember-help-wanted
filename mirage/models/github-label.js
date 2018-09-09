import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  issue: belongsTo('github-issue')
});
