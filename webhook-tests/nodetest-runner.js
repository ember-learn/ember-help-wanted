'use strict';

/*eslint no-console: 0 */

var glob = require('glob');
var Mocha = require('mocha');
var Promise = require('ember-cli/lib/ext/promise');
var mochaOnlyDetector = require('mocha-only-detector');

if (process.env.EOLNEWLINE) {
  require('os').EOL = '\n';
}

var root = 'webhook-tests/{acceptance,unit}';
var _checkOnlyInTests = Promise.denodeify(mochaOnlyDetector.checkFolder.bind(null, root + '/**/*{-test}.js'));
var mocha = new Mocha({
  timeout: 5000,
  reporter: 'spec'
});
addFiles(mocha, glob.sync(root + '/**/*-test.js'));

function addFiles(mocha, files) {
  files = (typeof files === 'string') ? glob.sync(root + files) : files;
  files.forEach(mocha.addFile.bind(mocha));
}

function checkOnlyInTests() {
  console.log('Verifing `.only` in tests');
  return _checkOnlyInTests().then(function() {
    console.log('No `.only` found');
  });
}

function runMocha() {
  mocha.run(function(failures) {
    process.on('exit', function() {
      process.exit(failures);
    });
  });
}

function ciVerificationStep() {
  if (process.env.CI === 'true') {
    return checkOnlyInTests();
  } else {
    return Promise.resolve();
  }
}

ciVerificationStep()
  .then(function() {
    runMocha();
  })
  .catch(function(error) {
    console.error(error.stack);
    process.exit(1);
  });
