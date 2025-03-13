import RESTSerializer from '@ember-data/serializer/rest';
import { underscore } from '@ember/string';

export default class GithubRepositorySerializer extends RESTSerializer {
  keyForAttribute(attr) {
    return underscore(attr);
  }

  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = {
      githubRepositories: payload,
    };

    return super.normalizeFindAllResponse(
      store,
      primaryModelClass,
      newPayload,
      id,
      requestType,
    );
  }
}
