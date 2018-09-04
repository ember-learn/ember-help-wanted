import Service from '@ember/service';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

function reverseSort(items, property) {
  return items.sort((a, b) => {
    let left = a.get(property).getTime();
    let right = b.get(property).getTime();

    if (left > right) {
      return -1;
    }
    if (left < right) {
      return 1;
    }

    return 0;
  });
}

let coreRepos = [
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

let learningRepos = [
    { repo: 'ember-learn/ember-styleguide', labels: 'help wanted :sos:' },
    { repo: 'ember-learn/guides-source', labels: 'help wanted' }
];

export default Service.extend({
    store: service('store'),

    _fetchAll(reposAndLabels) {
        const promises = reposAndLabels.map((data) => {
            // github's API only supports requests for a single issue at a time
            return this.get('store').query('github-issue', {
                repo: data.repo,
                labels: data.labels
            });
        });

        return RSVP.all(promises).then((allModels) => {
            let allIssues = allModels.reduce((acc, repoIssues) => {
                repoIssues.forEach((issue) => {
                    acc.push(issue);
                });
                return acc;
            }, []);

            return reverseSort(allIssues, 'updatedAt');
        });
    },

    findAllCore() {
        return this._fetchAll(coreRepos);
    },

    findAllLearning() {
        return this._fetchAll(learningRepos);
    }
});
