package org.testleaf.qa.pages;

import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.When;

public class MyLeadPage extends SeleniumBase{

	@When("Click on CreateLead button")
	public CreateLeadPage clickOnCreateLead() {
		
		driver.findElementByLinkText("Create Lead").click();
		return new CreateLeadPage();
		
	}
	
	@When("Click on find lead link")
	public FindLeadPage clickOnFindLeads() {
		
		driver.findElementByXPath("//a[contains(text(),'Find Leads')]").click();
		
		return new FindLeadPage();
	}
	
	public MergeLeadPage clickOnMergeLead() {
		
		driver.findElementByLinkText("Merge Leads").click();
		return new MergeLeadPage();
	}
	
}
