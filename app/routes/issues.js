import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  githubIssues: service('github-issues'),

  queryParams: {
    query: {
      refreshModel: true
    }
  },

  model(params) {
    if (params.query) {
      return this._search(params.category, params.query);
    }

    return this._findAllFromCategory(params.category);
  },

  _search(category, query) {
    let issues = this.store.peekAll('github-issue');
    if (issues.length) {
      return issues.filter(this._matchWildcard(category, query));
    }

    return this._findAllFromCategory(category).then((allResults) => {
      return allResults.filter(this._matchWildcard(category, query));
    });
  },

  _findAllFromCategory(category) {
    const GithubIssues = this.get('githubIssues');
    return GithubIssues.findAllFromCategory(category);
  },

  _matchWildcard(category, query) {
    return (issue) => {
      let inCategory = this._isInCategory(category, issue.get('repositoryName'));
      let inTitle = issue.get('title').includes(query);
      let inBody = issue.get('body').includes(query);
      return inCategory && (inTitle || inBody);
    };
  },

  _isInCategory(category, repo) {
    const GithubIssues = this.get('githubIssues');
    let categoryMap = GithubIssues.allCategories();
    return category === categoryMap[repo];
  }
});
