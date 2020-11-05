import Model, { attr } from '@ember-data/model';

export default class GithubIssueModel extends Model {
  @attr('string') htmlUrl;
  @attr() labels;
  @attr('number') number;
  @attr('string') repositoryHtml;
  @attr('string') repositoryName;
  @attr('string') title;
  @attr('date') updatedAt;
}
