package org.testleaf.qa.pages;

import org.openqa.selenium.WebElement;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

public class FindLeadPage extends ProjectSpecificMethods {

	
	public FindLeadPage enterFirstNameinFindLeadPage(String firstname) {

		driver.findElementByXPath("((//label[text()='First name:'])[3]/following::input)[1]").sendKeys(firstname);
		return this;
	}

	public FindLeadPage enterLeadIdInFindLeadPage() {
		
		driver.findElementByXPath("//label[contains(text(), 'Lead ID:')]/following::input[1]").sendKeys(leadId);
		return this;
	}
	
	public FindLeadPage clickOnFindLeadBtnFindLeadPage() {

		driver.findElementByXPath("//button[contains(text(),'Find Leads')]").click();
		return this;
	}
	

	public ViewLeadPage selectFirstListedFindLeadsData() {
		
		WebElement firtLead= driver.findElementByXPath("//div[@class='x-grid3-cell-inner x-grid3-col-partyId']//a[1]");
		String leadid=firtLead.getText();
		leadId =leadid;
		System.out.println("first lead id:"+ leadid);
		firtLead.click();
		return new ViewLeadPage();
	}
	
	public FindLeadPage clickOnEmailInFindLeadPage() {
		
		driver.findElementByXPath("//span[contains(text(),'Email')]").click();
		
		return this;
	}
	
	
	public FindLeadPage enterEmailAddressInFindLeadPage(String Emailaddr ) {
		
		driver.findElementByName("emailAddress").sendKeys(Emailaddr);
		
		return this;
	}
	
	public ViewLeadPage captureFirstResultingNameAndSelectInFindLeadPage() {
		
		WebElement name =driver.findElementByXPath("(//div[@class='x-grid3-cell-inner x-grid3-col-firstName']/a)[1]");
		String Name=name.getText();
		firstResultingName=Name;
		System.out.println("Your name is:" + firstResultingName);
		name.click();
		return new ViewLeadPage();
	}
	
	public FindLeadPage clickOnPhoneNoInFindLeadPage() {
		
		driver.findElementByXPath("//span[contains(text(),'Phone')]").click();
		
		return this;
	}
	
	public FindLeadPage enterPhoneNoInFindLeadPage(String Phonenumber) {
		
		driver.findElementByName("phoneNumber").sendKeys(Phonenumber);
		return this;
	}
	
	
	public FindLeadPage verifyNoRecordsDisplayInFindLeadPage() {
		
		String norecords=driver.findElementByXPath("//div[contains(text(),'No records to display')]").getText();
		if(norecords.startsWith("No")) {
			System.out.println("Your message is :" + norecords + " and This message confirm the successful deletion");
	    }
		else {
			System.out.println("Your message is :" + norecords + " and This message confirm the successful deletion");
		}
		
		return this;
	}
	
	
	public FindLeadPage verifyNoRecordsDisplayInFindLeadPageForMergeLead() {
		
		String message =driver.findElementByXPath("//div[contains(text(),'No records to display')]").getText();
		if(message.contains("No records to display")) {
			System.out.println("First Lead id result is :"+ message + " and This message confirm the successful merge");
		}
			else{
			System.out.println("First Lead id result is :"+ message + " and This message confirm the unsuccessful merge");
		}
		
		return this;
	}
}
