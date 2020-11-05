package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/java/Feature/CreateLead2.feature"}, glue = "StepDefinition",
plugin = { "pretty", "html:target/cucumber-reports" },
monochrome = true)
 
public class CreateLeadRunner extends AbstractTestNGCucumberTests{

}
