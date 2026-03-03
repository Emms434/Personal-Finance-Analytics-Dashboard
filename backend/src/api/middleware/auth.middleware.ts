/**
 * Authentication middleware placeholder.
 *
 * Purpose:
 * - Verify access token and attach user context.
 * - Enforce authenticated-only endpoint access.
 */

export async function authenticateRequest(): Promise<void> {
  throw new Error('Not implemented: verify JWT and attach user identity to request context');
}
