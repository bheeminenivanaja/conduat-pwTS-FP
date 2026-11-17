import { test, expect } from "@playwright/test";

test("verify status code for get api", async ({ request }) => {

    const response = await request.get("http://169.61.105.110:8080/NewFinancialPlanner/api/v1/medigapPlanQuotes?zip5=80113&gender=F&tobacco=0&age=65&plan=A&county=Arapahoe&magiTier=2&healthProfile=5&birthDate=04-1958&taxFilingStatus=FILING_INDIVIDUALLY&version=MEDICARE_GOV&effective_date=2024-01-01", {
        headers: {
            'Authorization': 'Basic RmluYW5jaWFsUGxhbm5lclNlcnZpY2VVc2VyOkZpbmFuY2lhbFBsYW5uZXJQQHNzdzByZA==',

            'Content-Type': 'application/json',
        
        }
    });

    expect(response.status()).toBe(200);

});