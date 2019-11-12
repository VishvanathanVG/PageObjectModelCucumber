package org.testleaf.qa.pages;

import org.openqa.selenium.WebElement;
import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ViewLeadPage extends SeleniumBase {

	@Then("Verify the leadname as (.*)")
	public ViewLeadPage verifyViewLead(String expectedFirstName) {
		
		//verifyPartialText(locateElement("id", "viewLead_firstName_sp"), expectedFirstName);
	String firstName =driver.findElementById("viewLead_firstName_sp").getText();
	if(firstName.contains(expectedFirstName)) {
		System.out.println("My first name is :" + firstName + " and firstname is correct");
	}
	else
	{
		System.out.println("My first name is :" + firstName + " and firstname is incorrect");
	}
	
	return this;
	
	}

	public MyHomePage clickOnMyHome() {

		driver.findElementByLinkText("My Home").click();
		return new MyHomePage();
	}

	@When("Click on edit button in view lead page")
	public EditLeadPage clickOnEditInFindLeadPage() {
		driver.findElementByXPath("//a[contains(text(),'Edit')]").click();
		return new EditLeadPage();
	}

	@Then("Confirms the changed name as (.*)")
	public ViewLeadPage verifyEditedLeadinViewLeadPage(String ExpectCompanyName) {

		String companyNameUp = driver.findElementById("viewLead_companyName_sp").getText();
		if (companyNameUp.contains(ExpectCompanyName)) {
			System.out.println("Your company name is " + companyNameUp + " and it is correct");
		} else {
			System.out.println("Your company name is " + companyNameUp + " and it is incorrect");
		}

		return this;
	}

	public DuplicateLeadPage clickOnDuplicateLeadBtnInViewLeadPage() {

		driver.findElementByXPath("//a[contains(text(),'Duplicate Lead')]").click();

		return new DuplicateLeadPage();
	}

	public MyLeadPage clickOnDeleteLeadBtnInViewLeadPage() {

		driver.findElementByXPath("//a[text() ='Delete']").click();

		return new MyLeadPage();
	}

	public ViewLeadPage verifyDuplicatedLeadNameinViewLeadPage() {

		String firstName = driver.findElementById("viewLead_firstName_sp").getText();
		System.out.println("DuplicatedLeadNameinViewLeadPage :" + firstName);
		System.out.println("verifyDuplicatedLeadNameinViewLeadPage :" + firstResultingName);
		if (firstName.contains(firstResultingName)) {
			System.out.println("My first name is :" + firstName + " and firstname is correct");
		} else {
			System.out.println("My first name is :" + firstName + " and firstname is incorrect");
		}

		return this;

	}

	public ViewLeadPage verifyMergeLeadId() {

		WebElement ID = driver.findElementById("viewLead_companyName_sp");
		String mergeViewID = ID.getText();
		if (mergeViewID.contains(MergerID)) {
			System.out.println("your id is correct and ID is: " + mergeViewID);
		} else {
			System.out.println("your id is Incorrect and ID is: " + mergeViewID);
		}

		return this;
	}

	public FindLeadPage clickOnFindLeadLink() {

		driver.findElementByLinkText("Find Leads").click();

		return new FindLeadPage();
	}
	
	@Then("Verify the title page of view lead page")
	public void viewLeadPageTitleVerify() {
		
		verifyTitle("View Lead | opentaps CRM");
		
	}

}
