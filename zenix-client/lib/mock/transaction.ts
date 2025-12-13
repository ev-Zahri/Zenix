import Transaction from '@/types/transaction';

export const mockTransactions: Transaction[] = [
  {
    id: 'txn-001',
    accountId: 'acc-001',
    bankAccountId: 'bank-001',
    amount: 5000,
    type: 'DEPOSIT',
    status: 'SUCCESS',
    createdAt: '2024-12-12T10:00:00Z',
    updatedAt: '2024-12-12T10:15:00Z',
    deletedAt: '',
  },
  {
    id: 'txn-002',
    accountId: 'acc-001',
    bankAccountId: 'bank-001',
    amount: 1000,
    type: 'WITHDRAW',
    status: 'PENDING',
    createdAt: '2024-12-13T09:00:00Z',
    updatedAt: '2024-12-13T09:00:00Z',
    deletedAt: '',
  },
  {
    id: 'txn-003',
    accountId: 'acc-001',
    bankAccountId: 'bank-002',
    amount: 2500,
    type: 'DEPOSIT',
    status: 'SUCCESS',
    createdAt: '2024-12-10T14:30:00Z',
    updatedAt: '2024-12-10T14:45:00Z',
    deletedAt: '',
  },
  {
    id: 'txn-004',
    accountId: 'acc-003',
    bankAccountId: 'bank-001',
    amount: 500,
    type: 'TRANSFER',
    status: 'SUCCESS',
    createdAt: '2024-12-08T11:00:00Z',
    updatedAt: '2024-12-08T11:05:00Z',
    deletedAt: '',
  },
  {
    id: 'txn-005',
    accountId: 'acc-001',
    bankAccountId: 'bank-001',
    amount: 3000,
    type: 'WITHDRAW',
    status: 'FAILED',
    createdAt: '2024-12-05T16:00:00Z',
    updatedAt: '2024-12-05T16:30:00Z',
    deletedAt: '',
  },
  {
    id: 'txn-006',
    accountId: 'acc-001',
    bankAccountId: 'bank-001',
    amount: 10000,
    type: 'DEPOSIT',
    status: 'SUCCESS',
    createdAt: '2024-11-28T09:00:00Z',
    updatedAt: '2024-11-28T09:20:00Z',
    deletedAt: '',
  },
  {
    id: 'txn-007',
    accountId: 'acc-001',
    bankAccountId: 'bank-002',
    amount: 750,
    type: 'WITHDRAW',
    status: 'SUCCESS',
    createdAt: '2024-11-20T13:00:00Z',
    updatedAt: '2024-11-20T14:00:00Z',
    deletedAt: '',
  },
];

// Helper exports
export const mockDepositTransactions = mockTransactions.filter(txn => txn.type === 'DEPOSIT');
export const mockWithdrawTransactions = mockTransactions.filter(txn => txn.type === 'WITHDRAW');
export const mockTransferTransactions = mockTransactions.filter(txn => txn.type === 'TRANSFER');
export const mockPendingTransactions = mockTransactions.filter(txn => txn.status === 'PENDING');
export const mockSuccessTransactions = mockTransactions.filter(txn => txn.status === 'SUCCESS');
export const mockFailedTransactions = mockTransactions.filter(txn => txn.status === 'FAILED');

export default mockTransactions;
