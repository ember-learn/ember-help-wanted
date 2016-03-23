import DS from 'ember-data';

export default DS.Model.extend({
  project:      DS.attr(),
  description:  DS.attr(),
  link:         DS.attr(),
  category:     DS.attr(),
  notes:        DS.attr(),
  rating:       DS.attr(),
  workingOn:    DS.attr()
});
