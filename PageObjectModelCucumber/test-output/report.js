$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featuresExamples/DuplicateLeadScenarioOutline.feature");
formatter.feature({
  "name": "Duplicate Lead Test Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Duplicate Lead Testcases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter the username as \u003cusername\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Crmsfa",
  "keyword": "And "
});
formatter.step({
  "name": "Click on lead link",
  "keyword": "When "
});
formatter.step({
  "name": "Click on find lead link",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Email button in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the email id as \u003cEmailAddr\u003e in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on find lead button in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Capture the name of first resulting lead",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Duplicate lead button in view lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the duplicate lead page titles as \u003cduplicateTitleName\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on the create lead button",
  "keyword": "When "
});
formatter.step({
  "name": "Confirm the duplicated lead name as captured name",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "EmailAddr",
        "duplicateTitleName"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "@gmail.com",
        "Duplicate"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "@",
        "Duplicate"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Duplicate Lead Testcases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter the username as DemoSalesManager",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.clickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.clickOnCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on lead link",
  "keyword": "When "
});
formatter.match({
  "location": "MyHomePage.clickOnLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on find lead link",
  "keyword": "When "
});
formatter.match({
  "location": "MyLeadPage.clickOnFindLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Email button in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.clickOnEmailInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the email id as @gmail.com in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterEmailAddressInFindLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on find lead button in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.clickOnFindLeadBtnFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture the name of first resulting lead",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.captureFirstResultingNameAndSelectInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Duplicate lead button in view lead page",
  "keyword": "And "
});
formatter.match({
  "location": "ViewLeadPage.clickOnDuplicateLeadBtnInViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the duplicate lead page titles as Duplicate",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateLeadPage.verifyTitleDuplicateLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the create lead button",
  "keyword": "When "
});
formatter.match({
  "location": "DuplicateLeadPage.clickOnSubmitBtnInDuplicateLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm the duplicated lead name as captured name",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.verifyDuplicatedLeadNameinViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Duplicate Lead Testcases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter the username as DemoSalesManager",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.clickOnLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.clickOnCRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on lead link",
  "keyword": "When "
});
formatter.match({
  "location": "MyHomePage.clickOnLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on find lead link",
  "keyword": "When "
});
formatter.match({
  "location": "MyLeadPage.clickOnFindLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Email button in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.clickOnEmailInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the email id as @ in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterEmailAddressInFindLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on find lead button in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.clickOnFindLeadBtnFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture the name of first resulting lead",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.captureFirstResultingNameAndSelectInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Duplicate lead button in view lead page",
  "keyword": "And "
});
formatter.match({
  "location": "ViewLeadPage.clickOnDuplicateLeadBtnInViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the duplicate lead page titles as Duplicate",
  "keyword": "Then "
});
formatter.match({
  "location": "DuplicateLeadPage.verifyTitleDuplicateLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the create lead button",
  "keyword": "When "
});
formatter.match({
  "location": "DuplicateLeadPage.clickOnSubmitBtnInDuplicateLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirm the duplicated lead name as captured name",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.verifyDuplicatedLeadNameinViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
});