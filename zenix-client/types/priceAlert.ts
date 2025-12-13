interface PriceAlert {
    id: string;
    userId: string;
    symbolId: string;
    notificationId: string;
    targetPrice: number;
    condition: "ABOVE" | "BELOW" | "EQUAL";
    status: "ACTIVE" | "INACTIVE" | "TRIGGERED";
    isRecurring: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export default PriceAlert;
