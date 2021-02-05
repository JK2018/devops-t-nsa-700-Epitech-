const config = require('./protractor.conf').config;
const puppeteer = require('puppeteer');

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox', '--disable-gpu', '--window-size=1920,1080'],
    binary: puppeteer.executablePath()
  }
};

exports.config = config;
