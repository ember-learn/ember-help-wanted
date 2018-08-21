import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    const promises = [
      { repo: 'emberjs/ember.js', labels: 'Help Wanted' },
      { repo: 'emberjs/data', labels: 'Good for New Contributors' },
      { repo: 'ember-cli/ember-cli', labels: 'good first issue' }
    ].map((data) => {
      return this.get('store').query('github-issue', {
        repo: data.repo,
        labels: data.labels
      });
    });

    return RSVP.all(promises).then((models) => {
      return models.reduce((acc, model) => {
        model.forEach((issue) => {
          acc.push(issue);
        });
        return acc;
      }, []);
    });
  }
});
