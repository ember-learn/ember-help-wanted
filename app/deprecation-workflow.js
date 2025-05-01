import setupDeprecationWorkflow from 'ember-cli-deprecation-workflow';

/**
 * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
 */
setupDeprecationWorkflow({
  /**
    false by default, but if a developer / team wants to be more aggressive about being proactive with
    handling their deprecations, this should be set to "true"
  */
  throwOnUnhandled: false,
  workflow: [
    { handler: 'silence', matchId: 'ember.component.reopen' },
    { handler: 'silence', matchId: 'manager-capabilities.modifiers-3-13' },
    {
      handler: 'silence',
      matchId: 'ember-cli-mirage-config-routes-only-export',
    },
  ],
});
