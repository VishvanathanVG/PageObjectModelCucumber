package org.testleaf.qa.pages;

import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

public class DuplicateLeadPage extends ProjectSpecificMethods{

	public DuplicateLeadPage verifyTitleDuplicateLeadPage() {
		
		String dupTitle=driver.getTitle();
		if(dupTitle.startsWith("Duplicate")) {
			System.out.println("Your title is: " + dupTitle + " And your title is correct");
			}
		else {
			System.out.println("Your title is: " + dupTitle + " And your title is incorrect");
		}
		
		return this;
	}
	
	public ViewLeadPage clickOnSubmitBtnInDuplicateLeadPage() {
		
		driver.findElementByName("submitButton").click();
		
		return new ViewLeadPage();
	}
	
}
