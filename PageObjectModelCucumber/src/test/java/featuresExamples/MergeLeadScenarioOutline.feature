Feature: Merge Lead Test Scenarios

Scenario Outline: Merge Lead Test Cases

Given Enter the username as <username>
And Enter the password as <password>
When Click on login button
And  Click on Crmsfa
When Click on lead link
And Click on merge lead links
And Click on fromlead icon on merge lead page
And Navigating to window find leads for merge lead
And Entering the firstname as <FirstName> in find lead page
And Click on find lead button in find leads data
And Select the first resulting lead id for firstname
And Back to basewindow after selecting lead id
And Click on tolead icon on merge lead page
And Navigating to window find leads for merge lead
And Entering the Lastname as <LastName> in find lead page
And Click on find lead button in find leads data
And Select the first resulting lead id for lastname
And Back to basewindow after selecting lead id
And Click on merge lead button in merge lead page
And Switch to alert and Accepting the alert
Then verify mergerid in viewleadpage
When Click on the find lead links to validate id
And Enter the captured lead id in find lead page
And Click on find lead button in find lead page
Then Verify the norecords display message as <norecords>

Examples:
|username|password|FirstName|LastName|norecords|
|DemoSalesManager|crmsfa|a|c|No|