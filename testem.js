module.exports = {
  testPage: 'tests/index.html?hidepassed',
  disableWatching: true,
  launchInCi: [
    'Chrome'
  ],
  launchInDev: [
    'Chrome'
  ],
  browserArgs: {
    Chrome: {
      mode: 'ci',
      args: [
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ]
    }
  }
};
