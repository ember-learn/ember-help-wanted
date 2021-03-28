import { htmlSafe } from '@ember/string';
import Component from '@glimmer/component';
import invert from 'invert-color';

export default class GithubLabelComponent extends Component {
  get styleForLabel() {
    const backgroundColor = this.args.backgroundColor;
    const color = invert(`#${backgroundColor}`, true);

    return htmlSafe(`background-color: #${backgroundColor}; color: ${color};`);
  }
}
