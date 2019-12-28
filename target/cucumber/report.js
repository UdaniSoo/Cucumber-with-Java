$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 190545,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User login to the application with \"Jhone\" and \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Cards are displayed \"False\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 123086905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jhone",
      "offset": 36
    },
    {
      "val": "4321",
      "offset": 48
    }
  ],
  "location": "stepDefinition.user_login_to_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 2754205,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 63366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "False",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_are_displayed(String)"
});
formatter.result({
  "duration": 186976,
  "status": "passed"
});
formatter.after({
  "duration": 65152,
  "status": "passed"
});
formatter.before({
  "duration": 87018,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#/ Data table"
    }
  ],
  "line": 21,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "jenny",
        "abcd",
        "john@gmail.com",
        "Australia",
        "98755637"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 77646,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 1424404,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 70953,
  "status": "passed"
});
formatter.after({
  "duration": 68275,
  "status": "passed"
});
});