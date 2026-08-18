import { APIRequestContext,request } from '@playwright/test';
import { ApiClient } from '../utils/ApiClient.js';
 import {Url}from '../config/evn.js'

export class UserService {
  private readonly api: ApiClient;

  constructor(private request: APIRequestContext) {
    this.api = new ApiClient(request);
  }

  
async getUser(id: number) {
           
    let baseUrl = Url.BASE_URL.value;
    
       let order=Url.BASE_URL.user.getUser
            .replace('{id}', id.toString());
    let endpoit=baseUrl+order;  
        return await this.request.get(endpoit);
}
  async createUser(endpoint: string,userData: object) {
    return this.api.post(endpoint, userData);
  }

  async updateUser(userId: number, userData: object) {
    return this.api.put(`/users/${userId}`, userData);
  }

  async deleteUser(userId: number) {
    return this.api.delete(`/users/${userId}`);
  }
}