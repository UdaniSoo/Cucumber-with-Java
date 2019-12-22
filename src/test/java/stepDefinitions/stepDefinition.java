package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition {
	
	@Given("^User is on netbanking landing page$")
	public void user_is_on_netbanking_landing_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Print");
	    // throw new PendingException();
	}

	@When("^User login to the application with Username and Password$")
	public void user_login_to_the_application_with_Username_and_Password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Print");
	    // throw new PendingException();
	}

	@Then("^Home page is populated$")
	public void home_page_is_populated() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Print");
	    // throw new PendingException();
	}

	@Then("^Cards are displayed$")
	public void cards_are_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Print");
	    // throw new PendingException();
	}
	

}
