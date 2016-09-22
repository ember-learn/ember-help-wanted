import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  githubId(i) {
    return `github-issue-${i}`;
  },
  number(i) {
    return `${i + 3000}`;
  },
  org: faker.random.arrayElement(['ember-cli', 'emberjs', 'ember-learn']),
  repo: faker.random.arrayElement(['ember.js', 'guides', 'ember-cli', 'data']),
  state: faker.random.arrayElement(['open', 'closed']),
  title: faker.hacker.phrase,

  createdAt: faker.date.recent,
  updatedAt: faker.date.recent
});
