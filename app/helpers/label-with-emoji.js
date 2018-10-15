import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';
import githubEmojis from 'ember-help-wanted/constants/github-emojis';

export function labelWithEmoji([label, ...rest]) {
  let re = /:(\w+):/;
  let emojiTag = re.exec(label);
  if (emojiTag) {
    let emojiUrl = githubEmojis[emojiTag[1]];
    let labelWithEmoji = label.replace(/:\w+:/, `<img src="${emojiUrl}">`);
    return htmlSafe(labelWithEmoji);
  }
  return label;
}

export default helper(labelWithEmoji);
