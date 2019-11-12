Feature: Edit Lead Test Scenarios

Scenario Outline: Edit Lead Positive Test Cases

Given Enter the username as <username>
And Enter the password as <password>
When Click on login button
And  Click on Crmsfa
When Click on lead link
And Click on find lead link
And Enter the firstname in the find lead page as <firstname>
And Click on find lead button in find lead page
Then Select the first resulting lead id
Then Verify the title page of view lead page
When Click on edit button in view lead page
And Change the company name as <companyname> in edit lead page
And Click on submit button
Then Confirms the changed name as <expectedcompanyname>

Examples:
|username|password|firstname|companyname|expectedcompanyname|
|DemoSalesManager|crmsfa|Vishvanathan|TATA Consultancy Services Limited|TATA Consultancy Services Limited|
|DemoSalesManager|crmsfa|Vishvanathan|TCS|TCS|

Scenario Outline: Edit Lead Negative Test Cases

Given Enter the username as <username>
And Enter the password as <password>
When Click on login button
And  Click on Crmsfa
When Click on lead link
And Click on find lead link
And Enter the firstname in the find lead page as <firstname>
And Click on find lead button in find lead page
Then Select the first resulting lead id
Then Verify the title page of view lead page
When Click on edit button in view lead page
And Change the company name as <companyname> in edit lead page
And Click on submit button
But Confirms the changed name as <expectedcompanyname>


Examples:
|username|password|firstname|companyname|expectedcompanyname|
|DemoSalesManager|crmsfa|Vishvanathan|TATA Consultancy Services Limited|TCS|
|DemoSalesManager|crmsfa|Vishvanathan|TCS|TATA Consultancy Services Limited|
