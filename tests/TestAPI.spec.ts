import { test, expect,APIRequestContext, request  } from '@playwright/test';



  test.describe(' Group Api ',()=>{

  

  test('Get user By id', async ({request }) => {


    const response = await request.get(
    'https://fakerestapi.azurewebsites.net/api/v1/Authors/1'
);

expect(response.status()).toBe(200);

const body = await response.json();

expect(body.id).toBe(1);
expect(body.firstName).toBe('First Name 1');
expect(body.lastName).toBe('Last Name 1');
   
});
 
test('Create a User',async({request})=>{
  const requestBody = {
  "id": 20,
  "idBook": 512,
  "url": "rechman"
};

  const postResponse = await request.post('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos',{data:requestBody});
       
    const status = postResponse.status();
      expect(status).toBe(200);
  const body = await postResponse.json();

expect(body).toMatchObject(requestBody);
expect(body.idBook).toEqual(expect.any(Number))
expect(body.url).toEqual(expect.any(String))

});

test('put request',async({request})=>{

  const response = await request.put('https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/2', {
    data: { url: 'Raju ' }
  });
   const startTime = Date.now();

  const status = response.status();
  expect(status).toBe(200);

  const body = await response.json();
  expect(response.headers()['content-type']).toContain('application/json');
  expect(body).toMatchObject({ url: 'Raju '});
  const responseTime =Date.now()- startTime;
expect(responseTime).toBeLessThan(2000);

expect(body.url).toEqual(expect.any(String ));
});

test('Create date with all detiles',async({request})=>{
      const requestbody  ={
        
  "id": 0,
  "petId": 0,
  "quantity": 0,
  "shipDate": "2026-08-15T07:55:03.692Z",
  "status": "placed",
  "complete": true,
   "Email":"deee123@gmail.com"

      }


    const response= await request.post('https://petstore.swagger.io/v2/store/order',{data:requestbody});
      expect(response.status()).toBe(200)
     let body= await response.json();
     console.log(body);
        
   expect(body.shipDate).toMatch(/^[0-9a-zA-Z+:.\/-]+$/);

})


});
