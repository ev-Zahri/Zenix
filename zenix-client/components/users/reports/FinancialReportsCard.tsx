'use client';

interface FinancialReportsCardProps {
    idAccount: string;
    interval: string;
}

// Daftar feature:
// 1. Deposit/Withdrawal History Table (dari Transaction)
// 2. Balance History Chart (Line Chart dari Wallet)
// 3. Equity Curve
// 4. Date Range Filter (Last 7 days, 30 days, 90 days, Custom)

export const FinancialReportsCard = ({ idAccount, interval }: FinancialReportsCardProps) => {
    return (
        <div className="mb-8 w-full rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] border-slate-200 pb-4 dark:border-slate-800">
                Financial Reports
            </h2>
            <div className="flex flex-col gap-3">

            </div>
        </div>
    )
}