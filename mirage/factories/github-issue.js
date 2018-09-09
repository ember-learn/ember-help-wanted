import { Factory, faker, trait } from 'ember-cli-mirage';

const repos = {
  'ember-styleguide': { owner: 'ember-learn' },
  'guides-source': { owner: 'ember-learn' },
  'ember.js': { owner: 'emberjs' },
  'data': { owner: 'emberjs' },
  'ember-cli': { owner: 'ember-cli' }
};

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

  repositoryName: 'app serializer will overwrite the property value',
  repositoryHtml: 'app serializer will overwrite the property value',

  url: 'https://api.github.com/repos/ember-learn/guides-source/issues/117',
  htmlUrl: 'https://github.com/ember-learn/guides-source/issues/117',

  repositoryUrl: () => {
    const repoName = faker.random.arrayElement(Object.keys(repos));
    return `https://api.github.com/repos/${repos[repoName].owner}/${repoName}`;
  },

  withLabels: trait({
    afterCreate(issue, server) {
      server.createList('githubLabel', 3, { issue });
    }
  })

});
