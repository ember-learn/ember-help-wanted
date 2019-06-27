import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  id(i) {
    return `${i}`;
  },

  number(i) {
    return `${i + 3000}`;
  },

  title: faker.hacker.phrase,
  state: () => faker.random.arrayElement(['open', 'closed']),
  createdAt: faker.date.recent,
  updatedAt: faker.date.recent,
  body: faker.hacker.phrase,

  labels: () => [
    {
      color: '84b6eb',
      default: true,
      id: 26457840,
      name: 'good first issue',
      url: 'https://api.github.com/repos/emberjs/ember-inspector/labels/good%20first%20issue'
    }
  ],

  url: 'https://api.github.com/repos/ember-learn/guides-source/issues/117',
  htmlUrl: 'https://github.com/ember-learn/guides-source/issues/117',

  repositoryUrl: 'https://api.github.com/repos/ember-learn/guides-source'
});
