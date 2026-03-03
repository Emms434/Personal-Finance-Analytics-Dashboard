/**
 * Data access layer for transaction records.
 *
 * Purpose:
 * - Encapsulate raw data operations away from service logic.
 * - Provide reusable query methods for analytics use cases.
 */

import { DateRange, Transaction } from '../../../shared/src/contracts';

export class TransactionRepository {
  async findByUserAndDateRange(userId: string, range: DateRange): Promise<Transaction[]> {
    throw new Error(`Not implemented: query transactions for user ${userId} in ${range.startDate}..${range.endDate}`);
  }

  async createMany(userId: string, items: Transaction[]): Promise<void> {
    throw new Error(`Not implemented: bulk insert ${items.length} transactions for user ${userId}`);
  }
}
