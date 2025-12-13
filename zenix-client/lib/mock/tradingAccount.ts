import TradingAccount from '@/types/tradingAccount';

export const mockTradingAccounts: TradingAccount[] = [
  {
    id: 'acc-001',
    userId: 'user-001',
    nameAccount: 'Main Trading Account',
    pin: undefined,
    type: 'REAL',
    balance: 15750.50,
    leverage: 100,
    isActive: true,
    createdAt: '2024-01-20T08:00:00Z',
    updatedAt: '2024-12-13T12:00:00Z',
    deletedAt: '',
  },
  {
    id: 'acc-002',
    userId: 'user-001',
    nameAccount: 'Demo Practice',
    pin: undefined,
    type: 'DEMO',
    balance: 100000,
    leverage: 500,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-12-10T16:00:00Z',
    deletedAt: '',
  },
  {
    id: 'acc-003',
    userId: 'user-001',
    nameAccount: 'Scalping Account',
    pin: undefined,
    type: 'REAL',
    balance: 5200.75,
    leverage: 200,
    isActive: true,
    createdAt: '2024-06-01T09:00:00Z',
    updatedAt: '2024-12-12T18:00:00Z',
    deletedAt: '',
  },
  {
    id: 'acc-004',
    userId: 'user-002',
    nameAccount: 'Jane Real Account',
    pin: undefined,
    type: 'REAL',
    balance: 8500.00,
    leverage: 100,
    isActive: true,
    createdAt: '2024-02-15T11:00:00Z',
    updatedAt: '2024-12-11T14:00:00Z',
    deletedAt: '',
  },
  {
    id: 'acc-005',
    userId: 'user-001',
    nameAccount: 'Old Demo Account',
    pin: undefined,
    type: 'DEMO',
    balance: 0,
    leverage: 100,
    isActive: false,
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-03-01T10:00:00Z',
    deletedAt: '2024-03-01T10:00:00Z',
  },
];

// Helper exports
export const mockActiveAccounts = mockTradingAccounts.filter(acc => acc.isActive);
export const mockRealAccounts = mockTradingAccounts.filter(acc => acc.type === 'REAL' && acc.isActive);
export const mockDemoAccounts = mockTradingAccounts.filter(acc => acc.type === 'DEMO' && acc.isActive);

export default mockTradingAccounts;
