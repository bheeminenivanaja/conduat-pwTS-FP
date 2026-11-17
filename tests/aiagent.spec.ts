import {test, expect} from '@playwright/test';
import { AiAgent } from '../pages/aiagent';

test("TC_1 check for successful login", async({page}) => {
     // Instantiate the Page Object class
    const agent= new AiAgent(page)
    
    //Perform the login steps
       await agent.login("bheeminenivanaja@gmail.com" , "Gauthamramanath#1");
  
       //Execute the new action to click WM Healthcare
    await agent.clickwmhealthcare();
    
    //Add an assertion to verify 
    await expect(page).toHaveURL("http://169.61.105.103:9800/agents");

    await page. waitForTimeout(5000)
});


