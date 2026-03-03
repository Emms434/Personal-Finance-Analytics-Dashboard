/**
 * Currency formatting helpers.
 *
 * Purpose:
 * - Standardize how monetary values are displayed in the UI.
 * - Reduce duplicated formatting logic in components.
 */

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}
