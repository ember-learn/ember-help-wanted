'use strict';

module.exports = {
  /*
    TODO: When you upgrade these addons, please check if we no longer
    need to make exceptions.
  */
  allowedVersions: {
    // v0.3.0 used by ember-cli-moment-shim
    // v0.2.4 used by ember-cli-mirage
    'ember-get-config': '0.3.0 || 0.2.4',
  }
};
