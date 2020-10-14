import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';
import invert from 'invert-color';

export default class GithubLabelComponent extends Component {
  get styleForLabel() {
    const backgroundColor = this.args.backgroundColor;
    const color = invert(`#${backgroundColor}`, true);
    return htmlSafe(`background-color: #${backgroundColor}; color: ${color};`);
  }
}
