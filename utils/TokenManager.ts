import { APIRequestContext } from '@playwright/test';

export class TokenManager {
  static async getToken(request: APIRequestContext): Promise<string> {
    const response = await request.post('/login', {
      data: {
        username: 'testuser',
        password: 'password'
      }
    });

    if (!response.ok()) {
      throw new Error(`Login failed: ${response.status()}`);
    }

    const body = await response.json();
    return body.token;
  }
}