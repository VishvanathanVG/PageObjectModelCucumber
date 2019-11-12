package runner;

import org.testleaf.qa.baseAPI.ProjectSpecificMethods;
import org.testng.annotations.BeforeTest;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/java/featuresExamples/CreateLeadScenarioOutline.feature", 
	glue = "org/testleaf/qa/pages", 	
	monochrome = true,
	/*dryRun = false, 
	snippets = SnippetType.CAMELCASE,*/
	//tags= {"@SmokeTest"},
	plugin = { "pretty", "html:test-output", "json:test-output/cucumber.json" })

public class CreateLeadRunner extends ProjectSpecificMethods{
	

}
