package StepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class LearnHooks {
	
	@Before
	public void Beforescenario (Scenario sc ) {
	System.out.println(	sc.getName());
	System.out.println(sc.getId());
	System.out.println(sc.getStatus());
	}
	
	
	@After
	public void Afterscenario (Scenario sc ) {
		System.out.println(sc.getStatus());
		
	}

}
