/* eslint-env node */
'use strict';

const proxyPath = '/github-issues';
const target = 'https://ember-help-wanted-server.herokuapp.com';

module.exports = function(app) {
  let proxy = require('http-proxy').createProxyServer({
    headers: {
      host: 'ember-help-wanted-server.herokuapp.com'
    }
  });

  proxy.on('error', function(err, req) {
    // eslint-disable-next-line no-console
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res) {
    req.url = `${proxyPath}/${req.url}`;
    proxy.web(req, res, { target });
  });
};
