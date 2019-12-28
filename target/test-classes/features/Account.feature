Feature: Application Login

@SmokeTest
Scenario: Home page default login
Given User is on netbanking landing page
When User login to the application with "Jin" and "1234"
Then Home page is populated
And Cards are displayed "true"



