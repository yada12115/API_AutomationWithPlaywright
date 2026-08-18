import { APIRequestContext } from '@playwright/test';

export class AuthService {
  constructor(private readonly request: APIRequestContext) {}

  async login(username: string, password: string) {
    return this.request.post('/login', {
      data: { username, password }
    });
  }
}