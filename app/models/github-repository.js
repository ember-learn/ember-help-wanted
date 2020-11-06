import Model, { attr } from '@ember-data/model';

export default class GithubRepositoryModel extends Model {
  @attr('string') description;
  @attr('number') forksCount;
  @attr('string') fullName;
  @attr('string') htmlUrl;
  @attr('string') name;
  @attr('number') openIssuesCount;
}
