Feature: Create Lead under leads module in Leaftaps application [TS-6523(Like User story ID)]

Background:
Given User opens the chrome browser
And User load the leaftaps prod url
And User maximise the browser 
And User Set the default implicit wait


Scenario Outline: [TC004] Positive flow for Create Lead

And User enters the username as demosalesmanager in the loginpage 
And User enters the password as crmsfa in the loginpage 
And User click the login button in the loginpage
And User  click crmsfa link
And User  click leads tab
And User  click create lead option from left pane
And User  enter company name as <CName>
And User enter first name as <FName>  
And User enter last name as <LName>

When User click create lead  
Then user able to see view leads page

Examples:
|CName|FName|LName|
|FIS|Deekay|M|
|FIS|Dk|M|


Scenario: [TC005] Negative flow for Create Lead

And User enters the username as demosalesmanager in the loginpage 
And User enters the password as crmsfa in the loginpage 
And  User click the login button in the loginpage
And User  click crmsfa link
And User  click leads tab
And User  click create lead option from left pane
And User  enter company name as FIS
And User enter first name as DK
When User click create lead  
But user sees error message
And User sees same create lead page 