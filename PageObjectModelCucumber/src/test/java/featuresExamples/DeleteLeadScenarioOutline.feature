Feature: Delete Lead Test Scenario

Scenario Outline: Delete Lead Test Cases

Given Enter the username as <username>
And Enter the password as <password>
When Click on login button
And  Click on Crmsfa
When Click on lead link
When Click on find lead link
And Click on Email button in find lead page
And Click on phone number
And Enter the phone number as <phonenumebr> in find lead page
And Click on find lead button in find lead page
Then Select the first resulting lead id
When Click on delete button
And Click on find lead link
And Enter the captured lead id in find lead page
And Click on find lead button in find lead page
Then Verify the norecords display message as <norecords>

Examples:
|username|password|phonenumebr|norecords|
|DemoSalesManager|crmsfa|2|No|
####|DemoSalesManager|crmsfa|9|No|