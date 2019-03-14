import Service from '@ember/service';
import { inject as service } from '@ember/service';

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
  { repo: 'ember-learn/ember-website', labels: 'help wanted' }
];

let community = [
  { repo: 'typed-ember/ember-cli-typescript', labels: 'help wanted' },
  { repo: 'typed-ember/ember-cli-typescript', labels: 'good first issue' },
  { repo: 'ember-engines/ember-engines', labels: 'help wanted' },
  { repo: 'miguelcobain/ember-paper', labels: 'help wanted' },
  { repo: 'miguelcobain/ember-leaflet', labels: 'help wanted' }
];

let rfcs = [
  { repo: 'emberjs/rfcs', labels: 'Final Comment Period' },
  { repo: 'emberjs/rfcs', labels: 'Needs Champion' }
];

let emberHelpWanted = [
  { repo: 'ember-learn/ember-help-wanted', labels: 'help wanted' },
  { repo: 'ember-learn/ember-help-wanted', labels: 'good first issue' }
];

let octane = [
  { repo: 'emberjs/data', labels: 'octane' },
  { repo: 'ember-cli/ember-cli', labels: 'octane' },
  { repo: 'emberjs/website', labels: 'octane' },
  { repo: 'emberjs/ember-rails', labels: 'octane' },
  { repo: 'emberjs/rfcs', labels: 'octane' },
  { repo: 'emberjs/ember-inspector', labels: 'octane' },
  { repo: 'emberjs/ember-qunit', labels: 'octane' },
  { repo: 'ember-cli/eslint-plugin-ember', labels: 'octane' },
  { repo: 'ember-cli/ember-twiddle', labels: 'octane' },
  { repo: 'emberjs/ember.js', labels: 'octane' },
  { repo: 'emberjs/ember-test-helpers', labels: 'octane' },
  { repo: 'ember-cli/ember-ajax', labels: 'octane' },
  { repo: 'emberjs/ember-collection', labels: 'octane' },
  { repo: 'ember-learn/guides-source', labels: 'octane' },
  { repo: 'ember-learn/ember-cli-addon-docs', labels: 'octane' },
  { repo: 'ember-learn/super-rentals', labels: 'octane' },
  { repo: 'ember-cli/ember-resolver', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-mocha', labels: 'octane' },
  { repo: 'emberjs/ember-inflector', labels: 'octane' },
  { repo: 'ember-cli/ember-fetch', labels: 'octane' },
  { repo: 'ember-cli/ember-try', labels: 'octane' },
  { repo: 'ember-cli/loader.js', labels: 'octane' },
  { repo: 'emberjs/ember-mocha', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-eslint', labels: 'octane' },
  { repo: 'ember-learn/ember-api-docs', labels: 'octane' },
  { repo: 'ember-cli/ember-exam', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-shims', labels: 'octane' },
  { repo: 'ember-cli/ember-cli.github.io', labels: 'octane' },
  { repo: 'emberjs/core-notes', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-qunit', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-update', labels: 'octane' },
  { repo: 'ember-cli/ember-modules-codemod', labels: 'octane' },
  { repo: 'ember-cli/ember-rfc176-data', labels: 'octane' },
  { repo: 'ember-learn/ember-styleguide', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-app-version', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-htmlbars-inline-precompile', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-htmlbars', labels: 'octane' },
  { repo: 'ember-learn/guides-app', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-inject-live-reload', labels: 'octane' },
  { repo: 'ember-cli/ember-new-output', labels: 'octane' },
  { repo: 'ember-learn/ember-help-wanted', labels: 'octane' },
  { repo: 'ember-cli/broccoli-caching-writer', labels: 'octane' },
  { repo: 'ember-cli/ember-load-initializers', labels: 'octane' },
  { repo: 'ember-cli/broccoli-uglify-sourcemap', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-version-checker', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-blueprint-test-helpers', labels: 'octane' },
  { repo: 'ember-cli/core-object', labels: 'octane' },
  { repo: 'ember-learn/cli-guides', labels: 'octane' },
  { repo: 'ember-cli/ember-router-generator', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-uglify', labels: 'octane' },
  { repo: 'ember-cli/ember-welcome-page', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-test-loader', labels: 'octane' },
  { repo: 'ember-learn/deprecation-app', labels: 'octane' },
  { repo: 'emberjs/ember-optional-features', labels: 'octane' },
  { repo: 'ember-cli/ember-export-application-global', labels: 'octane' },
  { repo: 'ember-cli/babel-plugin-debug-macros', labels: 'octane' },
  { repo: 'ember-cli/babel-plugin-feature-flags', labels: 'octane' },
  { repo: 'ember-cli/babel-plugin-ember-modules-api-polyfill', labels: 'octane' },
  { repo: 'ember-cli/ember-octane-blueprint', labels: 'octane' },
  { repo: 'ember-cli/console-ui', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-chai', labels: 'octane' },
  { repo: 'ember-learn/ember-website', labels: 'octane' },
  { repo: 'ember-cli/babel-plugin-htmlbars-inline-precompile', labels: 'octane' },
  { repo: 'ember-cli/broccoli-middleware', labels: 'octane' },
  { repo: 'ember-cli/babel-plugin-filter-imports', labels: 'octane' },
  { repo: 'ember-learn/the-shortest-ember-book', labels: 'octane' },
  { repo: 'ember-learn/ember-jsonapi-docs', labels: 'octane' },
  { repo: 'ember-learn/emberjs-contributors-workshop', labels: 'octane' },
  { repo: 'ember-cli/stress-app', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-babili', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-preprocess-registry', labels: 'octane' },
  { repo: 'ember-cli/blprnt', labels: 'octane' },
  { repo: 'ember-cli/ember-disable-prototype-extensions', labels: 'octane' },
  { repo: 'emberjs/ember-2-legacy', labels: 'octane' },
  { repo: 'ember-cli/broccoli-viz', labels: 'octane' },
  { repo: 'ember-cli/broccoli-builder', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-jshint', labels: 'octane' },
  { repo: 'ember-cli/capture-exit', labels: 'octane' },
  { repo: 'ember-learn/tomster-chatbot', labels: 'octane' },
  { repo: 'ember-cli/amd-name-resolver', labels: 'octane' },
  { repo: 'ember-cli/ember-addon-output', labels: 'octane' },
  { repo: 'ember-cli/ember-source-channel-url', labels: 'octane' },
  { repo: 'emberjs/whiteboard', labels: 'octane' },
  { repo: 'ember-learn/glimmer-styleguide', labels: 'octane' },
  { repo: 'ember-learn/ember-cli-addon-docs-yuidoc', labels: 'octane' },
  { repo: 'emberjs/ember-ordered-set', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-internal-test-helpers', labels: 'octane' },
  { repo: 'emberjs/ember-render-modifiers', labels: 'octane' },
  { repo: 'ember-learn/ember-help-wanted-server', labels: 'octane' },
  { repo: 'ember-cli/broccoli-config-loader', labels: 'octane' },
  { repo: 'ember-cli/ember-try-config', labels: 'octane' },
  { repo: 'ember-cli/create-ember-app', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-string-utils', labels: 'octane' },
  { repo: 'ember-learn/docs-whyEmber', labels: 'octane' },
  { repo: 'emberjs/eslint-plugin-ember-internal', labels: 'octane' },
  { repo: 'emberjs/ember-copy', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-lodash-subset', labels: 'octane' },
  { repo: 'ember-learn/handbook', labels: 'octane' },
  { repo: 'emberjs/ember-string', labels: 'octane' },
  { repo: 'ember-cli/broccoli-config-replace', labels: 'octane' },
  { repo: 'ember-learn/ember-simple-google-maps', labels: 'octane' },
  { repo: 'ember-cli/node-modules-path', labels: 'octane' },
  { repo: 'ember-cli/silent-error', labels: 'octane' },
  { repo: 'emberjs/ember-jquery', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-update-codemods-manifest', labels: 'octane' },
  { repo: 'ember-learn/tutorials', labels: 'octane' },
  { repo: 'ember-cli/broccoli-babili', labels: 'octane' },
  { repo: 'ember-cli/ember-next', labels: 'octane' },
  { repo: 'ember-cli/yuidoc-ember-cli-theme', labels: 'octane' },
  { repo: 'ember-learn/guidemaker-ember-template', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-import-polyfill', labels: 'octane' },
  { repo: 'ember-cli/calculate-cache-key-for-tree', labels: 'octane' },
  { repo: 'ember-cli/ember-maybe-import-regenerator-for-testing', labels: 'octane' },
  { repo: 'ember-cli/clean-base-url', labels: 'octane' },
  { repo: 'ember-learn/discourse-emberjs-theme', labels: 'octane' },
  { repo: 'ember-learn/dockerized-ember', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-default-packager', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-clean-css', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-is-package-missing', labels: 'octane' },
  { repo: 'ember-cli/process-relative-require', labels: 'octane' },
  { repo: 'ember-learn/ember-issue-triage-chrome', labels: 'octane' },
  { repo: 'ember-learn/ember-core-dashboard', labels: 'octane' },
  { repo: 'ember-cli/broccoli-module-normalizer', labels: 'octane' },
  { repo: 'ember-learn/mentorship-workshop', labels: 'octane' },
  { repo: 'emberjs/ember-namespace', labels: 'octane' },
  { repo: 'ember-learn/glimmer-url-shortener', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-changelog', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-get-dependency-depth', labels: 'octane' },
  { repo: 'ember-learn/intro-to-ember-workshops', labels: 'octane' },
  { repo: 'ember-learn/contact-book', labels: 'octane' },
  { repo: 'ember-learn/algolia-index-update-scripts', labels: 'octane' },
  { repo: 'ember-cli/canonicalize-addon-name', labels: 'octane' },
  { repo: 'ember-learn/agendas', labels: 'octane' },
  { repo: 'ember-learn/ember-issue-triage-lambda', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-test-info', labels: 'octane' },
  { repo: 'ember-learn/tutorial-quick-start', labels: 'octane' },
  { repo: 'emberjs/testem-failure-only-reporter', labels: 'octane' },
  { repo: 'ember-learn/ember-learn-search-components', labels: 'octane' },
  { repo: 'ember-learn/ember-blog', labels: 'octane' },
  { repo: 'emberjs/rfc-tracking', labels: 'octane' },
  { repo: 'ember-learn/annual-community-survey', labels: 'octane' },
  { repo: 'emberjs/ember-jquery-legacy', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-valid-component-name', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-media', labels: 'octane' },
  { repo: 'emberjs/ember', labels: 'octane' },
  { repo: 'ember-cli/api', labels: 'octane' },
  { repo: 'ember-learn/ember-simple-leaflet-maps', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-add-template-compiler-to-package', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-normalize-entity-name', labels: 'octane' },
  { repo: 'emberjs/ember-map-with-default', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-get-component-path-option', labels: 'octane' },
  { repo: 'ember-cli/broccoli-amd-funnel', labels: 'octane' },
  { repo: 'ember-learn/gh-team-copy', labels: 'octane' },
  { repo: 'emberjs/ember-map-polyfill', labels: 'octane' },
  { repo: 'emberjs/ember-record-extension', labels: 'octane' },
  { repo: 'ember-cli/create-ember-addon', labels: 'octane' },
  { repo: 'ember-cli/broccoli-funnel-reducer', labels: 'octane' },
  { repo: 'ember-learn/ember-cli-addon-docs-esdoc', labels: 'octane' },
  { repo: 'ember-cli/broccoli-brocfile-loader', labels: 'octane' },
  { repo: 'ember-cli/app-blueprint-test', labels: 'octane' },
  { repo: 'ember-cli/ember-cli-path-utils', labels: 'octane' }
];

let categoryRepos = { core, learning, community, rfcs, emberHelpWanted, octane };

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
