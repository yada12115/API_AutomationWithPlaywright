import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(endpoint: string, options?: Parameters<APIRequestContext['get']>[1]): Promise<APIResponse> {
    return this.request.get(endpoint, options);
  }

  async post(endpoint: string, data?: unknown): Promise<APIResponse> {
    return this.request.post(endpoint, { data });
  }

  async put(endpoint: string, data?: unknown): Promise<APIResponse> {
    return this.request.put(endpoint, { data });
  }

  async patch(endpoint: string, data?: unknown): Promise<APIResponse> {
    return this.request.patch(endpoint, { data });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return this.request.delete(endpoint);
  }
}