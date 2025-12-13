import Watchlist from '@/types/watchlist';

export const mockWatchlists: Watchlist[] = [
  {
    id: 'watchlist-001',
    userId: 'user-001',
    symbolId: ['BTCUSDT', 'ETHUSDT', 'SOLUSDT', 'BNBUSDT'],
    createdAt: '2024-01-20T08:00:00Z',
    updatedAt: '2024-12-10T15:00:00Z',
    deletedAt: '',
  },
  {
    id: 'watchlist-002',
    userId: 'user-001',
    symbolId: ['EURUSD', 'GBPUSD', 'USDJPY'],
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-11-28T12:00:00Z',
    deletedAt: '',
  },
  {
    id: 'watchlist-003',
    userId: 'user-001',
    symbolId: ['XAUUSD', 'XAGUSD', 'WTIUSD'],
    createdAt: '2024-03-15T09:00:00Z',
    updatedAt: '2024-12-05T14:00:00Z',
    deletedAt: '',
  },
  {
    id: 'watchlist-004',
    userId: 'user-002',
    symbolId: ['BTCUSDT', 'XAUUSD', 'EURUSD'],
    createdAt: '2024-02-20T11:00:00Z',
    updatedAt: '2024-12-01T10:00:00Z',
    deletedAt: '',
  },
];

export default mockWatchlists;
