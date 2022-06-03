import EmberRouter from '@ember/routing/router';
import config from 'ember-help-wanted/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('issues', { path: '/:category' });
  this.route('pull-requests');
});
