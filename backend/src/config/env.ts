/**
 * Environment configuration loader.
 *
 * Purpose:
 * - Centralize environment variable parsing.
 * - Expose typed config for all backend modules.
 */

export interface AppConfig {
  port: number;
  databaseUrl: string;
  jwtSecret: string;
}

export function loadConfig(): AppConfig {
  return {
    port: Number(process.env.PORT ?? 4000),
    databaseUrl: process.env.DATABASE_URL ?? '',
    jwtSecret: process.env.JWT_SECRET ?? '',
  };
}
