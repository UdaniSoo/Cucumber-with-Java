package stepDefinitions;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition {
	
	//Prerequisites start
	@Given("^Validate the browser$")
	public void validate_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.out.println("Validate the browser");

	}

	@When("^Browser is triggered$")
	public void browser_is_triggered() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.out.println("Browser is triggered");

	}

	@Then("^Check if the browser is displayed$")
	public void check_if_the_browser_is_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.out.println("Browser started");
	}
	  //Prerequisites end
	    
	@Given("^User is on netbanking landing page$")
	public void user_is_on_netbanking_landing_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User is in Landing page");
	    // throw new PendingException();
	}
	
	
//First code
	 @When("^User login to the application with Username and Password$")
	public void user_login_to_the_application_with_Username_and_Password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Print");
	    // throw new PendingException();
	}

//Regular expression
	
	@When("^User login to the application with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_login_to_the_application_with_and(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(arg1);
	    System.out.println(arg2);
	}
	
	@Then("^Home page is populated$")
	public void home_page_is_populated() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Home page populated");
	    // throw new PendingException();
	}


	@Then("^Cards are displayed$")
	public void cards_are_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Cards are displayed");
	    // throw new PendingException();
	}
	

	//New code with regular expressions
	@Then("^Cards are displayed \"([^\"]*)\"$")
	public void cards_are_displayed(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		System.out.println("Cards are displayed: " +arg1); 
	
	}
	
	//Data table
	@When("^User sign up with following details$")
	public void user_sign_up_with_following_details(DataTable data) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		List<List<String>> obj=data.raw();
		System.out.println(obj.get(0).get(0));
		System.out.println(obj.get(0).get(1));
		System.out.println(obj.get(0).get(2));
		System.out.println(obj.get(0).get(3));
		System.out.println(obj.get(0).get(4));
		
	}

	//Parameterization
	@When("^User login into the application with User(\\d+) and Password(\\d+)$")
	public void user_login_into_the_application_with_User_and_Password(String Username, String Password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(Username);
		System.out.println(Password);

	}

}
