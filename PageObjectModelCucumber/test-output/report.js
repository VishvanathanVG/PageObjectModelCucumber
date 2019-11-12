$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featuresExamples/EditLeadScenarioOutline.feature");
formatter.feature({
  "name": "Edit Lead Test Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Edit Lead Positive Test Cases",
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
  "keyword": "And "
});
formatter.step({
  "name": "Enter the firstname in the find lead page as \u003cfirstname\u003e",
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
  "name": "Verify the title page of view lead page",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on edit button in view lead page",
  "keyword": "When "
});
formatter.step({
  "name": "Change the company name as \u003ccompanyname\u003e in edit lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Confirms the changed name as \u003cexpectedcompanyname\u003e",
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
        "firstname",
        "companyname",
        "expectedcompanyname"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "Vishvanathan",
        "TATA Consultancy Services Limited",
        "TATA Consultancy Services Limited"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "Vishvanathan",
        "TCS",
        "TCS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Edit Lead Positive Test Cases",
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
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadPage.clickOnFindLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the firstname in the find lead page as Vishvanathan",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterFirstNameinFindLeadPage(String)"
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
  "name": "Verify the title page of view lead page",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.viewLeadPageTitleVerify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on edit button in view lead page",
  "keyword": "When "
});
formatter.match({
  "location": "ViewLeadPage.clickOnEditInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Change the company name as TATA Consultancy Services Limited in edit lead page",
  "keyword": "And "
});
formatter.match({
  "location": "EditLeadPage.enterChangeCompanyNameInEditLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditLeadPage.clickOnUpdateBtnInEditLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirms the changed name as TATA Consultancy Services Limited",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.verifyEditedLeadinViewLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Lead Positive Test Cases",
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
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadPage.clickOnFindLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the firstname in the find lead page as Vishvanathan",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterFirstNameinFindLeadPage(String)"
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
  "name": "Verify the title page of view lead page",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.viewLeadPageTitleVerify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on edit button in view lead page",
  "keyword": "When "
});
formatter.match({
  "location": "ViewLeadPage.clickOnEditInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Change the company name as TCS in edit lead page",
  "keyword": "And "
});
formatter.match({
  "location": "EditLeadPage.enterChangeCompanyNameInEditLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditLeadPage.clickOnUpdateBtnInEditLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirms the changed name as TCS",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.verifyEditedLeadinViewLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit Lead Negative Test Cases",
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
  "keyword": "And "
});
formatter.step({
  "name": "Enter the firstname in the find lead page as \u003cfirstname\u003e",
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
  "name": "Verify the title page of view lead page",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on edit button in view lead page",
  "keyword": "When "
});
formatter.step({
  "name": "Change the company name as \u003ccompanyname\u003e in edit lead page",
  "keyword": "And "
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Confirms the changed name as \u003cexpectedcompanyname\u003e",
  "keyword": "But "
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
        "firstname",
        "companyname",
        "expectedcompanyname"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "Vishvanathan",
        "TATA Consultancy Services Limited",
        "TCS"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "Vishvanathan",
        "TCS",
        "TATA Consultancy Services Limited"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Edit Lead Negative Test Cases",
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
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadPage.clickOnFindLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the firstname in the find lead page as Vishvanathan",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterFirstNameinFindLeadPage(String)"
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
  "name": "Verify the title page of view lead page",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.viewLeadPageTitleVerify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on edit button in view lead page",
  "keyword": "When "
});
formatter.match({
  "location": "ViewLeadPage.clickOnEditInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Change the company name as TATA Consultancy Services Limited in edit lead page",
  "keyword": "And "
});
formatter.match({
  "location": "EditLeadPage.enterChangeCompanyNameInEditLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditLeadPage.clickOnUpdateBtnInEditLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirms the changed name as TCS",
  "keyword": "But "
});
formatter.match({
  "location": "ViewLeadPage.verifyEditedLeadinViewLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Lead Negative Test Cases",
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
  "keyword": "And "
});
formatter.match({
  "location": "MyLeadPage.clickOnFindLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the firstname in the find lead page as Vishvanathan",
  "keyword": "And "
});
formatter.match({
  "location": "FindLeadPage.enterFirstNameinFindLeadPage(String)"
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
  "name": "Verify the title page of view lead page",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.viewLeadPageTitleVerify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on edit button in view lead page",
  "keyword": "When "
});
formatter.match({
  "location": "ViewLeadPage.clickOnEditInFindLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Change the company name as TCS in edit lead page",
  "keyword": "And "
});
formatter.match({
  "location": "EditLeadPage.enterChangeCompanyNameInEditLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "EditLeadPage.clickOnUpdateBtnInEditLeadPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Confirms the changed name as TATA Consultancy Services Limited",
  "keyword": "But "
});
formatter.match({
  "location": "ViewLeadPage.verifyEditedLeadinViewLeadPage(String)"
});
formatter.result({
  "status": "passed"
});
});