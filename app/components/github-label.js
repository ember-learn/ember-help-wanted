import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import invert from 'invert-color';

export default Component.extend({
  classNames: ['github-label'],
  tagName: 'span',
  attributeBindings: ['style'],

  style: computed('labelColor', function() {
    let labelColor = this.labelColor;
    let color = invert(`#${labelColor}`, true);
    return htmlSafe(`background-color: #${labelColor}; color: ${color};`);
  })
});
