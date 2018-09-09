import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  include: ['labels']
});
