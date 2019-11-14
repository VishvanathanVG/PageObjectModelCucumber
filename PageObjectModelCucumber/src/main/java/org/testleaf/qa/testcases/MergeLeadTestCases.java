package org.testleaf.qa.testcases;

import org.testleaf.qa.baseAPI.ProjectSpecificMethods;
import org.testleaf.qa.pages.LoginPage;
import org.testleaf.qa.pages.MergeLeadPage;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class MergeLeadTestCases extends ProjectSpecificMethods{

	@BeforeTest
	public void setMergeLeadData() {
		
		excelFileName = "LeadsFullData";
		sheetName = "Merge_Lead";
	}
	
	@Test(dataProvider="fetchLeadsData")
	public void runMergeLeadTestCases(String userName,String passWord,String Firstname ,String Lastname, String norecord) throws InterruptedException {
		
		LoginPage loginpage = new LoginPage();
		loginpage.enterUserName(userName).enterPassword(passWord).clickOnLogin().clickOnCRMSFA().clickOnLead().clickOnMergeLead()
		.clickOnFromLeadIcon().navigatingToFindLeadForMergeFirstName().enterTheFirstNameInFindLeadPageForMerge(Firstname).selectFirstResultingLeadIdFirstName()
		.backToBaseWindowsAfterSelectingLeadId().clickOnToLeadIcon().navigatingToFindLeadForMergeFirstName().enterLastnameToFindLeadData(Lastname)
		.selectFirstResultingLeadIdLastName().backToBaseWindowsAfterSelectingLeadId().clickOnMergeLeadBtnInMergeLeadPage().switchToAlertAndAcceptAlert().
		verifyMergeLeadId().clickOnFindLeadLink().enterLeadIdInFindLeadPage().clickOnFindLeadBtnFindLeadPage().verifyNoRecordsDisplayInFindLeadPage(norecord);
		
		
	}
	
}
