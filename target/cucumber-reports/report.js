$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/CreateLead2.feature");
formatter.feature({
  "name": "Create Lead under leads module in Leaftaps application [TS-6523(Like User story ID)]",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "[TC004] Positive flow for Create Lead",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the username as demosalesmanager in the loginpage",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the password as crmsfa in the loginpage",
  "keyword": "And "
});
formatter.step({
  "name": "User click the login button in the loginpage",
  "keyword": "And "
});
formatter.step({
  "name": "User  click crmsfa link",
  "keyword": "And "
});
formatter.step({
  "name": "User  click leads tab",
  "keyword": "And "
});
formatter.step({
  "name": "User  click create lead option from left pane",
  "keyword": "And "
});
formatter.step({
  "name": "User  enter company name as \u003cCName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enter first name as \u003cFName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User enter last name as \u003cLName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click create lead",
  "keyword": "When "
});
formatter.step({
  "name": "user able to see view leads page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CName",
        "FName",
        "LName"
      ]
    },
    {
      "cells": [
        "FIS",
        "Deekay",
        "M"
      ]
    },
    {
      "cells": [
        "FIS",
        "Dk",
        "M"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateLeadSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User load the leaftaps prod url",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.loadURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User maximise the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.maxBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Set the default implicit wait",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.setTimeouts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "[TC004] Positive flow for Create Lead",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the username as demosalesmanager in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password as crmsfa in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click crmsfa link",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickCrmsfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click leads tab",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click create lead option from left pane",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickCreateLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  enter company name as FIS",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.EnterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter first name as Deekay",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.EnterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter last name as M",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.EnterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create lead",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadSteps.ClickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to see view leads page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateLeadSteps.Verify()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateLeadSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User load the leaftaps prod url",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.loadURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User maximise the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.maxBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Set the default implicit wait",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.setTimeouts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "[TC004] Positive flow for Create Lead",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters the username as demosalesmanager in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password as crmsfa in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click crmsfa link",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickCrmsfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click leads tab",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click create lead option from left pane",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickCreateLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  enter company name as FIS",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.EnterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter first name as Dk",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.EnterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter last name as M",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.EnterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create lead",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadSteps.ClickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to see view leads page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateLeadSteps.Verify()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateLeadSteps.openBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User load the leaftaps prod url",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.loadURL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User maximise the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.maxBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Set the default implicit wait",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.setTimeouts()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "[TC005] Negative flow for Create Lead",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User enters the username as demosalesmanager in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the password as crmsfa in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the login button in the loginpage",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click crmsfa link",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickCrmsfa()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click leads tab",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click create lead option from left pane",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.clickCreateLeads()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  enter company name as FIS",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.EnterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter first name as DK",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.EnterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click create lead",
  "keyword": "When "
});
formatter.match({
  "location": "CreateLeadSteps.ClickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees error message",
  "keyword": "But "
});
formatter.match({
  "location": "CreateLeadSteps.Errormessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sees same create lead page",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadSteps.Createleadspage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});