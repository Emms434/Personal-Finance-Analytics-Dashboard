/**
 * API controller for dashboard analytics endpoints.
 *
 * Purpose:
 * - Map HTTP requests to analytics service methods.
 * - Validate and transform request payloads.
 */

import { AnalyticsService } from '../../services/analytics.service';
import { DateRange } from '../../../../shared/src/contracts';

export class DashboardController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  async getDashboardSummary(userId: string, range: DateRange) {
    return this.analyticsService.getKpis(userId, range);
  }

  async getCategoryBreakdown(userId: string, range: DateRange) {
    return this.analyticsService.getCategoryBreakdown(userId, range);
  }
}
