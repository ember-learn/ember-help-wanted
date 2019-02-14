import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return fetch('https://api.github.com/search/repositories?q=user:ember-learn+help-wanted-issues:%3E0+archived:false+&type=Repositories').then(function(response) {
      return response.json().then(function(repos) {
        repos.items.forEach((repo) => {
          repo.displayName = repo.full_name.split('/')[1];
        });
        return repos.items;
      });
    });
  }

});
