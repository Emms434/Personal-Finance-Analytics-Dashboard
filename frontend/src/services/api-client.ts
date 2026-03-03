/**
 * Frontend HTTP client abstraction.
 *
 * Purpose:
 * - Centralize API request behavior and error handling.
 * - Allow swapping transport implementation in one place.
 */

export class ApiClient {
  constructor(private readonly baseUrl: string) {}

  async get<T>(path: string): Promise<T> {
    throw new Error(`Not implemented: GET ${this.baseUrl}${path}`);
  }

  async post<T>(path: string, payload: unknown): Promise<T> {
    throw new Error(`Not implemented: POST ${this.baseUrl}${path} with payload`);
  }
}
