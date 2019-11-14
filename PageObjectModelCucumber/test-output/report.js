$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featuresExamples/MergeLeadScenarioOutline.feature");
formatter.feature({
  "name": "Merge Lead Test Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Merge Lead Test Cases",
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
  "name": "Click on merge lead links",
  "keyword": "And "
});
formatter.step({
  "name": "Click on fromlead icon on merge lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Navigating to window find leads for merge lead",
  "keyword": "And "
});
formatter.step({
  "name": "Entering the firstname as \u003cFirstName\u003e in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on find lead button in find leads data",
  "keyword": "And "
});
formatter.step({
  "name": "Select the first resulting lead id for firstname",
  "keyword": "And "
});
formatter.step({
  "name": "Back to basewindow after selecting lead id",
  "keyword": "And "
});
formatter.step({
  "name": "Click on tolead icon on merge lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Navigating to window find leads for merge lead",
  "keyword": "And "
});
formatter.step({
  "name": "Entering the Lastname as \u003cLastName\u003e in find lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on find lead button in find leads data",
  "keyword": "And "
});
formatter.step({
  "name": "Select the first resulting lead id for lastname",
  "keyword": "And "
});
formatter.step({
  "name": "Back to basewindow after selecting lead id",
  "keyword": "And "
});
formatter.step({
  "name": "Click on merge lead button in merge lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Switch to alert and Accepting the alert",
  "keyword": "And "
});
formatter.step({
  "name": "verify mergerid in viewleadpage",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on the find lead links to validate id",
  "keyword": "When "
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
        "FirstName",
        "LastName",
        "norecords"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "a",
        "c",
        "No"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Merge Lead Test Cases",
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
  "name": "Click on merge lead links",
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadPage.clickOnMergeLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on fromlead icon on merge lead page",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.clickOnFromLeadIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigating to window find leads for merge lead",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.navigatingToFindLeadForMergeFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Entering the firstname as a in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.enterTheFirstNameInFindLeadPageForMerge(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on find lead button in find leads data",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.clickOnFindLeadBtnToFindLeadsData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the first resulting lead id for firstname",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.selectFirstResultingLeadIdFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Back to basewindow after selecting lead id",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.backToBaseWindowsAfterSelectingLeadId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on tolead icon on merge lead page",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.clickOnToLeadIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigating to window find leads for merge lead",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.navigatingToFindLeadForMergeFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Entering the Lastname as c in find lead page",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.enterLastnameToFindLeadData(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on find lead button in find leads data",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.clickOnFindLeadBtnToFindLeadsData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select the first resulting lead id for lastname",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.selectFirstResultingLeadIdLastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Back to basewindow after selecting lead id",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.backToBaseWindowsAfterSelectingLeadId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on merge lead button in merge lead page",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.clickOnMergeLeadBtnInMergeLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Switch to alert and Accepting the alert",
  "keyword": "And "
});
formatter.match({
  "location": "MergeLeadPage.switchToAlertAndAcceptAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify mergerid in viewleadpage",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.verifyMergeLeadId()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the find lead links to validate id",
  "keyword": "When "
});
formatter.match({
  "location": "ViewLeadPage.clickOnFindLeadLink()"
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