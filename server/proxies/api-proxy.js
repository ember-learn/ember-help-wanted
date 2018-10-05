/* eslint-env node */
'use strict';

const httpProxy = require('http-proxy');
const proxyPath = '/github-issues';
let target;

if (process.env.LOCAL_API) {
  target = 'http://localhost:3000';
} else {
  target = 'https://ember-help-wanted-server.herokuapp.com';
}

module.exports = function(app) {
  let proxy;

  if (process.env.LOCAL_API) {
    proxy = httpProxy.createProxyServer({});
  } else {
    proxy = httpProxy.createProxyServer({
      headers: {
        host: 'ember-help-wanted-server.herokuapp.com'
      }
    });
  }

  proxy.on('error', function(err, req) {
    // eslint-disable-next-line no-console
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res) {
    req.url = `${proxyPath}/${req.url}`;
    proxy.web(req, res, { target });
  });
};
