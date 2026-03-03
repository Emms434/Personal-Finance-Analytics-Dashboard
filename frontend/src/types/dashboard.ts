/**
 * Frontend dashboard view-model types.
 *
 * Purpose:
 * - Describe data consumed by UI widgets.
 * - Decouple UI types from transport-layer details if needed.
 */

import { DashboardKpis } from '../../../shared/src/contracts';

export interface DashboardViewModel {
  kpis: DashboardKpis;
  categoryBreakdown: Record<string, number>;
  cashFlowSeries: Array<{ date: string; value: number }>;
}
