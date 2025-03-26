import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @tracked sortField = 'name';
  @tracked sortDirection = 'asc';

  get sortedRepositories() {
    const repositories = this.model;
    const sortField = this.sortField;
    const sortDirection = this.sortDirection;

    return [...repositories].sort((a, b) => {
      let aValue = sortField === 'name' ? a.name : a.forksCount;
      let bValue = sortField === 'name' ? b.name : b.forksCount;

      if (sortField === 'name') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }

  @action
  sortByName() {
    this.sortDirection = this.sortField === 'name' && this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortField = 'name';
  }

  @action
  sortByForks() {
    this.sortDirection = this.sortField === 'forks' && this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortField = 'forks';
  }
} 