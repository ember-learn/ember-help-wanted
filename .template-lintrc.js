'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    /*
      TODO:

      The recommended rules are failing. Let's fix the errors
      and remove the rule exceptions one by one.
    */
    'link-rel-noopener': false,
    'no-action': false,
    'no-curly-component-invocation': false,
    'no-negated-condition': false,
    'require-button-type': false,
    'require-valid-alt-text': false,
  }
};
