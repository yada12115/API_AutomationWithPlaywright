import { test, expect, request } from '@playwright/test';
import { UserService } from '../services/UserService.js';
import userData from '../data/users.json';


test('POST user  Data', async function({request}) {
  const CreateBookingData={

  
  "username" : "admin",
    "password" : "password123"
  }
  const userService = new UserService(request);

  const response = await userService.createUser("https://restful-booker.herokuapp.com/auth" ,{Headers:{"Content-Type":"application/json"} ,Data: CreateBookingData});

    const responseData = await response.json();
  console.log(responseData);


  

  
  

  
});


test('Get use from Data Base ',async ({request}) =>{
  const userService = new UserService(request);
 const responseBody= await userService.getUser(4);
    let body= await responseBody.json() ;
     console.log(body)
});


