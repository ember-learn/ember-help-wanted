import githubRepository from 'ember-data-github/models/github-repository';
import { computed } from '@ember/object';
import { attr } from '@ember-data/model';

export default githubRepository.extend({
  archived: attr('string'),

  displayName: computed('fullName', function() {
    let getName = this.get('fullName');
    return getName.split('/')[1];
  })
});
