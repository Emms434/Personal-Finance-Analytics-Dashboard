/**
 * Business logic for financial analytics.
 *
 * Purpose:
 * - Convert transaction data into dashboard-ready metrics.
 * - Keep calculation rules in one maintainable service.
 */

import { DashboardKpis, DateRange } from '../../../shared/src/contracts';
import { TransactionRepository } from '../repositories/transaction.repository';

export class AnalyticsService {
  constructor(private readonly transactions: TransactionRepository) {}

  async getKpis(userId: string, range: DateRange): Promise<DashboardKpis> {
    throw new Error(`Not implemented: calculate KPIs for ${userId} in ${range.startDate}..${range.endDate}`);
  }

  async getCategoryBreakdown(userId: string, range: DateRange): Promise<Record<string, number>> {
    throw new Error(`Not implemented: category aggregation for ${userId}`);
  }

  async getCashFlowSeries(userId: string, range: DateRange): Promise<Array<{ date: string; value: number }>> {
    throw new Error(`Not implemented: time-series cash flow for ${userId}`);
  }
}
