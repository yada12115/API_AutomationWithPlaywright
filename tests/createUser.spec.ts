import { test, expect, request } from '@playwright/test';
import { UserService } from '../services/UserService.js';
import userData from '../data/users.json';


test('POST user - create user', async ({ request }) => {
  const userService = new UserService(request);

  const response = await userService.createUser("https://petstore.swagger.io/v2/user", userData.validUser);

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body.id);

  
});


test('Get use from Data Base ',async ({request}) =>{
  const userService = new UserService(request);
 const responseBody= await userService.getUser(4);
    let body= await responseBody.json() ;
     console.log(body)
});


