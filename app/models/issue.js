import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  githubData:      DS.attr(),

  workingOn:    'no one',

  category: 'todo', // @TODO: we want to build these at some point ...
  rating: 3, // @TODO: let's work out how to build these nicely
  notes: 'we want notes in the future', // @TODO: work out how to add these

  link: Ember.computed('githubData.repo', 'githubData.org', function() {
    return `https://github.com/${this.get('githubData.org')}/${this.get('githubData.repo')}/issues/${this.get('githubData.number')}`;
  }),
  project: Ember.computed.alias('githubData.repo'),
  projectLink: Ember.computed('githubData.repo', function(){
    return `https://github.com/${this.get('githubData.org')}/${this.get('githubData.repo')}`;
  }),
  title: Ember.computed.alias('githubData.title'),

  workingOnLink: Ember.computed('workingOn', function() {

    // todo: let's clean this up! ;-) possibly move it into a custom transform
    // https://guides.emberjs.com/v2.4.0/models/defining-models/#toc_custom-transforms
    let displayValue = this.get('workingOn');

    if (displayValue.indexOf(':') !== -1) {

      let [ network, username ] = displayValue.split(':');

      let value = Ember.Handlebars.Utils.escapeExpression(username);

      let networkString = '';
      if (network === 'github') {
        networkString = `<a href="https://github.com/${value}" title="${value} on Github">`;
      } else if (network === 'slack') {
        networkString = `<a href="#" title="${value} on Ember Slack">`;
      } else if (network === 'twitter') {
        networkString = `<a href="https://twitter.com/${value}" title="${value} on Twitter">`;
      }

      return Ember.String.htmlSafe(`${networkString}${value}</a>`);
    } else {
      return Ember.String.htmlSafe(`${displayValue}`);
    }
  })
});
