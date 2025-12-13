import PriceAlert from '@/types/priceAlert';

export const mockPriceAlerts: PriceAlert[] = [
  {
    id: 'alert-001',
    userId: 'user-001',
    symbolId: 'BTCUSDT',
    notificationId: 'notif-alert-001',
    targetPrice: 45000,
    condition: 'ABOVE',
    status: 'ACTIVE',
    isRecurring: false,
    createdAt: '2024-12-10T08:00:00Z',
    updatedAt: '2024-12-10T08:00:00Z',
    deletedAt: '',
  },
  {
    id: 'alert-002',
    userId: 'user-001',
    symbolId: 'BTCUSDT',
    notificationId: 'notif-alert-002',
    targetPrice: 40000,
    condition: 'BELOW',
    status: 'ACTIVE',
    isRecurring: true,
    createdAt: '2024-12-10T08:05:00Z',
    updatedAt: '2024-12-10T08:05:00Z',
    deletedAt: '',
  },
  {
    id: 'alert-003',
    userId: 'user-001',
    symbolId: 'ETHUSDT',
    notificationId: 'notif-alert-003',
    targetPrice: 2500,
    condition: 'ABOVE',
    status: 'ACTIVE',
    isRecurring: false,
    createdAt: '2024-12-11T10:00:00Z',
    updatedAt: '2024-12-11T10:00:00Z',
    deletedAt: '',
  },
  {
    id: 'alert-004',
    userId: 'user-001',
    symbolId: 'XAUUSD',
    notificationId: 'notif-alert-004',
    targetPrice: 2000,
    condition: 'EQUAL',
    status: 'TRIGGERED',
    isRecurring: false,
    createdAt: '2024-12-05T14:00:00Z',
    updatedAt: '2024-12-08T09:30:00Z',
    deletedAt: '',
  },
  {
    id: 'alert-005',
    userId: 'user-001',
    symbolId: 'EURUSD',
    notificationId: 'notif-alert-005',
    targetPrice: 1.1000,
    condition: 'ABOVE',
    status: 'INACTIVE',
    isRecurring: false,
    createdAt: '2024-11-20T12:00:00Z',
    updatedAt: '2024-12-01T10:00:00Z',
    deletedAt: '',
  },
];

// Helper exports
export const mockActiveAlerts = mockPriceAlerts.filter(alert => alert.status === 'ACTIVE');
export const mockTriggeredAlerts = mockPriceAlerts.filter(alert => alert.status === 'TRIGGERED');
export const mockInactiveAlerts = mockPriceAlerts.filter(alert => alert.status === 'INACTIVE');

export default mockPriceAlerts;
