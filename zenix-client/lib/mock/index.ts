// Mock Data Index - Easy imports for all mock data
// Usage: import { mockOrders, mockSymbols, ... } from '@/lib/mock';

// Users & Authentication
export { default as mockUsers } from './users';
export { default as mockKYC } from './kyc';

// Notifications
export { default as mockNotifications } from './notification';

// Trading
export { 
  default as mockOrders,
  mockOpenOrders,
  mockPendingOrders,
  mockClosedOrders,
  mockCancelledOrders,
} from './orders';

export {
  default as mockSymbols,
  mockCryptoSymbols,
  mockForexSymbols,
  mockCommoditySymbols,
} from './symbol';

export {
  default as mockTradingAccounts,
  mockActiveAccounts,
  mockRealAccounts,
  mockDemoAccounts,
} from './tradingAccount';

// Alerts
export {
  default as mockPriceAlerts,
  mockActiveAlerts,
  mockTriggeredAlerts,
  mockInactiveAlerts,
} from './priceAlert';

// Finance
export {
  default as mockTransactions,
  mockDepositTransactions,
  mockWithdrawTransactions,
  mockTransferTransactions,
  mockPendingTransactions,
  mockSuccessTransactions,
  mockFailedTransactions,
} from './transaction';

export {
  default as mockUserBankAccounts,
  mockPrimaryBankAccounts,
} from './userBankAccount';

// Watchlist
export { default as mockWatchlists } from './watchlist';
