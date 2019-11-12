package org.testleaf.qa.pages;

import java.awt.Graphics;
import java.awt.Shape;

import javax.swing.text.BadLocationException;
import javax.swing.text.View;
import javax.swing.text.Position.Bias;

import org.openqa.selenium.WebElement;
import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateLeadPage extends SeleniumBase {

	@When("Enter the companyname as (.*)")
	public CreateLeadPage enterCompanyName(String companyName) {
		//WebElement ele =locateElement("id", "createLeadForm_companyName");
		//clearAndType(ele, companyName);
		//clearAndType(locateElement("id", "createLeadForm_companyName"), companyName);
		driver.findElementById("createLeadForm_companyName").sendKeys(companyName);

		return this;
	}

	@When("Enter the firstname as (.*)")
	public CreateLeadPage enterFirstName(String firstname) {
		Firstname = firstname;
		//clearAndType(locateElement("id", "createLeadForm_firstName"), firstname);
		driver.findElementById("createLeadForm_firstName").sendKeys(firstname);
		return this;
	}

	@When("Enter the lastname as (.*)")
	public CreateLeadPage enterLastName(String lastName) {
		
		//clearAndType(locateElement("id", "createLeadForm_lastName"), lastName);
		
		driver.findElementById("createLeadForm_lastName").sendKeys(lastName);
		return this;

	}

	@Then("Click on CreateSubmitt button")
	public ViewLeadPage clickCreateLeadSubmit() {
	
		//click(locateElement("name", "submitButton"));
		driver.findElementByName("submitButton").click();
		return new ViewLeadPage();
	}
}