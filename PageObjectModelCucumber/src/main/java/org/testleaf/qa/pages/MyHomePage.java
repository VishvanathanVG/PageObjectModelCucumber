package org.testleaf.qa.pages;

import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.When;

public class MyHomePage extends SeleniumBase{

	@When("Click on lead link")
	public MyLeadPage clickOnLead() {
		
		click(locateElement("link", "Leads"));
		//driver.findElementByLinkText("Leads").click();
		return new MyLeadPage();
	}
	
	
}
