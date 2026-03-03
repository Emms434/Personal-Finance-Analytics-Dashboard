/**
 * Date range utility helpers.
 *
 * Purpose:
 * - Normalize date windows used by analytics queries.
 * - Guard against invalid date input.
 */

import { DateRange } from '../../../shared/src/contracts';

export function normalizeDateRange(range: DateRange): DateRange {
  // TODO: parse, validate, and normalize to ISO boundaries.
  return range;
}
