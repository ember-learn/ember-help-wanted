import { helper } from '@ember/component/helper';

export default helper(function removeEmojiShortcode(params) {
  const label = params[0] ?? '';
  const labelWithoutShortcode = label.replace(/:(\w+):/g, '');

  return labelWithoutShortcode.replace(/\s+/g, ' ').trim();
});
