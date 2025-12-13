import KYC from '@/types/kyc';

export const mockKYC: KYC[] = [
  {
    id: 'kyc-001',
    userId: 'user-001',
    name: 'John Doe',
    noKTP: '3201234567890001',
    imgKTP: '/images/kyc/ktp-001.jpg',
    domicile: 'Jakarta Selatan',
    adminNote: 'Dokumen lengkap dan valid',
    status: 'APPROVED',
    createdAt: '2024-01-16T09:00:00Z',
    updatedAt: '2024-01-18T14:00:00Z',
    deletedAt: '',
  },
  {
    id: 'kyc-002',
    userId: 'user-002',
    name: 'Jane Smith',
    noKTP: '3201234567890002',
    imgKTP: '/images/kyc/ktp-002.jpg',
    domicile: 'Bandung',
    adminNote: '',
    status: 'PENDING',
    createdAt: '2024-02-11T10:30:00Z',
    updatedAt: '2024-02-11T10:30:00Z',
    deletedAt: '',
  },
  {
    id: 'kyc-003',
    userId: 'user-003',
    name: 'Bob Wilson',
    noKTP: '3201234567890003',
    imgKTP: '/images/kyc/ktp-003.jpg',
    domicile: 'Surabaya',
    adminNote: 'Foto KTP tidak jelas, mohon upload ulang',
    status: 'REJECTED',
    createdAt: '2024-03-23T11:00:00Z',
    updatedAt: '2024-03-25T09:00:00Z',
    deletedAt: '',
  },
];

export default mockKYC;
