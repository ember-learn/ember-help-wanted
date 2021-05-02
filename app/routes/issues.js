import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IssuesRoute extends Route {
  @service store;

  queryParams = {
    label: {
      refreshModel: true,
    },

    query: {
      refreshModel: true,
    },
  };

  async model(params) {
    const { category, label, query } = params;

    const issues = await this.findIssues(category);
    const hasFilters = Boolean(label) || Boolean(query);

    if (hasFilters) {
      return this.filterIssues(issues, { label, query });
    }

    return issues;
  }

  filterIssues(/*issues, { label, query }*/) {
    return [];
  }

  async findIssues(category) {
    try {
      const issues = await this.store.query('github-issue', {
        group: category,
      });

      return issues.sortBy('updatedAt').reverse();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return [];
    }
  }
}
