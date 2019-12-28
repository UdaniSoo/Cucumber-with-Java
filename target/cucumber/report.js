$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User login to the application with \"Jin\" and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 114379387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jin",
      "offset": 36
    },
    {
      "val": "1234",
      "offset": 46
    }
  ],
  "location": "stepDefinition.user_login_to_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 17652883,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 86571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_are_displayed(String)"
});
formatter.result({
  "duration": 174035,
  "status": "passed"
});
formatter.before({
  "duration": 172249,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User login to the application with \"Jhone\" and \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Cards are displayed \"False\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 186976,
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
  "duration": 192331,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 47301,
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
  "duration": 116469,
  "status": "passed"
});
formatter.after({
  "duration": 70060,
  "status": "passed"
});
formatter.before({
  "duration": 69168,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#/ Data table"
    }
  ],
  "line": 19,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
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
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 91479,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 1995148,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 99512,
  "status": "passed"
});
formatter.after({
  "duration": 61581,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 90588,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 60689,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 74076,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User login to the application with \"Jin\" and \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Cards are displayed \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 70060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jin",
      "offset": 36
    },
    {
      "val": "1234",
      "offset": 46
    }
  ],
  "location": "stepDefinition.user_login_to_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 184744,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 79431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_are_displayed(String)"
});
formatter.result({
  "duration": 124055,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 94157,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 74523,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 78092,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User login to the application with \"Jhone\" and \"4321\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Cards are displayed \"False\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 66490,
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
  "duration": 148152,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 69167,
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
  "duration": 107098,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 94603,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 64259,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 64705,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#/ Data table"
    }
  ],
  "line": 24,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
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
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 67383,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 145921,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 110668,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 30,
      "value": "#/Parameterization"
    }
  ],
  "line": 32,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User login into the application with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 39,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "Test1",
        "Passwrd1"
      ],
      "line": 40,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "Test2",
        "Passwrd2"
      ],
      "line": 41,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "Test3",
        "Passwrd3"
      ],
      "line": 42,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "Test4",
        "Passwrd4"
      ],
      "line": 43,
      "id": "application-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 195901,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 166895,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 68721,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User login into the application with \"Test1\" and \"Passwrd1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 63813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1",
      "offset": 38
    },
    {
      "val": "Passwrd1",
      "offset": 50
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 179836,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 75862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "True",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_are_displayed(String)"
});
formatter.result({
  "duration": 118254,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 107990,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 63367,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 53995,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User login into the application with \"Test2\" and \"Passwrd2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 61135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test2",
      "offset": 38
    },
    {
      "val": "Passwrd2",
      "offset": 50
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 174480,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 86571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "True",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_are_displayed(String)"
});
formatter.result({
  "duration": 121378,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 99958,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 74968,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 56227,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User login into the application with \"Test3\" and \"Passwrd3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 64259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test3",
      "offset": 38
    },
    {
      "val": "Passwrd3",
      "offset": 50
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 195454,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 61136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "True",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_are_displayed(String)"
});
formatter.result({
  "duration": 112453,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Validate the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Browser is triggered",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Check if the browser is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.validate_the_browser()"
});
formatter.result({
  "duration": 83001,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 54888,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 59796,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 31,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "User login into the application with \"Test4\" and \"Passwrd4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 70060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test4",
      "offset": 38
    },
    {
      "val": "Passwrd4",
      "offset": 50
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_and(String,String)"
});
formatter.result({
  "duration": 170464,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 49979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "True",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_are_displayed(String)"
});
formatter.result({
  "duration": 103528,
  "status": "passed"
});
});