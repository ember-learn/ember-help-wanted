export default function removeEmojiShortcode(optionalLabel) {
  const label = optionalLabel ?? '';
  const labelWithoutShortcode = label.replace(/:(\w+):/g, '');

  return labelWithoutShortcode.replace(/\s+/g, ' ').trim();
}
