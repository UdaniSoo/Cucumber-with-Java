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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.browser_is_triggered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.check_if_the_browser_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
});