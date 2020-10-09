import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  id(i) {
    return `${i}`;
  },
  fullName: faker.hacker.phrase,
  htmlUrl: 'https://github.com/ember-learn/guides-source',
});
