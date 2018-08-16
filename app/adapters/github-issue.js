import GithubAdapter from 'ember-data-github/adapters/github';

export default GithubAdapter.extend({
  urlForQuery(query) {
    const { repo } = query;
    delete query.repo;

    return `${this.get('host')}/repos/${repo}/issues`;
  }
});
