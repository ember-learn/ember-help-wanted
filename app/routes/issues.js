import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import filterIssues from 'ember-help-wanted/utils/filter-issues';

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
      return filterIssues(issues, { label, query });
    }

    return issues;
  }

  async findIssues(category) {
    try {
      const issues = await this.store.query('github-issue', {
        group: category,
      });

      return Array.from(issues); // convert RecordArray to normal array
    } catch (error) {
      console.error(error);

      return [];
    }
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.keyword = controller.query ?? '';
  }
}
