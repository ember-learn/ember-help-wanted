import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['query', 'label'],
  query: '',
  label: '',

  navLinks : service(),

  queryInput: computed('query', function() {
    return this.get('query');
  }),

  actions: {
    searchByWildcard(query) {
      this.set('query', query);
    }
  }
});
