import Controller from '@ember/controller';

export default Controller.extend({


	// Application Header Navlink
	navLinks: [{
		type: 'link',
		href: '/',
		name: 'Home'
	},{
		type: 'link',
		href: '/core',
		name: 'Core'
	},{
		type: 'link',
		href: '/rfcs',
		name: 'RFCs'
	},{
		type: 'link',
		href: '/learning',
		name: 'Learning'
	},{
		type: 'link',
		href: '/community',
		name: 'Community'
	},{
		type: 'link',
		href: '/emberHelpWanted',
		name: 'Ember Help Wanted'
	} ]

});