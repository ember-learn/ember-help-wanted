/* eslint-env node */
'use strict';

const proxyPath = '/github-issues';
const target = 'http://localhost:3000';

module.exports = function(app) {
  let proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    // eslint-disable-next-line no-console
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res) {
    req.url = `${proxyPath}/${req.url}`;
    proxy.web(req, res, { target });
  });
};
