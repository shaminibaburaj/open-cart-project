Feature: Build a NodeJS-Cucumber framework for UI

Scenario Outline: validate the invalid user of opencart

Given I launch the opencart url
Then I should see the title of the opencart page
And I click on Login link
And I enter the  invalid "<username>" in uservalue
And I enter the invalid "<password>" in passvalue
When I click on login button
Then I should see the "<error>"

Examples:
|username             |password|error|
|kb.shamo@gmail.com|hello123|No match for EMail and/or Password.|

