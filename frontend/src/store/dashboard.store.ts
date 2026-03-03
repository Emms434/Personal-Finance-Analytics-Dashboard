/**
 * Dashboard state management module.
 *
 * Purpose:
 * - Store current filter state and fetched dashboard data.
 * - Expose actions for loading/refreshing dashboard views.
 */

import { DashboardViewModel } from '../types/dashboard';

export interface DashboardState {
  isLoading: boolean;
  error?: string;
  data?: DashboardViewModel;
}

export function createDashboardStore(): DashboardState {
  return { isLoading: false };
}
