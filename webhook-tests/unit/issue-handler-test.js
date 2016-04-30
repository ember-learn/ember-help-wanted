/* jshint node: true */
/* jshint mocha: true */
'use strict';

var assert = require('assert');
var path = require('path');
var IssueHandler = require('../../webhook/issue-handler');

var fakeEvent = require('../fixtures/unlabeled-event');

describe('adding a label to an issue', function() {
  var fakeEvent = require('../fixtures/labeled-event');

  it('updates Firebase', function() {
    var result = IssueHandler.issueLabeled(fakeEvent);
    assert.ok(false, 'Need to confirm that we send the right info to mocked Firebase function');
    assert.ok(result, 'issue not properly added');
  });
});

describe('removing a label removes it from our Firebase list', function() {
  it('updates Firebase', function() {

    var result = IssueHandler.issueUnlabeled(fakeEvent);
    assert.ok(false, 'Need to confirm that we send the right info to mocked Firebase function');
    assert.ok(result, 'issue not properly removed');
  });
});

describe('closing a label removes it from our Firebase list', function() {
  it('updates Firebase', function () {
    var result = IssueHandler.issueClosed(fakeEvent);
    assert.ok(result, 'issue not properly removed');
    assert.ok(false, 'Need to confirm that we send the right info to mocked Firebase function');
  });
});
describe('reopening a label adds it to our Firebase list', function() {
  it('updates Firebase', function () {
    var result = IssueHandler.issueReopened(fakeEvent);
    assert.ok(result, 'issue not properly reopened');
    assert.ok(false, 'Need to confirm that we send the right info to mocked Firebase function');
  });
});

describe('renaming an issue updates its title on Firebase', function() {
  it('updates Firebase', function() {
    assert.ok(false, 'Need to confirm that title updates properly');
  });
});
