import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  githubIssues: service('github-issues'),

  queryParams: {
    query: {
      refreshModel: true
    },
    label: {
      refreshModel: true
    }
  },

  model(params) {
    if (params.query || params.label) {
      return this._filter(params);
    }

    return this._findAllFromCategory(params.category);
  },

  _filter(params) {
    let issues = this.store.peekAll('github-issue');
    let filterFunc = params.query ? this._matchWildcard(params.category, params.query) : this._matchLabel(params.label);
    if (issues.length) {
      return issues.filter(filterFunc);
    }

    return this._findAllFromCategory(params.category).then((allResults) => {
      return allResults.filter(filterFunc);
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

  _matchLabel(label) {
    return (issue) => issue.get('labels').map((lb) => lb.name).includes(label);
  },

  _isInCategory(category, repo) {
    const GithubIssues = this.get('githubIssues');
    let categoryMap = GithubIssues.allCategories();
    return category === categoryMap[repo];
  }
});
