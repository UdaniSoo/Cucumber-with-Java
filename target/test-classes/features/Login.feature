Feature: Application Login

Background:
Given Validate the browser
When Browser is triggered
Then Check if the browser is displayed

@SanityTest
Scenario: Home page default login
Given User is on netbanking landing page
When User login to the application with "Jin" and "1234"
Then Home page is populated
And Cards are displayed "true"

@SmokeTest
Scenario: Home page default login
Given User is on netbanking landing page
When User login to the application with "Jhone" and "4321"
Then Home page is populated
And Cards are displayed "False"

#/ Data table
@SmokeTest
Scenario: Home page default login
Given User is on netbanking landing page
When User sign up with following details
| jenny |abcd | john@gmail.com | Australia | 98755637 |
Then Home page is populated

#/Parameterization
@RegTest
Scenario Outline: Home page default login
Given User is on netbanking landing page
When User login into the application with "<username>" and "<password>"
Then Home page is populated
And Cards are displayed "True"

Examples:
|username |password|
|Test1 |Passwrd1|
|Test2 |Passwrd2|
|Test3 |Passwrd3|
|Test4 |Passwrd4|

