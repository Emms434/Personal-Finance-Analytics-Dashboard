/**
 * Dashboard feature data service.
 *
 * Purpose:
 * - Orchestrate dashboard API calls for page-level consumers.
 * - Shape data for the dashboard view model.
 */

import { ApiClient } from '../../services/api-client';
import { DateRange } from '../../../../shared/src/contracts';
import { DashboardViewModel } from '../../types/dashboard';

export class DashboardService {
  constructor(private readonly api: ApiClient) {}

  async fetchDashboard(range: DateRange): Promise<DashboardViewModel> {
    throw new Error(`Not implemented: fetch dashboard data for ${range.startDate}..${range.endDate}`);
  }
}
