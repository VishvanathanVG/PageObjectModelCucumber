package org.testleaf.qa.pages;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

public class MergeLeadPage extends ProjectSpecificMethods{
	
	public String baseWindow;
	
	public MergeLeadPage clickOnFromLeadIcon(String firstname) throws InterruptedException {
		
		driver.findElementByXPath("(//img[@src='/images/fieldlookup.gif'])[1]").click();
		
		Set<String> windows=driver.getWindowHandles();
		List<String> allWindows=new ArrayList<String>(windows);
		/*System.out.println(allWindows.get(0));
		System.out.println(allWindows.get(1));
		*/
		for (String eachwindowID : allWindows) {
			System.out.println(eachwindowID);
		}
		
		System.out.println(allWindows.size());
		baseWindow=allWindows.get(0);
		String firstWindow=allWindows.get(1);
		driver.switchTo().window(firstWindow);

		driver.findElementByName("firstName").sendKeys(firstname);
		driver.findElementByXPath("//button[text()='Find Leads']").click();
		Thread.sleep(2000);
		
		WebElement firstID =driver.findElementByXPath("(//table[@class='x-grid3-row-table'])[1]//tr//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a");
		String firstNameID=firstID.getText();
		leadId= firstNameID;
		firstID.click();
		System.out.println("your first lead id :"+firstNameID);
		driver.switchTo().window(baseWindow);
		
		return this;
	}
	
	
	public MergeLeadPage clickOnToLeadIcon(String lastname) throws InterruptedException {
		
		driver.findElementByXPath("(//img[@src='/images/fieldlookup.gif'])[2]").click();
		Set<String> windows1=driver.getWindowHandles();
		List<String> allWindows1=new ArrayList<String>(windows1);
		/*System.out.println(allWindows1.get(0));
		System.out.println(allWindows1.get(1));
		*/
		for (String eachwindowID1 : allWindows1) {
			System.out.println(eachwindowID1);
		}
		
		System.out.println(allWindows1.size());
		String firstWindow1=allWindows1.get(1);
		driver.switchTo().window(firstWindow1);
		driver.findElementByName("lastName").sendKeys(lastname);
		driver.findElementByXPath("//button[text()='Find Leads']").click();
		Thread.sleep(2000);
		WebElement id =driver.findElementByXPath("(//table[@class='x-grid3-row-table']//tr//div[@class='x-grid3-cell-inner x-grid3-col-partyId'])[1]//a[1]");
		String mergerID =id.getText();
		MergerID=mergerID;
		id.click();
		Thread.sleep(2000);
		System.out.println("your merge id is :" + mergerID);
		driver.switchTo().window(baseWindow);
		
		return this;
		
	}
	
	
		public ViewLeadPage clickOnMergeLeadBtnInMergeLeadPage() throws InterruptedException {
			
			driver.findElementByXPath("//a[text()='Merge']").click();
			Alert alert=driver.switchTo().alert();
			alert.accept();
			Thread.sleep(2000);
			
			return new ViewLeadPage();
		}
}