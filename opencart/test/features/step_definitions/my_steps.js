const assert=require('assert');
const { Given, When, Then } = require('cucumber')

Given(/^I launch the opencart url$/,function() {
this.driver.get('https://www.opencart.com/',function(){
this.driver.sleep(3000);
console.log("launched");
});
});

Then(/^I should see the title of the opencart page$/, function () {

this.driver.getTitle().then(function (title) {
    console.log(title)
    assert.equal(title, 'OpenCart - Open Source Shopping Cart Solution');
    console.log('title verified');
});
});
When(/^I click on Login link$/, function () {
this.driver.findElement({ xpath: '//*[@id="navbar-collapse-header"]/div/a[1]'}).click();

});

Given(/^I enter the  invalid "([^"]*)" in uservalue$/, function (arg1) {
console.log("argument"+arg1);
this.driver.findElement({ xpath:'//*[@id="input-email"]'}).sendKeys(arg1);

});
Given(/^I enter the invalid "([^"]*)" in passvalue$/, function (arg1) {
this.driver.findElement({ xpath:'//*[@id="input-password"]'}).sendKeys(arg1);
});


Then(/^I should see the "([^"]*)"$/, function (arg1) {
this.driver.findElement({xpath: '//*[@id="account-login"]/div[2]/div[1]'}).getText().then(function(data) {
    console.log("data"+data);
    var data=  data.replace(/[^a-zA-Z0-9,/,. ]/g, "")
    assert.strictEqual(data,arg1,message=null);
    console.log("ERROR VERIFIED");
});


});
When(/^I click on login button$/, function () {

this.driver.findElement({ xpath: '//*[@id="account-login"]/div[2]/div/div[1]/form/div[3]/div[1]/button[1]'}).click();
this.driver.sleep(3000);
});
