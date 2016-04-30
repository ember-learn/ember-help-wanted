#!/usr/bin/env node
// @TODO: remove when not needed
var util = require('util');

var http = require('http');
var createHandler = require('github-webhook-handler');
var issueHandler = require('./issue-handler');

var config = {
  path: '/issue-handler',
  port: 4567,
  secret: 'oursecrethere'
};

if (process.env.PORT !== undefined) {
  config.port = process.env.PORT;
}
if (process.env.WEBHOOK_SECRET === undefined) {
  console.error('No webhook secret defined, stopping now');
  return;
}


var handler = createHandler({ path: config.path, secret: process.env.WEBHOOK_SECRET });

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(config.port);

handler.on('error', function (err) {
  console.error('Error:', err.message);
});

handler.on('ping', function (event) {
  console.log('Received a ping event for %s to %s',
    event.payload.repository.name,
    util.inspect(event.payload.hook, false, null)
  );
});

handler.on('issues', function (event) {
  switch( event.payload.action ) {
    case 'labeled':
      logging('labeled', event);
      issueHandler.issueLabeled(event);
      break;
    case 'unlabeled':
      logging('unlabeled', event);
      issueHandler.issueUnlabeled(event);
      break;
    case 'closed':
      logging('closed', event);
      issueHandler.issueClosed(event);
      break;
    case 'reopened':
      logging('reopened', event);
      issueHandler.issueReopened(event);
      break;
    default:
      // we don't want to do anything in other cases
  }
});

function logging(type, event) {
  console.log('Received an %s issue event for %s action=%s: #%d %s',
    type,
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title
  );
}
