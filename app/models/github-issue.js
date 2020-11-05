import Model, { attr } from '@ember-data/model';

const API_URL = 'https://api.github.com/repos/';

export default class GithubIssueModel extends Model {
  @attr('string') htmlUrl;
  @attr() labels;
  @attr('number') number;
  @attr('string') repositoryUrl;
  @attr('string') title;
  @attr('date') updatedAt;

  get repositoryHtml() {
    const url = this.repositoryUrl ?? '';

    return url.replace(API_URL, 'https://github.com/');
  }

  get repositoryName() {
    const url = this.repositoryUrl ?? '';

    return url.replace(API_URL, '');
  }
}
