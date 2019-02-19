import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    fetch('https://api.github.com/search/repositories?q=user:ember-learn+help-wanted-issues:%3E0+archived:false')
      .then((response) => response.json())
      .then((repos) => this.store.pushPayload('github-repository', { githubRepository: repos.items }));
    return this.store.peekAll('github-repository');
  }

});
