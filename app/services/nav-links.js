import Service from '@ember/service';

export default Service.extend({
  navLinks: '',

  init() {
    this._super(...arguments);
    this.setupNavLinks();
  },

  setupNavLinks() {
    let navlinks = [{
      type: 'link',
      href: '/core',
      name: 'Core'
    }, {
      type: 'link',
      href: '/rfcs',
      name: 'RFCs'
    }, {
      type: 'link',
      href: '/learning',
      name: 'Learning'
    }, {
      type: 'link',
      href: '/community',
      name: 'Community'
    }, {
      type: 'link',
      href: '/emberHelpWanted',
      name: 'Ember Help Wanted'
    }, {
      type: 'link',
      href: '/octane',
      name: 'Octane'
    }];

    this.set('navLinks', navlinks);

  }

});
