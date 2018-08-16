import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  classNames: ['github-label'],
  tagName: 'span',
  attributeBindings: ['style'],

  style: computed('labelColor', function() {
    let labelColor = this.get('labelColor');
    return htmlSafe(`background-color: #${labelColor}`);
  })
});
