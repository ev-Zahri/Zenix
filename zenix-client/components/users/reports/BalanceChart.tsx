import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface Props {
  accountId: string;
  interval: string;
}

// Generate mock data based on interval
const generateMockData = (interval: string) => {
  const days = parseInt(interval) || 30;
  const data = [];
  let currentBalance = 10000;

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Simulate some random balance changes
    const change = Math.floor(Math.random() * 1000) - 400;
    currentBalance += change;

    data.push({
      date: date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' }),
      balance: currentBalance,
    });
  }
  return data;
};

export const BalanceChart: React.FC<Props> = ({ accountId, interval }) => {
  const data = useMemo(() => generateMockData(interval), [interval]);

  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
        Balance History
      </h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="date" 
              stroke="#94a3b8"
              fontSize={12}
            />
            <YAxis 
              stroke="#94a3b8"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '8px',
              }}
              labelStyle={{ color: '#e2e8f0' }}
            />
            <Line 
              type="monotone" 
              dataKey="balance" 
              stroke="#3b82f6" 
              strokeWidth={2} 
              dot={{ fill: '#3b82f6', r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
