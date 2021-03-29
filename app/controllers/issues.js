import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IssuesController extends Controller {
  queryParams = ['query', 'label'];

  @tracked query = '';
  @tracked label = '';
  @tracked queryInput = '';

  get clearMessage() {
    return `Clear search filter ${this.label}`;
  }

  @action
  searchByWildcard(event) {
    event.preventDefault();

    this.query = this.queryInput;
  }
}
