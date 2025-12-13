import React from 'react';

interface Transaction {
  id: string;
  date: string; // ISO date string
  type: 'Deposit' | 'Withdrawal';
  amount: number;
  description: string;
}

// Mock data – replace with real API call in production
const mockTransactions: Transaction[] = [
  { id: '1', date: '2025-11-01', type: 'Deposit', amount: 500, description: 'Salary' },
  { id: '2', date: '2025-11-05', type: 'Withdrawal', amount: -200, description: 'Groceries' },
  { id: '3', date: '2025-11-10', type: 'Deposit', amount: 300, description: 'Freelance' },
  { id: '4', date: '2025-12-01', type: 'Deposit', amount: 1000, description: 'Bonus' },
  { id: '5', date: '2025-12-05', type: 'Withdrawal', amount: -500, description: 'Rent' },
  { id: '6', date: '2025-12-10', type: 'Deposit', amount: 1500, description: 'Salary' },
  { id: '7', date: '2025-12-15', type: 'Withdrawal', amount: -1000, description: 'Groceries' },
  { id: '8', date: '2025-12-20', type: 'Deposit', amount: 2000, description: 'Bonus' },
  { id: '9', date: '2025-12-25', type: 'Withdrawal', amount: -750, description: 'Rent' },
  { id: '10', date: '2025-12-30', type: 'Deposit', amount: 1250, description: 'Salary' },
];

interface Props {
  accountId: string;
  interval: string;
}

export const DepositWithdrawalTable: React.FC<Props> = ({ accountId, interval }) => {
  // In a real implementation you would fetch data based on accountId and interval
  
  // Calculate date range based on interval
  const days = parseInt(interval) || 30; // Default to 30 days if parsing fails
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - days);

  const filtered = mockTransactions.filter((t) => {
    const d = new Date(t.date);
    return d >= startDate && d <= endDate;
  });

  // Debug log to verify filtered rows
  console.log('DepositWithdrawalTable filtered rows:', filtered.length, 'Interval:', interval);

  if (filtered.length === 0) {
    return (
      <div className="p-4 text-center text-slate-500 dark:text-slate-400">
        No transactions found for the selected interval ({days} days).
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Date</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Type</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Amount</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-900">
          {filtered.map((tx) => (
            <tr key={tx.id} className="border-b border-slate-200 dark:border-slate-800">
              <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">{tx.date}</td>
              <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">{tx.type}</td>
              <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">{tx.amount}</td>
              <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">{tx.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
