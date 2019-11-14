package org.testleaf.qa.baseAPI;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testleaf.qa.api.base.SeleniumBase;
import org.testleaf.qa.utils.LearnReadDataExcelOwn;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;

import com.beust.jcommander.Parameter;

import cucumber.api.java.en.Given;

public class ProjectSpecificMethods extends SeleniumBase{

	/*public String excelFileName;
	public String sheetName;*/

	@Parameters({"url"})
	@BeforeMethod
	//@Given("open the chrome browser and maximise and enter URl")
	public void login(String url) {
		
		startApp("chrome", url);
		
		/*System.setProperty("webdriver.chrome.driver", "./drivers/Chromedriver/chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("http://leaftaps.com/opentaps/control/main");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);	*/
	}
	
	@AfterMethod
	public void closeBrowser() {
		
		close();
		
	}
	
	@DataProvider(name="fetchLeadsData")
	public String[][] fetchExcelData() throws IOException {
		
		LearnReadDataExcelOwn readExcelData = new LearnReadDataExcelOwn();
		String[][] readDataExcel = readExcelData.readDataExcel(excelFileName, sheetName);
		return readDataExcel;
	}
}
