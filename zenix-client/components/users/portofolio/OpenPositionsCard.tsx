// Daftar feature:
// Table: Semua Order dengan status OPEN
// Columns: Symbol, Type, Volume, Open Price, Current Price, Floating PnL, SL, TP
// Action: Close Position button per row
// Total Floating PnL summary

'use client';

import Orders from '@/types/orders';
import Transaction from '@/types/transaction';
import { mockOpenOrders } from '@/lib/mock';

interface OpenPositionsCardProps {
    userId: string;
    orders: Orders[];
    transaction: Transaction[];
}

export default function OpenPositionsCard({ userId, orders, transaction }: OpenPositionsCardProps) {
    const openOrders = mockOpenOrders;
    const totalFloatingPnL = openOrders.reduce((total, order) => total + order.gainerPnl, 0);
}
