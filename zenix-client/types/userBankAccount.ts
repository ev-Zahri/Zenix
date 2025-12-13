interface UserBankAccount {
    id: string;
    userId: string;
    bankName: string;
    accountNumber: string;
    accountHolder: string;
    isPrimary: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export default UserBankAccount;
