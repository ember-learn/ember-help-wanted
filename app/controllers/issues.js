import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['query', 'label'],
  query: '',

  queryInput: computed('query', function() {
    return this.get('query');
  }),

  actions: {
    searchByWildcard(query) {
      this.set('query', query);
    }
  }
});
