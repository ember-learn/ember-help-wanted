import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Controller.extend({
  queryParams: ['query', 'label'],
  query: '',
  label: '',

  navLinks: service(),

  queryInput: computed.reads('query'),

  clearMessage: computed('label', function() {
    return `Clear search filter ${this.label}`;
  }),

  @action searchByWildcard(event) {
    event.preventDefault();
    this.set('query', this.queryInput);
  }
});
