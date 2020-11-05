# Imperative approach
# use  word "User "
# Feature represent the functionality of the module 
Feature: Login into Leaftaps application [TS-5345(Like User story ID)]
# Scenario represent the Test Case 
Scenario: [TC001] Positive flow for Login
#Given And  follows the order , represent the input(Like rectangle in a flow chart) mostly 
# Given  represent the pre-condition of test case 

Given User opens the chrome browser
# And represent the test case condition 

And User load the leaftaps prod url
And User maximise the browser 
And User Set the default implicit wait
And User enters the username as demosalesmanager in the loginpage 
And User enters the password as crmsfa in the loginpage 
# When represent the post condition , Like decision making (like diamond box in flow chart)

When  User click the login button in the loginpage
# Then  represent the expected result 
 
Then User should able to see the home page 





# Declarative approach
# Do not use  word "User "
# Scenario represent the Test Case 
Scenario: [TC001A] Positive flow for Login
#Given And  follows the order , represent the input(Like rectangle in a flow chart) mostly 
# Given  represent the pre-condition of test case 

Given  open the chrome browser
# And represent the test case condition 

And  load the leaftaps prod url
And  maximise the browser 
And  Set the default implicit wait
And  enters the username as demosalesmanager in the loginpage 
And  enters the password as crmsfa in the loginpage 
# When represent the post condition , Like decision making (like diamond box in flow chart)

When   click the login button in the loginpage
# Then  represent the expected result 
 
Then  should able to see the home page 





Scenario: [TC002] Negative  flow for Login
#Given And  follows the order , represent the input(Like rectangle in a flow chart) mostly 
# Given  represent the pre-condition of test case 

Given User opens the chrome browser
# And represent the test case condition 

And User load the leaftaps prod url
And User maximise the browser 
And User Set the default implicit wait
And User enters the username as demosalesmanager in the loginpage 
And User enters the password as crmsfa in the loginpage 
# When represent the post condition , Like decision making (like diamond box in flow chart)

When  User click the login button in the loginpage
# Then  represent the expected result 
 
Then User should able to see the error message
And User should able to see the Login  page 