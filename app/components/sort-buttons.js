import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SortButtonsComponent extends Component {
  @action
  onSortByName() {
    this.args.onSortByName();
  }

  @action
  onSortByForks() {
    this.args.onSortByForks();
  }
} 