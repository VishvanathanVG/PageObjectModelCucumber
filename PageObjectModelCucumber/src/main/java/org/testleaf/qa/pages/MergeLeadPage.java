package org.testleaf.qa.pages;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.java.en.When;

public class MergeLeadPage extends SeleniumBase {

	public String baseWindow;

	@When("Click on fromlead icon on merge lead page")
	public MergeLeadPage clickOnFromLeadIcon() throws InterruptedException {

		driver.findElementByXPath("(//img[@src='/images/fieldlookup.gif'])[1]").click();

		/*
		 * Set<String> windows=driver.getWindowHandles(); List<String> allWindows=new
		 * ArrayList<String>(windows); System.out.println(allWindows.get(0));
		 * System.out.println(allWindows.get(1));
		 * 
		 * for (String eachwindowID : allWindows) { System.out.println(eachwindowID); }
		 * 
		 * System.out.println(allWindows.size()); baseWindow=allWindows.get(0); String
		 * firstWindow=allWindows.get(1); driver.switchTo().window(firstWindow);
		 */

		/*
		 * driver.findElementByName("firstName").sendKeys(firstname);
		 * driver.findElementByXPath("//button[text()='Find Leads']").click();
		 * Thread.sleep(2000);
		 * 
		 * WebElement firstID =driver.
		 * findElementByXPath("(//table[@class='x-grid3-row-table'])[1]//tr//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a"
		 * ); String firstNameID=firstID.getText(); leadId= firstNameID;
		 * firstID.click(); System.out.println("your first lead id :"+firstNameID);
		 * driver.switchTo().window(baseWindow);
		 */

		return this;
	}

	@When("Navigating to window find leads for merge lead")
	public MergeLeadPage navigatingToFindLeadForMergeFirstName() {

		switchToWindow(1);

		return this;
	}

	@When("Entering the firstname as (.*) in find lead page")
	public MergeLeadPage enterTheFirstNameInFindLeadPageForMerge(String firstname) {

		clearAndType(locateElement("name", "firstName"), firstname);

		return this;

	}

	@When("Click on find lead button in find leads data")
	public MergeLeadPage clickOnFindLeadBtnToFindLeadsData() {

		click(locateElement("xpath", "//button[text()='Find Leads']"));

		return this;
	}

	@When("Select the first resulting lead id for firstname")
	public MergeLeadPage selectFirstResultingLeadIdFirstName() throws InterruptedException {

		/*
		 * String firstID = getElementText(locateElement("xpath",
		 * "(//table[@class='x-grid3-row-table'])[1]//tr//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a"
		 * )); leadId= firstID; click(locateElement("xpath",
		 * "(//table[@class='x-grid3-row-table'])[1]//tr//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a"
		 * ));
		 */

		Thread.sleep(1000);
		WebElement firstWebElement = locateElement("xpath","(//table[@class='x-grid3-row-table'])[1]//tr//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a");
		String firstID = getElementText(firstWebElement);
		leadId = firstID;
		click(firstWebElement);

		return this;

	}
	
	@When("Select the first resulting lead id for lastname")
	public MergeLeadPage selectFirstResultingLeadIdLastName() throws InterruptedException {
		
		Thread.sleep(1000);
		WebElement lastWebElement = locateElement("xpath","(//table[@class='x-grid3-row-table'])[1]//tr//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a");
		String firstID = getElementText(lastWebElement);
		click(lastWebElement);
		
		return this;
		
	}
	

	@When("Back to basewindow after selecting lead id")
	public MergeLeadPage backToBaseWindowsAfterSelectingLeadId() {
		switchToWindow(0);

		return this;
	}

	@When("Click on tolead icon on merge lead page")
	public MergeLeadPage clickOnToLeadIcon() throws InterruptedException {

		// driver.findElementByXPath("(//img[@src='/images/fieldlookup.gif'])[2]").click();
		click(locateElement("xpath", "(//img[@src='/images/fieldlookup.gif'])[2]"));
		/*
		 * Set<String> windows1=driver.getWindowHandles(); List<String> allWindows1=new
		 * ArrayList<String>(windows1); System.out.println(allWindows1.get(0));
		 * System.out.println(allWindows1.get(1));
		 * 
		 * for (String eachwindowID1 : allWindows1) { System.out.println(eachwindowID1);
		 * }
		 * 
		 * System.out.println(allWindows1.size()); String
		 * firstWindow1=allWindows1.get(1); driver.switchTo().window(firstWindow1);
		 * driver.findElementByName("lastName").sendKeys(lastname);
		 * driver.findElementByXPath("//button[text()='Find Leads']").click();
		 * Thread.sleep(2000); WebElement id =driver.
		 * findElementByXPath("(//table[@class='x-grid3-row-table']//tr//div[@class='x-grid3-cell-inner x-grid3-col-partyId'])[1]//a[1]"
		 * ); String mergerID =id.getText(); MergerID=mergerID; id.click();
		 * Thread.sleep(2000); System.out.println("your merge id is :" + mergerID);
		 * driver.switchTo().window(baseWindow);
		 */
		return this;

	}

	@When("Entering the Lastname as (.*) in find lead page")
	public MergeLeadPage enterLastnameToFindLeadData(String lastname) {

		clearAndType(locateElement("name", "lastName"), lastname);
		return this;
	}

	@When("Click on merge lead button in merge lead page")
	public MergeLeadPage clickOnMergeLeadBtnInMergeLeadPage() throws InterruptedException {

		Thread.sleep(1000);
		click(locateElement("xpath", "//a[text()='Merge']"));

		return this;
	}

	@When("Switch to alert and Accepting the alert")
	public ViewLeadPage switchToAlertAndAcceptAlert() throws InterruptedException {

		switchToAlert();
		acceptAlert();
		Thread.sleep(1000);
		return new ViewLeadPage();
	}
}