
package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateLeadSteps {

	public ChromeDriver driver;
	
	@Given("User opens the chrome browser")
	public void openBrowser() {
		System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@Given("User load the leaftaps prod url")
	public void loadURL() {
		driver.get("http://leaftaps.com/opentaps/control/main");
	}
	
	@Given("User maximise the browser")
	public void maxBrowser() {
		driver.manage().window().maximize();
	}
	
	@Given("User Set the default implicit wait")
	public void setTimeouts() {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@Given("User enters the username as (.*) in the loginpage")
	public void enterUserName(String userName) {
		driver.findElementById("username").sendKeys(userName);
	}
	
	@Given("User enters the password as (.*) in the loginpage")
	public void enterPassword(String password) {
		driver.findElementById("password").sendKeys(password);
	}
	
	@Given("User click the login button in the loginpage")
	public void clickLogin() {
		driver.findElementByClassName("decorativeSubmit").click();
	}
	
	@Given("User  click crmsfa link")
	public void clickCrmsfa() {
		driver.findElementByLinkText("CRM/SFA").click();
	}
	@Given("User  click leads tab")
	public void clickLeads() {
		driver.findElementByLinkText("Leads").click();
	}
	
	@Given("User  click create lead option from left pane")
	public void clickCreateLeads() {
		driver.findElementByLinkText("Create Lead").click();
	}
	
	@Given("User  enter company name as (.*)")
	public void EnterCompanyName(String Cname) {
		driver.findElementById("createLeadForm_companyName").sendKeys(Cname);
	}
	
	@Given("User enter first name as (.*)")
	public void EnterFirstName(String Fname) {
		driver.findElementById("createLeadForm_firstName").sendKeys(Fname);
	}
	
	@Given("User enter last name as (.*)")
	public void EnterLastName(String Lname) {
		driver.findElementById("createLeadForm_lastName").sendKeys(Lname);
	}
	
	@When("User click create lead")
	public void ClickCreateLead( ) {
		driver.findElementByClassName("smallSubmit").click();
	}
	
	@Then("user able to see view leads page")
	public void Verify( ) {
		String title = driver.getTitle();
		System.out.println(title);	}
	
	@But ("user sees error message")
	public void Errormessage( ) {
		
	}
	
	@But ("User sees same create lead page")
	public void Createleadspage( ) {
		
	}
}
