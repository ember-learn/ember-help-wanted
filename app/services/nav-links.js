import Service from '@ember/service';

export default Service.extend({
  navLinks: undefined,

  init() {
    this._super(...arguments);
    this.setupNavLinks();
  },

  setupNavLinks() {
    let navlinks = [{
      route: 'issues',
      model: 'core',
      name: 'Core'
    }, {
      route: 'issues',
      model: 'rfcs',
      name: 'RFCs'
    }, {
      route: 'issues',
      model: 'learning',
      name: 'Learning'
    }, {
      route: 'issues',
      model: 'community',
      name: 'Community'
    }, {
      route: 'issues',
      model: 'emberHelpWanted',
      name: 'Ember Help Wanted'
    }];

    this.set('navLinks', navlinks);
  }
});
