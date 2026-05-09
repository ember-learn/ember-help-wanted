import Component from '@glimmer/component';
import luxonDateFormatter from '../helpers/luxon-date-formatter.js';

export default class PrRowComponent extends Component {
  get repo() {
    // repository_url: https://api.github.com/repos/ember-learn/ember-blog
    let split = this.args.pr.repository_url.split('/');
    return split[split.length - 1];
  }

  <template>
    <tr data-test-github-pr>
      <td><a href={{@pr.pull_request.html_url}}>{{@pr.title}}</a></td>
      <td>{{this.repo}}</td>
      <td>{{luxonDateFormatter @pr.created_at}}</td>
      <td>{{luxonDateFormatter @pr.updated_at}}</td>
    </tr>
  </template>
}
