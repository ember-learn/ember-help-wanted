import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';

export default class GithubIssueSerializer extends RESTSerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = {
      githubIssues: payload,
    };

    return super.normalizeQueryResponse(
      store,
      primaryModelClass,
      newPayload,
      id,
      requestType,
    );
  }
}
