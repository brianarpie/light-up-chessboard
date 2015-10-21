exports.config = {
  specs: ['../e2e/*.js'],
  baseUrl: 'http://localhost',
  multiCapabilities: [
    { browserName: 'chrome' }
  ],
};
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver'
