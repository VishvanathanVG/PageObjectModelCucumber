package org.testleaf.qa.pages;

import org.openqa.selenium.WebElement;
import org.testleaf.qa.api.base.SeleniumBase;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindLeadPage extends SeleniumBase {

	@When("Enter the firstname in the find lead page as (.*)")
	public FindLeadPage enterFirstNameinFindLeadPage(String firstname) {

		clearAndType(locateElement("xpath", "((//label[text()='First name:'])[3]/following::input)[1]"), firstname);
	//	driver.findElementByXPath("((//label[text()='First name:'])[3]/following::input)[1]").sendKeys(firstname);
		return this;
	}

	@When("Enter the captured lead id in find lead page")
	public FindLeadPage enterLeadIdInFindLeadPage() {
		
		clearAndType(locateElement("xpath", "//label[contains(text(), 'Lead ID:')]/following::input[1]"), leadId);
		//driver.findElementByXPath("//label[contains(text(), 'Lead ID:')]/following::input[1]").sendKeys(leadId);
		return this;
	}
	
	@When("Click on find lead button in find lead page")
	public FindLeadPage clickOnFindLeadBtnFindLeadPage() {

		click(locateElement("xpath", "//button[contains(text(),'Find Leads')]"));
		//driver.findElementByXPath("//button[contains(text(),'Find Leads')]").click();
		return this;
	}
	
	@Then("Select the first resulting lead id")
	public ViewLeadPage selectFirstListedFindLeadsData() throws InterruptedException {
		Thread.sleep(2000);
		WebElement firtLeadElement = locateElement("xpath", "//div[@class='x-grid3-cell-inner x-grid3-col-partyId']//a[1]");
		String leadid = getElementText(firtLeadElement);
		leadId =leadid;
		click(firtLeadElement);
		
		/*WebElement firtLead= driver.findElementByXPath("//div[@class='x-grid3-cell-inner x-grid3-col-partyId']//a[1]");
		String leadid=firtLead.getText();
		leadId =leadid;
		System.out.println("first lead id:"+ leadid);
		firtLead.click();*/
		return new ViewLeadPage();
	}
	
	@When("Click on Email button in find lead page")
	public FindLeadPage clickOnEmailInFindLeadPage() {
		
		click(locateElement("xpath", "//span[contains(text(),'Email')]"));
		//driver.findElementByXPath("//span[contains(text(),'Email')]").click();
		
		return this;
	}
	
	@When("Enter the email id as (.*) in find lead page")
	public FindLeadPage enterEmailAddressInFindLeadPage(String Emailaddr ) {
		
		clearAndType(locateElement("name", "emailAddress"), Emailaddr);
		//driver.findElementByName("emailAddress").sendKeys(Emailaddr);
		
		return this;
	}
	
	@When("Capture the name of first resulting lead")
	public ViewLeadPage captureFirstResultingNameAndSelectInFindLeadPage() throws InterruptedException {
		Thread.sleep(2000);
		WebElement nameElement = locateElement("xpath", "(//div[@class='x-grid3-cell-inner x-grid3-col-firstName']/a)[1]");
		String Name = getElementText(nameElement); 
		firstResultingName=Name;
		click(nameElement);
		
		/*WebElement name =driver.findElementByXPath("(//div[@class='x-grid3-cell-inner x-grid3-col-firstName']/a)[1]");
		String Name=name.getText();
		firstResultingName=Name;
		System.out.println("Your name is:" + firstResultingName);
		name.click();*/
		return new ViewLeadPage();
	}
	
	@When("Click on phone number")
	public FindLeadPage clickOnPhoneNoInFindLeadPage() {
		
		click(locateElement("xpath", "//span[contains(text(),'Phone')]"));
		//driver.findElementByXPath("//span[contains(text(),'Phone')]").click();
		
		return this;
	}
	
	@When("Enter the phone number as (.*) in find lead page")
	public FindLeadPage enterPhoneNoInFindLeadPage(String Phonenumber) {
		
		clearAndType(locateElement("name", "phoneCountryCode"), "2");
		clearAndType(locateElement("name", "phoneNumber"),Phonenumber);
		//driver.findElementByName("phoneNumber").sendKeys(Phonenumber);
		return this;
	}
	
	@Then("Verify the norecords display message as (.*)")
	public FindLeadPage verifyNoRecordsDisplayInFindLeadPage(String norecord) {
		
		verifyPartialText(locateElement("xpath", "//div[contains(text(),'No records to display')]"), norecord);
		/*String norecords=driver.findElementByXPath("//div[contains(text(),'No records to display')]").getText();
		if(norecords.contains(norecord)) {
			System.out.println("Your message is :" + norecords + " and This message confirm the successful deletion");
	    }
		else {
			System.out.println("Your message is :" + norecords + " and This message confirm the successful deletion");
		}*/
		
		return this;
	}
	
	
	public FindLeadPage verifyNoRecordsDisplayInFindLeadPageForMergeLead() {
		
		verifyPartialText(locateElement("xpath", "//div[contains(text(),'No records to display')]"), "No records");
	/*	String message =driver.findElementByXPath("//div[contains(text(),'No records to display')]").getText();
		if(message.contains("No records to display")) {
			System.out.println("First Lead id result is :"+ message + " and This message confirm the successful merge");
		}
			else{
			System.out.println("First Lead id result is :"+ message + " and This message confirm the unsuccessful merge");
		}*/
		
		return this;
	}
}
