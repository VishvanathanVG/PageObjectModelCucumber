package org.testleaf.qa.pages;

import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.When;

public class HomePage extends SeleniumBase {

	public LoginPage clickOnLogout() {
		
		//click(locateElement("class", "decorativeSubmit"));
		driver.findElementByClassName("decorativeSubmit").click();
		
		return new LoginPage();
	}
	
	@When("Click on Crmsfa")
	public MyHomePage clickOnCRMSFA() {
		
		//click(locateElement("partial", "CRM/SFA"));
		driver.findElementByPartialLinkText("CRM/SFA").click();
		return new MyHomePage();
		
	}
	
}
