import DS from 'ember-data';

export default DS.Model.extend({
  project:      DS.attr(),
  description:  DS.attr(),
  link:         DS.attr(),
  category:     DS.attr(),
  notes:        DS.attr(),
  rating:       DS.attr(),
  workingOn:    DS.attr(),

  workingOnLink: Ember.computed('workingOn', function() {

    // todo: let's clean this up! ;-) possibly move it into a custom transform
    // https://guides.emberjs.com/v2.4.0/models/defining-models/#toc_custom-transforms
    let displayValue = this.get('workingOn');

    if(displayValue.indexOf(':') !== -1) {

      var [ network, username ] = displayValue.split(':');

      let value = Ember.Handlebars.Utils.escapeExpression(username);

      var networkString = '';
      if(network === 'github') {
        networkString = `<a href="https://github.com/${value}" title="${value} on Github">`;
      }
      else if(network === 'slack') {
        networkString = `<a href="#" title="${value} on Ember Slack">`;
      }
      else if(network === 'twitter') {
        networkString = `<a href="https://twitter.com/${value}" title="${value} on Twitter">`;
      }

      return Ember.String.htmlSafe(`${networkString}${value}</a>`);
    } else {
      return Ember.String.htmlSafe(`${displayValue}`);
    }
  })
});
