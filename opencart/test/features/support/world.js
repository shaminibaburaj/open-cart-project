require('chromedriver');
const { setWorldConstructor, setDefaultTimeout} = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');


class CustomWorld {
constructor() {
    this.driver= new seleniumWebdriver.Builder().withCapabilities(seleniumWebdriver.Capabilities.chrome()).build();
    // this.driver= new seleniumWebdriver.Builder().withCapabilities(seleniumWebdriver.Capabilities.firefox()).build();

}
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(60*1000);

