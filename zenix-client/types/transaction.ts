interface Transaction {
    id: string;
    accountId: string;
    bankAccountId: string;
    amount: number;
    type: "DEPOSIT" | "WITHDRAW" | "TRANSFER";
    status: "PENDING" | "SUCCESS" | "FAILED";
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export default Transaction;
