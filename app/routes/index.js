import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').query('github-repository', { user: 'ember-learn', type: 'all' });
  }

});
