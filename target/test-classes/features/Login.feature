Feature: Application Login


Scenario: Home page default login
Given User is on netbanking landing page
When User login to the application with "Jin" and "1234"
Then Home page is populated
And Cards are displayed "true"

Scenario: Home page default login
Given User is on netbanking landing page
When User login to the application with "Jhone" and "4321"
Then Home page is populated
And Cards are displayed "False"

Scenario: Home page default login
Given User is on netbanking landing page
When User sign up with following details
| jenny |abcd | john@gmail.com | Australia | 98755637 |
Then Home page is populated
