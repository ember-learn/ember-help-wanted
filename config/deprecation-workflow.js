/* globals self */

self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  throwOnUnhandled: true,
  workflow: [
    { handler: 'silence', matchId: 'ember.component.reopen' },
    { handler: 'silence', matchId: 'manager-capabilities.modifiers-3-13' },
  ],
};
