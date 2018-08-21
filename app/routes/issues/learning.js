import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    const promises = [
      { repo: 'ember-learn/ember-styleguide', labels: 'help wanted :sos:' },
      { repo: 'ember-learn/guides-source', labels: 'help wanted' }
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

