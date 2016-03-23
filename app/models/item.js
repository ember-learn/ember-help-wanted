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

    let displayValue = this.get('workingOn');
    if(displayValue[0] === '@') {
      value = displayValue.substring(1, displayValue.length);
      let value = Ember.Handlebars.Utils.escapeExpression(value);
      return Ember.String.htmlSafe(`<a href="https://twitter.com/${value}">${displayValue}</a>`);
    } else if(displayValue[0] === '#') {
      value = displayValue.substring(1, displayValue.length);
      let value = Ember.Handlebars.Utils.escapeExpression(value);
      return Ember.String.htmlSafe(`<a href="#" title="${value} on Ember Slack">${displayValue}</a>`);
    } else {
      return Ember.String.htmlSafe(`${displayValue}`);
    }
  })
});
