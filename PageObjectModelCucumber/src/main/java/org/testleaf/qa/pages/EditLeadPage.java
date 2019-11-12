package org.testleaf.qa.pages;

import org.openqa.selenium.WebElement;
import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.When;

public class EditLeadPage extends SeleniumBase{

	@When("Change the company name as (.*) in edit lead page")
	public EditLeadPage enterChangeCompanyNameInEditLeadPage(String companyname) {
		CompanyNameUpdated =companyname;
		WebElement companyName = driver.findElementById("updateLeadForm_companyName");
		companyName.clear();
		companyName.sendKeys(companyname);
		return this;
	}
	
	@When("Click on submit button")
	public ViewLeadPage clickOnUpdateBtnInEditLeadPage() {
		driver.findElementByName("submitButton").click();
		return new ViewLeadPage();
	}
	
}
