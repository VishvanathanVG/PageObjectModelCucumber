Feature: Duplicate Lead Test Scenarios


Scenario Outline: Duplicate Lead Testcases

Given Enter the username as <username>
And Enter the password as <password>
When Click on login button
And  Click on Crmsfa
When Click on lead link
When Click on find lead link
And Click on Email button in find lead page
And Enter the email id as <EmailAddr> in find lead page
And Click on find lead button in find lead page
And Capture the name of first resulting lead
And Click on Duplicate lead button in view lead page
Then Verify the duplicate lead page titles as <duplicateTitleName>
When Click on the create lead button
Then Confirm the duplicated lead name as captured name

Examples:
|username|password|EmailAddr|duplicateTitleName|
|DemoSalesManager|crmsfa|@gmail.com|Duplicate|
|DemoSalesManager|crmsfa|@|Duplicate|
