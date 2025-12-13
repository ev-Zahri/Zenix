import Users from '@/types/users';

export const mockUsers: Users[] = [
  {
    id: 'user-001',
    email: 'john.doe@example.com',
    password: 'hashed_password_123',
    isVerified: true,
    createdAt: '2024-01-15T08:00:00Z',
    updatedAt: '2024-06-20T14:30:00Z',
    deletedAt: '',
  },
  {
    id: 'user-002',
    email: 'jane.smith@example.com',
    password: 'hashed_password_456',
    isVerified: true,
    createdAt: '2024-02-10T10:15:00Z',
    updatedAt: '2024-07-05T09:45:00Z',
    deletedAt: '',
  },
  {
    id: 'user-003',
    email: 'bob.wilson@example.com',
    password: 'hashed_password_789',
    isVerified: false,
    createdAt: '2024-03-22T16:20:00Z',
    updatedAt: '2024-03-22T16:20:00Z',
    deletedAt: '',
  },
];

export default mockUsers;
