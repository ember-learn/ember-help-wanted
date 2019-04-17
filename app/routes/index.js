import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    fetch('/github-repositories')
      .then((response) => response.json())
      .then((repos) => this.store.pushPayload('github-repository', { githubRepository: repos }));
    return this.store.peekAll('github-repository');
  }
});
