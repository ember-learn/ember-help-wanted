import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  githubIssues: service('github-issues'),

  model() {
    const GithubIssues = this.get('githubIssues');
    return GithubIssues.findAllLearning();
  }
});

