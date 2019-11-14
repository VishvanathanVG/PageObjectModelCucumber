package org.testleaf.qa.pages;

import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class LoginPage extends SeleniumBase {

	@Given("Enter the username as (.*)")
	public LoginPage enterUserName(String userName) {
		clearAndType(locateElement("id", "username"), userName);
		//driver.findElementById("username").sendKeys(userName);
		return this;

	}
	
	@Given("Enter the password as (.*)")
	public LoginPage enterPassword(String passWord) {
		
		clearAndType(locateElement("name", "PASSWORD"), passWord);
		//driver.findElementByName("PASSWORD").sendKeys(passWord);
		return this;
	}
	
	@When("Click on login button")
	public HomePage clickOnLogin() {
		
		click(locateElement("class", "decorativeSubmit"));
		//driver.findElementByClassName("decorativeSubmit").click();
		
		return new HomePage();
	}

}
