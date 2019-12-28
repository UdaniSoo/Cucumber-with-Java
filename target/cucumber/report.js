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
  "duration": 135734739,
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
  "duration": 3840358,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 103974,
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
  "duration": 140566,
  "status": "passed"
});
formatter.before({
  "duration": 158862,
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
  "duration": 85678,
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
  "duration": 124502,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 79877,
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
  "duration": 137888,
  "status": "passed"
});
formatter.after({
  "duration": 71399,
  "status": "passed"
});
formatter.before({
  "duration": 83001,
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
  "duration": 91926,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 1398076,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 66491,
  "status": "passed"
});
formatter.after({
  "duration": 55334,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 25,
      "value": "#/Parameterization"
    }
  ],
  "line": 27,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User login into the application with \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 34,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "User1",
        "Password1"
      ],
      "line": 35,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "User2",
        "Password2"
      ],
      "line": 36,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "User3",
        "Password3"
      ],
      "line": 37,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "User4",
        "Password4"
      ],
      "line": 38,
      "id": "application-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User login into the application with User1 and Password1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 91480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_User_and_Password(String,String)"
});
formatter.result({
  "duration": 137888,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 59797,
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
  "duration": 127179,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User login into the application with User2 and Password2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 87909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    },
    {
      "val": "2",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_User_and_Password(String,String)"
});
formatter.result({
  "duration": 168679,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 58904,
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
  "duration": 137889,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User login into the application with User3 and Password3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 79432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 41
    },
    {
      "val": "3",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_User_and_Password(String,String)"
});
formatter.result({
  "duration": 134319,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 61135,
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
  "duration": 108437,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User login into the application with User4 and Password4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Cards are displayed \"True\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 78092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 41
    },
    {
      "val": "4",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_User_and_Password(String,String)"
});
formatter.result({
  "duration": 363241,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 65151,
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
  "duration": 116915,
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
  "duration": 99066,
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
  "duration": 69614,
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
  "duration": 54441,
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
  "duration": 118254,
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
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_are_displayed(String)"
});
formatter.result({
  "duration": 122717,
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
  "duration": 86570,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 83893,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 63367,
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
  "duration": 64705,
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
  "duration": 140120,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 53995,
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
  "duration": 110221,
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
  "duration": 78538,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 69614,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 83001,
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
  "duration": 49533,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 152614,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 57119,
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
  "name": "User login into the application with \u003cUsername\u003e and \u003cPassword\u003e",
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
        "Username",
        "Password"
      ],
      "line": 39,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "User1",
        "Password1"
      ],
      "line": 40,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "User2",
        "Password2"
      ],
      "line": 41,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "User3",
        "Password3"
      ],
      "line": 42,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "User4",
        "Password4"
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
  "duration": 114684,
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
  "duration": 57119,
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
  "name": "User login into the application with User1 and Password1",
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
  "duration": 61582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_User_and_Password(String,String)"
});
formatter.result({
  "duration": 153061,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 66937,
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
  "duration": 112007,
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
  "duration": 88802,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 58457,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 51764,
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
  "name": "User login into the application with User2 and Password2",
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
  "duration": 138782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 41
    },
    {
      "val": "2",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_User_and_Password(String,String)"
});
formatter.result({
  "duration": 190991,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 53995,
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
  "duration": 110222,
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
  "duration": 75861,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 38823,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 43286,
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
  "name": "User login into the application with User3 and Password3",
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
  "duration": 48194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 41
    },
    {
      "val": "3",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_User_and_Password(String,String)"
});
formatter.result({
  "duration": 86124,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 36591,
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
  "duration": 78538,
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
  "duration": 56673,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "duration": 38823,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "duration": 35253,
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
  "name": "User login into the application with User4 and Password4",
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
  "duration": 65151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 41
    },
    {
      "val": "4",
      "offset": 55
    }
  ],
  "location": "stepDefinition.user_login_into_the_application_with_User_and_Password(String,String)"
});
formatter.result({
  "duration": 122717,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 58458,
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
  "duration": 106652,
  "status": "passed"
});
});