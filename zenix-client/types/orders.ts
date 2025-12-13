
interface Orders {
    id: string;
    accountId: string;
    symbolId: string;
    type: "BUY" | "SELL";
    volume: number;
    openPrice: number;
    currentPrice: number;
    closePrice: number;
    stopLoss: number;
    takeProfit: number;
    gainerPnl: number;
    status: "OPEN" | "CLOSED" | "PENDING" | "CANCELLED";
    commision: number;
    closeReason: string;
    createdAt: string;
    updatedAt: string;
    closedAt: string;
}

export default Orders;