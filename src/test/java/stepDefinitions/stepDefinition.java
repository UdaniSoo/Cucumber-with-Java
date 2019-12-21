package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition {
	
	@Given("^User is on netbanking landing page$")
	
	public void user_is_on_netbanking_landing_page()
	{
		//code to navigate to net banking landing page
	
	}
	
	@When("^User login to the application with Username and Password$")
	
	public void User_login_with_Username_and_Password()
	{
		//Code to enter user name and password
	}
	
	@Then("^Home page is populated$")
	
	public void Home_page_is_populated()
	{
		//Home page validation code
	}	
	
	@And("^Cards are displayed$")
	
	public void Cards_are_displayed()
	{
		 //Cards validation code.
	}
	

}
