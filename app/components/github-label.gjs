import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';
import invert from 'invert-color';
import removeEmojiShortcode from '../helpers/remove-emoji-shortcode.js';

export default class GithubLabelComponent extends Component {
  get styleForLabel() {
    const backgroundColor = this.args.backgroundColor;
    const color = invert(`#${backgroundColor}`, true);

    return htmlSafe(`background-color: #${backgroundColor}; color: ${color};`);
  }

  <template>
    <span class="label" style={{this.styleForLabel}}>
      {{removeEmojiShortcode @label}}
    </span>
  </template>
}
