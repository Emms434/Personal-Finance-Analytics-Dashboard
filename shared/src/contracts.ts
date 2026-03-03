/**
 * Shared API contracts and domain model types used across frontend and backend.
 *
 * Purpose:
 * - Keep frontend/backend payload shapes synchronized.
 * - Make service method signatures explicit before implementation.
 */

export type CurrencyCode = 'USD' | 'EUR' | 'GBP';

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  currency: CurrencyCode;
  category: string;
  merchant?: string;
  bookedAt: string;
  notes?: string;
}

export interface Budget {
  id: string;
  category: string;
  limitAmount: number;
  period: 'monthly' | 'weekly';
}

export interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate?: string;
}

export interface DashboardKpis {
  income: number;
  expenses: number;
  netCashFlow: number;
  savingsRate: number;
}
