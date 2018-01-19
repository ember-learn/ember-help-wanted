import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['sort', 'dir'],
  sort: 'updatedAt',
  dir: 'desc',

  openIssues: computed.filterBy('model', 'state', 'open'),

  actions: {
    onSortChanged([sort, dir]) {
      this.setProperties({ sort, dir });
    },
    createDummyIssue() {
      // create a dummy issue (for dev/testing purposes)
      let closedIssue = this.store.createRecord('issue', {
        'createdAt': '2016-04-23T20:27:21Z',
        'githubId': 150593893,
        'number': 1,
        'org': 'acorncom',
        'repo': 'ember-hitlist-tester',
        'state': 'closed',
        'title': 'Test closed issue',
        'updatedAt': '2016-05-12T04:40:49Z'
      });

      closedIssue.save();

      let openeIssue = this.store.createRecord('issue', {
        'createdAt': '2016-04-23T20:27:21Z',
        'githubId': 150593893,
        'number': 1,
        'org': 'acorncom',
        'repo': 'ember-hitlist-tester',
        'state': 'open',
        'title': 'Test open issue',
        'updatedAt': '2016-05-12T04:40:49Z'
      });

      openeIssue.save();
    }
  }
});

