package org.testleaf.qa.pages;

import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.When;

public class MyLeadPage extends ProjectSpecificMethods{

	@When("Click on CreateLead button")
	public CreateLeadPage clickOnCreateLead() {
		
		driver.findElementByLinkText("Create Lead").click();
		return new CreateLeadPage();
		
	}
	
	public FindLeadPage clickOnFindLeads() {
		
		driver.findElementByXPath("//a[contains(text(),'Find Leads')]").click();
		
		return new FindLeadPage();
	}
	
	public MergeLeadPage clickOnMergeLead() {
		
		driver.findElementByLinkText("Merge Leads").click();
		return new MergeLeadPage();
	}
	
}
