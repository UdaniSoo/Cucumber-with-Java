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
4. Create a class called stepDeninition under stepDefinitions package.
5. Stepdefinition file should match with tag name and description.  
   -Use the same description in keywords section when writing a code in step definition file. Then it will identify the tagging proprly.  
   E.g:  
   Step in feature: Given User is on netbanking landing page  
   Code in Step definition file:  
   @Given("^User is on netbanking landing page$")  
	  public void user_is_on_netbanking_landing_page()  
	  {  
		//code to navigate to net banking landing page  
	  }  
6. You can navigates to the relevent code section for test step by press ctrl key and click on the test step in the feature file.You can check the tagging is correct or not by this way.  
7. Basic code structure for step definition file can generate using "Tidy gherkin" plugin.  
  - Add tidy ghekin as a chrome plugin 
  - Open tidy and place the testcases inside the app and get the code for step definition file.  
8. Create a package called cucumberOptions.  
9. Create TestRunner class under cucumberOptions package.  
  - Pass parameters where exactly feature file and stepdefinition files are located.  
  - When you run test runner, it will search for a feature file you provided in test runner and trigger that feature file execution.  
  When feature file tring to identify it's mapping step definition file, it will find the location of the step definition file mentioned in testrunner. Then the test runner will find the step definition file and it ill map and execute the code.  
  How to define feature file and stepdefinition files location in  test  runner class?  
  - Cucmber options is the annotation which takes input of feature file location and step definition location.  
  If you want to run all the feature files inside the feature packege, you can give the path to package.  
  If you want to run one feature file, you can give path to that feature file.  
  @RunWith(Cucumber.class)
@CucumberOptions(
		features= "/Users/Udani/eclipse-workspace/AutomationCucumber/src/test/java/features",
		glue= {"stepDefinitions"} This is package name.  

Cucumeber gives you the flexibility of intergarating and provides you a robust automation framework. Job of cucumber is to provide a framework, it will not automate anything. it will give you a neat framework which every company needs.  

#### Regular expression  
You can use Regular expression for write code which has same implementation but different data.  
example:
Login using username and password.  
1. Login using jin and 1234 (Valid user)
2. Login using Jhone and 12345 ()  

## Chaper 5  
### Data driven testing with cucumber  
#### Importance of dataTable for Datadriving tests  
Data tables can use when there is multiple values as input.  
Use || for mention data. 
Get the data in data table to a list and use it.  
E.g:
		List<List<String>> obj=data.raw();
    obj.get(0).get(0);

#### Parameterizing test runs with Example keyword  
If you want to repeat a test case multiple times with different datasets we call it parameterization.  
Use "Senario Outline" keyword when write scenario for parameterization.  
Use "Examples:" keyword for define the dataset.  

#### Tagging feature to control testcases  

We can add tags(@RegTest,@SmokeTest) to scenarios and run the relevent set of testcases accordingly.  
Add whatever set you want to run in the testrunner file after the glue section.  
features= "/Users/Udani/eclipse-workspace/AutomationCucumber/src/test/java/features",
		glue= {"stepDefinitions", tags="@SmokeTest"}  

Contralling the testcases can be done by using the tags. There is no need of removing them from the code. You can tag testcases you need to run and execute the code.  

#### Importance of Background keyword in Cucumber scenarios  
There will be some common step(Prerequisite) which are common accross the testcase suite.  
we can write those steps separately rather than writing it everywhere.  
Keyword for define prerequisites,  
Background:
Given  
When  
Then  

This Background keyword is specific to one feature file only. If you specify that keyword in one feature file, those prerequesites are specific to that featuere file.  
  
## Chapter 7  
#### Usage of Hooks in setting up tear down and setup Scripts
Hooks can be user for define prerequisites and postrequisite for each testcase unlike background.  
Keywords: @Before is defining prerequisites and @After is defining postrequisites.  
	@Before("@MobileTest") 
	public void beforemobilevalidation() {
		System.out.println("Before Mobile test");
		
	}
	
	@After("@MobileTest")
	public void aftermobilevalidation() {
		System.out.println("After mobile test");
	}  
  ## Chapter 8
  #### Generating reports of cucumber scenarios  
  Add below in your testrunner for generate reports,
  plugin= {"pretty","html:target/cucumber","json:target/cucumber"}  

  "pretty": is the plugin name  
  "html:target/cucumber" :Place to locate the file.  Normally reports are locating inside the target folder in the project.  


#### Importance of Attributes in cucumber options  
1. dryRun  
This will not run test cases in your code. but it will scan your code and tell you if any testcase is not match to step definition file. If its not match it will show in the out put and ask you to implement the missing part.  
you can add "dryRun=true" with glue parameters in your testrunner file. Then it will scan the file and show the matching codes in green and not matching areas highlighted in red.  
Simply it can validate  your script file.  
2. monochrome
The output you are seen in console will be neat and properly formatted if you use this attribute. This will remove all unwanted things in your console.  
3. strict
If you dont want to pass the test if there are any missing implementation and if you are very strict.
