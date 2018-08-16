import GithubSerializer from 'ember-data-github/serializers/github';
import DS from 'ember-data';

const { EmbeddedRecordsMixin } = DS;

export default GithubSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    labels: { embedded: 'always' }
  },

  normalize(modelClass, resourceHash, prop) {
    resourceHash.repository_name = resourceHash.repository_url.replace( // eslint-disable-line camelcase
      'https://api.github.com/repos/',
      ''
    );

    resourceHash.repository_html = resourceHash.repository_url.replace( // eslint-disable-line camelcase
      'api.github.com/repos',
      'github.com'
    );
    return this._super(modelClass, resourceHash, prop);
  }
});
