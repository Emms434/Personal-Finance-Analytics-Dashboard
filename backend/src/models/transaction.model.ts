/**
 * Transaction persistence model.
 *
 * Purpose:
 * - Represent transaction records in storage.
 * - Document fields expected by repositories.
 */

export interface TransactionModel {
  id: string;
  userId: string;
  accountId: string;
  amount: number;
  currency: string;
  category: string;
  merchant?: string;
  bookedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
