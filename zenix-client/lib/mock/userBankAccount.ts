import UserBankAccount from '@/types/userBankAccount';

export const mockUserBankAccounts: UserBankAccount[] = [
  {
    id: 'bank-001',
    userId: 'user-001',
    bankName: 'Bank Central Asia (BCA)',
    accountNumber: '1234567890',
    accountHolder: 'John Doe',
    isPrimary: true,
    createdAt: '2024-01-18T10:00:00Z',
    updatedAt: '2024-01-18T10:00:00Z',
    deletedAt: '',
  },
  {
    id: 'bank-002',
    userId: 'user-001',
    bankName: 'Bank Mandiri',
    accountNumber: '0987654321',
    accountHolder: 'John Doe',
    isPrimary: false,
    createdAt: '2024-03-15T14:00:00Z',
    updatedAt: '2024-03-15T14:00:00Z',
    deletedAt: '',
  },
  {
    id: 'bank-003',
    userId: 'user-001',
    bankName: 'Bank Negara Indonesia (BNI)',
    accountNumber: '1122334455',
    accountHolder: 'John Doe',
    isPrimary: false,
    createdAt: '2024-06-20T09:00:00Z',
    updatedAt: '2024-06-20T09:00:00Z',
    deletedAt: '',
  },
  {
    id: 'bank-004',
    userId: 'user-002',
    bankName: 'Bank Rakyat Indonesia (BRI)',
    accountNumber: '5566778899',
    accountHolder: 'Jane Smith',
    isPrimary: true,
    createdAt: '2024-02-12T11:00:00Z',
    updatedAt: '2024-02-12T11:00:00Z',
    deletedAt: '',
  },
];

// Helper exports
export const mockPrimaryBankAccounts = mockUserBankAccounts.filter(acc => acc.isPrimary);

export default mockUserBankAccounts;
