$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featuresExamples/DeleteLeadScenarioOutline.feature");
formatter.feature({
  "name": "Delete Lead Test Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Delete Lead Test Cases",
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
  "name": "Click on phone number",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the phone number as \u003cphonenumebr\u003e in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on find lead button in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Select the first resulting lead id",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on delete button",
  "keyword": "When "
});
formatter.step({
  "name": "Click on find lead link",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the captured lead id in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on find lead button in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Verify the norecords display message as \u003cnorecords\u003e",
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
        "phonenumebr",
        "norecords"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "99",
        "No"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "1",
        "No"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Delete Lead Test Cases",
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
  "name": "Click on phone number",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.clickOnPhoneNoInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the phone number as 99 in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterPhoneNoInFindLeadPage(String)"
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
  "name": "Select the first resulting lead id",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLeadPage.selectFirstListedFindLeadsData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on delete button",
  "keyword": "When "
});
formatter.match({
  "location": "ViewLeadPage.clickOnDeleteLeadBtnInViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on find lead link",
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadPage.clickOnFindLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the captured lead id in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterLeadIdInFindLeadPage()"
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
  "name": "Verify the norecords display message as No",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLeadPage.verifyNoRecordsDisplayInFindLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Lead Test Cases",
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
  "name": "Click on phone number",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.clickOnPhoneNoInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the phone number as 1 in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterPhoneNoInFindLeadPage(String)"
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
  "name": "Select the first resulting lead id",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLeadPage.selectFirstListedFindLeadsData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on delete button",
  "keyword": "When "
});
formatter.match({
  "location": "ViewLeadPage.clickOnDeleteLeadBtnInViewLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on find lead link",
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadPage.clickOnFindLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the captured lead id in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterLeadIdInFindLeadPage()"
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
  "name": "Verify the norecords display message as No",
  "keyword": "Then "
});
formatter.match({
  "location": "FindLeadPage.verifyNoRecordsDisplayInFindLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
});