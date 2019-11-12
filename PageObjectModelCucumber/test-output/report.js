$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featuresExamples/CreateLeadScenarioOutline.feature");
formatter.feature({
  "name": "CreateLead",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC001 CreateLead Postive TestCases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter the username as \u003cusername\u003e",
  "keyword": "And "
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
  "name": "Click on CreateLead button",
  "keyword": "When "
});
formatter.step({
  "name": "Enter the companyname as \u003ccompanyname\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Enter the firstname as \u003cfirstname\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Enter the lastname as \u003clastname\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on CreateSubmitt button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify the leadname as \u003cexpectedName\u003e",
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
        "companyname",
        "firstname",
        "lastname",
        "expectedName"
      ]
    },
    {
      "cells": [
        "DemoSalesManager",
        "crmsfa",
        "TCS",
        "Vishvanathan",
        "Veerabathiran",
        "Vishvanathan"
      ]
    },
    {
      "cells": [
        "Democsr",
        "crmsfa",
        "TataConsultancyServices",
        "Vishvanathan",
        "Veerabathiran",
        "Vishvanathan"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC001 CreateLead Postive TestCases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter the username as DemoSalesManager",
  "keyword": "And "
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
  "name": "Click on CreateLead button",
  "keyword": "When "
});
formatter.match({
  "location": "MyLeadPage.clickOnCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the companyname as TCS",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the firstname as Vishvanathan",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the lastname as Veerabathiran",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on CreateSubmitt button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateLeadPage.clickCreateLeadSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the leadname as Vishvanathan",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.verifyViewLead(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC001 CreateLead Postive TestCases",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Enter the username as Democsr",
  "keyword": "And "
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
  "name": "Click on CreateLead button",
  "keyword": "When "
});
formatter.match({
  "location": "MyLeadPage.clickOnCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the companyname as TataConsultancyServices",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the firstname as Vishvanathan",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the lastname as Veerabathiran",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadPage.enterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on CreateSubmitt button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateLeadPage.clickCreateLeadSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the leadname as Vishvanathan",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.verifyViewLead(String)"
});
formatter.result({
  "status": "passed"
});
});