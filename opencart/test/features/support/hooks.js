
var { After, Before} = require('cucumber');

Before(function () {
console.log("log"+this);
console.log("driver"+this.driver);
return this.driver.manage().window().maximize();
});

After(function () {
return this.driver.quit();
});
