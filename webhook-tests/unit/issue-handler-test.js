'use strict';

var assert = require('assert');
var path = require('path');
var IssueHandler = require('../../webhook/issue-handler');

describe('issue handling works as desired', function() {

  var fakeEvent = require('../fixtures/unlabeled/unlabeled-event');

  it('adding a label to an issue updates Firebase', function() {
    var result = IssueHandler.issueLabeled(fakeEvent);
    assert.ok(false, 'Need to confirm that we send the right info to mocked Firebase function')
    assert.ok(result, 'issue not properly added');
  });

  it('removing a label removes it from our Firebase list', function() {
    var result = IssueHandler.issueUnlabeled(fakeEvent);
    assert.ok(false, 'Need to confirm that we send the right info to mocked Firebase function')
    assert.ok(result, 'issue not properly removed');
  });

  it('closing a label removes it from our Firebase list', function() {
    var result = IssueHandler.issueClosed(fakeEvent);
    assert.ok(result, 'issue not properly removed');
    assert.ok(false, 'Need to confirm that we send the right info to mocked Firebase function')
  });

  it('reopening a label adds it to our Firebase list', function() {
    var result = IssueHandler.issueReopened(fakeEvent);
    assert.ok(result, 'issue not properly reopened');
    assert.ok(false, 'Need to confirm that we send the right info to mocked Firebase function')
  });
});
