Feature: CreateLead

Scenario Outline:TC001 CreateLead Postive TestCases

And Enter the username as <username>
And Enter the password as <password>
When Click on login button
And  Click on Crmsfa
When Click on lead link
When Click on CreateLead button
When Enter the companyname as <companyname>
When Enter the firstname as <firstname>
When Enter the lastname as <lastname>
Then Click on CreateSubmitt button
Then Verify the leadname as <expectedName>

Examples:

|username|password|companyname|firstname|lastname|expectedName|
|DemoSalesManager|crmsfa|TCS|Vishvanathan|Veerabathiran|Vishvanathan|
|Democsr|crmsfa|TataConsultancyServices|Vishvanathan|Veerabathiran|Vishvanathan|

Scenario Outline:TC001 CreateLead Negative TestCases

And Enter the username as <username>
And Enter the password as <password>
When Click on login button
And  Click on Crmsfa
When Click on lead link
When Click on CreateLead button
When Enter the companyname as <companyname>
When Enter the firstname as <firstname>
When Enter the lastname as <lastname>
Then Click on CreateSubmitt button
But Verify the leadname as <expectedName>

Examples:

|username|password|companyname|firstname|lastname|expectedName|
|DemoSalesManager|crmsfa|TCS|Vishvanathan|Veerabathiran|Vishva|
|Democsr|crmsfa|TataConsultancyServices|Vishvanathan|Veerabathiran|VishvanathanGomathi|
