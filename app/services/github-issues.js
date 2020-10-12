import Service, { inject as service } from '@ember/service';

let core = [
  { repo: 'emberjs/ember.js', labels: 'Help Wanted' },
  { repo: 'emberjs/ember.js', labels: 'Good for New Contributors' },
  { repo: 'emberjs/data', labels: 'Good for New Contributors' },
  { repo: 'ember-cli/ember-cli', labels: 'good first issue' },
  { repo: 'emberjs/ember-inspector', labels: 'help wanted' },
  { repo: 'emberjs/ember-inspector', labels: 'good for new contributors' },
  { repo: 'emberjs/website', labels: 'help wanted' },
  { repo: 'emberjs/website', labels: 'good first issue' },
  { repo: 'emberjs/ember-test-helpers', labels: 'beginner-friendly' },
  { repo: 'emberjs/ember-optional-features', labels: 'help wanted' },
  { repo: 'emberjs/ember-optional-features', labels: 'good first issue' },
  { repo: 'emberjs/website', labels: 'help wanted' },
  { repo: 'emberjs/website', labels: 'good first issue' }
];

let learning = [
  { repo: 'ember-learn/ember-styleguide', labels: 'help wanted :sos:' },
  { repo: 'ember-learn/guides-source', labels: 'help wanted' },
  { repo: 'ember-learn/ember-api-docs', labels: 'help wanted' },
  { repo: 'ember-learn/ember-website', labels: 'help wanted' },
  { repo: 'ember-learn/deprecation-app', labels: 'help wanted' }
];

let community = [
  { repo: 'typed-ember/ember-cli-typescript', labels: 'help wanted' },
  { repo: 'typed-ember/ember-cli-typescript', labels: 'good first issue' },
  { repo: 'ember-engines/ember-engines', labels: 'help wanted' },
  { repo: 'miguelcobain/ember-paper', labels: 'help wanted' },
  { repo: 'miguelcobain/ember-leaflet', labels: 'help wanted' },
  { repo: 'machty/ember-concurrency', labels: 'good first issue' }
];

let rfcs = [
  { repo: 'emberjs/rfcs', labels: 'Final Comment Period' },
  { repo: 'emberjs/rfcs', labels: 'Needs Champion' }
];

let emberHelpWanted = [
  { repo: 'ember-learn/ember-help-wanted', labels: 'help wanted' },
  { repo: 'ember-learn/ember-help-wanted', labels: 'good first issue' }
];

let categoryRepos = { core, learning, community, rfcs, emberHelpWanted };

export default Service.extend({
  store: service('store'),

  findAllFromCategory(category) {
    return this.get('store').query('github-issue', {
      group: category
    }).then((allIssues) => {
      return allIssues.sortBy('updatedAt').reverse();
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      return [];
    });
  },

  fetchCategoryRepos(categoryName) {
    return categoryRepos[categoryName];
  }
});
