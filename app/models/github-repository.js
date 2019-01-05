import githubRepository from 'ember-data-github/models/github-repository';
import { computed } from '@ember/object';
import attr from 'ember-data/attr';

export default githubRepository.extend({
  archived: attr('string')
});