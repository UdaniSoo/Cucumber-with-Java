package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "/Users/Udani/eclipse-workspace/AutomationCucumber/src/test/java/features",
		glue= "stepDefinitions",
		//dryRun=true,
		monochrome=true,
		strict=true,
		//tags= "@MobileTest",
		plugin= {"pretty","html:target/cucumber", "json:target/cucumber.json","junit:target/cukes.xml"}
		
		)

public class TestRunner {

}
