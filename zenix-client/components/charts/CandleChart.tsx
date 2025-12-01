'use client';

import { useEffect, useRef } from 'react';
import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';

export const CandleChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#121212' }, // Dark BG
        textColor: '#d1d5db',
      },
      grid: {
        vertLines: { color: '#334155' },
        horzLines: { color: '#334155' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    const newSeries = chart.addSeries(CandlestickSeries, {
        upColor: '#22c55e', // Green Tailwind
        downColor: '#ef4444', // Red Tailwind
        borderVisible: false, 
        wickUpColor: '#22c55e',
        wickDownColor: '#ef4444',
    });

    // Mock Data
    newSeries.setData([
      { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
      { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
      { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
      { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
    ]);

    // Resize Handler
    const handleResize = () => {
        if(chartContainerRef.current){
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} className="w-full h-[400px]" />;
};