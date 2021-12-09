import Component from '@glimmer/component';

export default class PrRowComponent extends Component {
  get repo() {
    // repository_url: https://api.github.com/repos/ember-learn/ember-blog
    let split = this.args.pr.repository_url.split('/');
    return split[split.length - 1];
  }
}
