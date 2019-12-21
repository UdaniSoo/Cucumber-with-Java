# Cucumber-with-Java  
## Chapter 1
### What is Gherkin?  
Its a business readable, domian specific language that let's you describe software's behaviour.  

Keywords used in cucumber: Senarios, Feature, Feature file, Scenario outline, Step definition.  

Scenario:  
In cucumber scenarios are represented as testcases.  
Scenarios are contain steps which are equalent to test steps and use the following keywords, 

Given:Preconditions are mentioned in the given keyword.  
When: This describes the user action.  
Then: Purpose of this is to observe the expected output.  
And: This is used for statements that are an addition to the previous steps and represent positive statements.  
But: This is used for statements that are an addition to the previous steps and represent negative statements.  

Example:  
Scenario:Make minimun due payment.  
Given User is on pay creadit card pay.  
When User fills all details and select minimum amount option.  
And User clicks on Pay button.  
Then Credit cards confirmation page is displayed.  
And if refrence number is displayed
But Error message is not displayed
  
### Feature and Feature file:  
  
Feature represent the business requirement.  
Feature file act as a Test suite which consists of all scenarios.  

Feature: Credit card payment.  
In order to test credit card payment functionality user has to complete the payment through online.  
  
Scenario:Make minimun due payment.  
Given User is on pay creadit card page.  
When User fills all details and select minimum amount option.  
And User clicks on Pay button.  
Then Credit cards confirmation page is displayed.  

Scenario: Pay statement balance  
Given User is on pay credit card page.  
When User fills all details and select statement balance statement  
And User clicks on the pay button.  
Then Credit cards confirmation page is displayed.  

Scenario: Enter another amount as 0.  
Given User is on pay credit card page.  
When User fills all details and select other amount and enter 0  
And User clicks on the pay button.  
Then Credit cards confirmation page is not displayed.  
But Error message is displayed.  

Feature file can create by giving the .feature extension.  
  
  ### Feature file and Step definition importance in Cucumber  
  
  You will create a stepdefinetion.java file and for every line in feature file you will develop a real code in step definition file.  
  When you run the test, it will automatically go to that step definition file and find its implementation code where exactly it's tagged and execute that code.

### Cucumber project creation template  
1. Install Java  
2. Set System Variables
3. Download Eclipes
4. Download Natural plugin
5. Cucumber skeleton can be obtained by mavan. Mavan provides multiple sjeleton. We just need to tell which kind of skeleton we need. Mavan will create everything.  
6. Cucumber supports quick start template, Select quick start template when you create a mavan project in eclipes.  
7. Artifact Id is your project name and Group Id is your pacjkage name.
8. We will be using src/test folder for write all our cucumber testcases.  
#### How to set Jars for a Maven project  
Maven doesn't expect Jars in the build path like java projects.  
We need to provide Jar information in pom.xml file.  
Pom.xml file needs all information.  
Basically at the backend there will be Mavan repository. There is a server called Mavan repository where all the Jars store there.  
We we mention jars required for the project inpom.xml file. This pom.xml file will automatically talks to the mavan repository which is located in server and get all Jars what ever mentioned and it's get stored inside the project.  
  
  
What are the Jars required for Cucumber project?
1. Cucumber Java
2. Cucumber JUnit  

### Understand the Teminologies of Automation  
  
Feature:  
ALL the features which need to an application will write in this feature file.  
Step Definition file:  
Every step you defined in your scenario should be mapped with related code.  
Junit Test Runner:  
This basically triggers your testcases. Each feature file is a testcase. File may have multiple screnarios.
In the Test runner we can provide the information of feature file and where exactly the code is location for that feature file.

To run the code,JUnit Test Runeer needs:  
1. Where is the feature file. We will pass the path for Feature file.
2. Where is the Step definition.  
Based on the information provided to TestRunner, It will find the feature and step definition and execute both together.  

JUnit is the testing framework which help us to connect above dot files and run the code.  

Cucumber project creation: Cucumber is structure sensitive and need to create packges and classes according to the defined structure.  

1. Create a package under src/test.(All feature files will go inside this package) Eg: features  
2. Create a File under the feature package.  
3. Create a package called stepDefinitions under srs/test
4. Create a class called stepDeninition under stepDefinitions package 
5. 


