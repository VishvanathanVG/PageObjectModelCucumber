package org.testleaf.qa.pages;

import org.testleaf.qa.api.base.SeleniumBase;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DuplicateLeadPage extends SeleniumBase{

	@Then("Verify the duplicate lead page titles as (.*)")
	public DuplicateLeadPage verifyTitleDuplicateLeadPage(String duplicate) {
		
		verifyTitle("Duplicate Lead | opentaps CRM");
		/*String dupTitle=driver.getTitle();
		if(dupTitle.startsWith(duplicate)) {
			System.out.println("Your title is: " + dupTitle + " And your title is correct");
			}
		else {
			System.out.println("Your title is: " + dupTitle + " And your title is incorrect");
		}
		*/
		return this;
	}
	
	@When("Click on the create lead button")
	public ViewLeadPage clickOnSubmitBtnInDuplicateLeadPage() {
		
		click(locateElement("name", "submitButton"));
		//driver.findElementByName("submitButton").click();
		
		return new ViewLeadPage();
	}
	
}
