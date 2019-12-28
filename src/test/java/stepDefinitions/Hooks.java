package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@MobileTest") 
	public void beforemobilevalidation() {
		System.out.println("Before Mobile test");
		
	}
	
	@After("@MobileTest")
	public void aftermobilevalidation() {
		System.out.println("After mobile test");
	}
		
		
	

}
