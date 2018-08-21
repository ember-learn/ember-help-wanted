import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import githubEmojis from 'ember-help-wanted/constants/github-emojis';
import invert from 'invert-color';

export default Component.extend({
  classNames: ['github-label'],
  tagName: 'span',
  attributeBindings: ['style'],

  labelWithEmoji: computed('label', function() {
    let label = this.get('label');
    let re = /:(\w+):/;
    let emojiTag = re.exec(label);
    if (emojiTag) {
      let emojiUrl = githubEmojis[emojiTag[1]];
      let labelWithEmoji = label.replace(/:\w+:/, `<img src="${emojiUrl}">`);
      return htmlSafe(labelWithEmoji);
    }
    return label;
  }),

  style: computed('labelColor', function() {
    let labelColor = this.get('labelColor');
    let color = invert(`#${labelColor}`, true);
    return htmlSafe(`background-color: #${labelColor}; color: ${color};`);
  })
});
