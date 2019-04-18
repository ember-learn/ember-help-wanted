import Route from '@ember/routing/route';
import ENV from 'ember-help-wanted/config/environment';

export default Route.extend({

  model() {
    let host = ENV.API_HOST || '';

    fetch(`${host}/github-repositories`)
      .then((response) => response.json())
      .then((repos) => this.store.pushPayload('github-repository', { githubRepository: repos }));
    return this.store.peekAll('github-repository');
  }
});
