package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/java/features/Login.feature"}, glue = "steps",
					monochrome = true)

public class LoginTCRunTest extends AbstractTestNGCucumberTests{

}
