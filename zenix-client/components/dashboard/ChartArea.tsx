'use client';

import { useState } from 'react';
import { CandleChart } from '@/components/charts/CandleChart';

const timeframes = ['1m', '5m', '1H', '4H', '1D'];

export const ChartArea = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1H');
  const [symbol, setSymbol] = useState('EUR/USD');

  return (
    <div className="flex-2 min-h-0 bg-panel-dark rounded-xl flex flex-col p-4">
      {/* Main Chart */}
      <div className="flex-1 flex flex-col gap-2 min-h-0">
        <div className="flex flex-col grow gap-2 min-h-0">
          <div className="flex-1 flex flex-col gap-2 p-2 min-h-0">
            <div className="flex justify-between items-center mb-2">
              <p className="text-white text-base font-medium leading-normal">
                {`${symbol} Candlestick`}
              </p>
              {/* Toolbar */}
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  {timeframes.map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setSelectedTimeframe(tf)}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        selectedTimeframe === tf
                          ? 'bg-background-dark text-accent-blue font-semibold'
                          : 'text-gray-400 hover:bg-background-dark'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                  <div className="w-px h-6 bg-background-dark mx-2" />
                  <button 
                    className="p-2 rounded-md hover:bg-background-dark text-gray-400 transition-colors"
                    title="Chart Type"
                  >
                    <span className="material-symbols-outlined text-base">candlestick_chart</span>
                  </button>
                  <button 
                    className="p-2 rounded-md hover:bg-background-dark text-gray-400 transition-colors"
                    title="Drawing Tools"
                  >
                    <span className="material-symbols-outlined text-base">draw</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <CandleChart symbol={symbol} timeframe={selectedTimeframe} />
            </div>
          </div>
          <div className="h-1/4 flex flex-col gap-2 p-2">
            <p className="text-white text-base font-medium leading-normal">RSI (14)</p>
            <div className="flex items-baseline gap-3">
              <p className="text-white tracking-light text-[24px] font-bold leading-tight truncate">
                55.20
              </p>
            </div>
            <div className="h-full w-full bg-center bg-no-repeat bg-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

