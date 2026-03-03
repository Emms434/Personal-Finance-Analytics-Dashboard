/**
 * Budget management and variance logic.
 *
 * Purpose:
 * - Handle budget lifecycle methods.
 * - Compute planned vs actual spend outcomes.
 */

import { Budget, DateRange } from '../../../shared/src/contracts';

export class BudgetService {
  async createBudget(userId: string, payload: Omit<Budget, 'id'>): Promise<Budget> {
    throw new Error(`Not implemented: create budget for ${userId}`);
  }

  async getBudgetVariance(userId: string, range: DateRange): Promise<Array<{ category: string; variance: number }>> {
    throw new Error(`Not implemented: budget variance for ${userId}`);
  }
}
