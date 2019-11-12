package org.testleaf.qa.pages;

import org.openqa.selenium.WebElement;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

public class EditLeadPage extends ProjectSpecificMethods{

	public EditLeadPage enterChangeCompanyNameInEditLeadPage(String companyname) {
		CompanyNameUpdated =companyname;
		WebElement companyName = driver.findElementById("updateLeadForm_companyName");
		companyName.clear();
		companyName.sendKeys(companyname);
		return this;
	}
	
	public ViewLeadPage clickOnUpdateBtnInEditLeadPage() {
		driver.findElementByName("submitButton").click();
		return new ViewLeadPage();
	}
	
}
