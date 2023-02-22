/* globals self */

self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  throwOnUnhandled: true,
  workflow: [
    { handler: 'silence', matchId: 'ember.component.reopen' },
    { handler: 'silence', matchId: 'manager-capabilities.modifiers-3-13' },
    { handler: "silence", matchId: "ember-cli-mirage-config-routes-only-export" }
  ],
};
