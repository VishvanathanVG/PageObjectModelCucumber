package runner;

import org.testleaf.qa.baseAPI.ProjectSpecificMethods;

import cucumber.api.CucumberOptions;

@CucumberOptions(features = "src/test/java/featuresExamples/MergeLeadScenarioOutline.feature", 
	glue = "org/testleaf/qa/pages", 	
	monochrome = true,
	/*dryRun = false, 
	snippets = SnippetType.CAMELCASE,*/
	//tags= {"@SmokeTest"},
	plugin = { "pretty", "html:test-output", "json:test-output/cucumber.json" })

public class MergeLeadRunner extends ProjectSpecificMethods{

}
