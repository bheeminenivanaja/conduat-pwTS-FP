import {test, expect} from "@playwright/test"

test('verify google api response code', async({request}) =>{

    const response= await request.get("https://www.google.com/")

    expect(response.status()).toBe(200);

    //console.log(await response.text());


})