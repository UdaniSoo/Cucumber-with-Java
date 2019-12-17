Feature: Application Login

Scenario: Home page default login
Given User is on home page
When User login to the application with Username and Password
Then Home page is populated
