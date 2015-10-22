exports.config = {
  specs: ['../e2e/*.js'],
  baseUrl: 'http://localhost:9001',
  capabilities: {
    build: process.env.TRAVIS_BUILD_NUMBER,
    "tunnel-identifier": process.env.TRAVIS_JOB_NUMBER,
    browserName: "chrome"
  },
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  chromeDriver: '../node_modules/protractor/selenium/chromedriver'
};
