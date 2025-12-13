interface TradingAccount {
    id: string;
    userId: string;
    nameAccount:string;
    pin?: string;
    type: "DEMO" | "REAL";
    balance: number;
    leverage: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export default TradingAccount;