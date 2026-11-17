import {test, expect} from "@playwright/test"

test('verify api response code 200', async({request})=> {

  const response= await request.post("http://169.61.105.110:8080/NewFinancialPlanner/api/v1/expensesPresentValue", {
   headers: {
    'Authorization': 'Basic RmluYW5jaWFsUGxhbm5lclNlcnZpY2VVc2VyOkZpbmFuY2lhbFBsYW5uZXJQQHNzdzByZA==',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    data: {
      
    "fromYear": "2026",
    "toYear": 2028,
    "expenses": [
        {
            "year": 2026,
            "expense": 7558.5
        },
        {
            "year": 2027,
            "expense": 7889.5
        },
        {
            "year": 2028,
            "expense": 8236
        }
    ],
    "presentValueYears": {
        "pvAsOnYear1": "2026"
    },
    "discount": 6,
    "rateOfReturns": {
        "rateOfReturn1": 0
    }
}
    

  });

  console.log(response.text());  
  expect(response.status()).toBe(200);
      

})

