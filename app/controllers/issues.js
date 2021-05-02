import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import dayjs from 'dayjs';

export default class IssuesController extends Controller {
  queryParams = ['label', 'query'];

  @tracked keyword = '';
  @tracked label = '';
  @tracked query = '';

  get clearMessage() {
    return `Clear search filter ${this.label}`;
  }

  get githubIssuesSorted() {
    const githubIssues = this.model ?? [];

    return githubIssues.sort((issue1, issue2) => {
      const date1 = dayjs(issue1.updatedAt);
      const date2 = dayjs(issue2.updatedAt);

      return date2.diff(date1);
    });
  }

  @action filterIssues(event) {
    event.preventDefault();

    this.query = this.keyword;
  }
}
