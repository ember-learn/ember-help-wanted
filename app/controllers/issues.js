import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Controller.extend({
  navLinks: service(),

  queryParams: ['query', 'label'],
  query: '',
  label: '',
  queryInput: '',  // TODO: Track this

  clearMessage: computed('label', function() {
    return `Clear search filter ${this.label}`;
  }),

  @action searchByWildcard(event) {
    event.preventDefault();

    this.set('query', this.queryInput);
  }
});
