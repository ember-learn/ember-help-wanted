import Route from '@ember/routing/route';
import fetch from 'fetch';
import ENV from 'ember-help-wanted/config/environment';

export default class PullRequestsRoute extends Route {
  async model() {
    // let res = await fetch(ENV.API_HOST + 'api/pull-requests');
    // TODO swap this back before release
    let res = await fetch(
      'https://ember-help-w-jw-cm-prs--qllceb.herokuapp.com/api/pull-requests'
    );
    let prs = await res.json();
    // remove WIP Pull Requests
    let filtered = prs.filter((pr) => {
      return !pr.title.includes('WIP');
    });
    // sort by oldest to most recently updated
    return filtered.sort((a, b) => {
      let dateA = new Date(a.updated_at);
      let dateB = new Date(b.updated_at);
      return dateA - dateB;
    });
  }
}
