import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  githubIssues: service('github-issues'),

  model(params) {
    const GithubIssues = this.get('githubIssues');
    return GithubIssues.findAllFromCategory(params.category);
  }
});
