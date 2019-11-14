package org.testleaf.qa.pages;

import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.When;

public class MyLeadPage extends SeleniumBase{

	@When("Click on CreateLead button")
	public CreateLeadPage clickOnCreateLead() {
		
		click(locateElement("link", "Create Lead"));
		//driver.findElementByLinkText("Create Lead").click();
		return new CreateLeadPage();
		
	}
	
	@When("Click on find lead link")
	public FindLeadPage clickOnFindLeads() {
		
		click(locateElement("xpath", "//a[contains(text(),'Find Leads')]"));
		//driver.findElementByXPath("//a[contains(text(),'Find Leads')]").click();
		
		return new FindLeadPage();
	}
	
	@When("Click on merge lead links")
	public MergeLeadPage clickOnMergeLead() {
		
		click(locateElement("link", "Merge Leads"));
		//driver.findElementByLinkText("Merge Leads").click();
		return new MergeLeadPage();
	}
	
}
