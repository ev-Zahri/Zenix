'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  createChart, 
  ColorType, 
  CandlestickSeries,
  IChartApi,
  ISeriesApi,
  Time,
  CrosshairMode,
  PriceScaleMode,
} from 'lightweight-charts';

interface CandleChartProps {
  symbol?: string;
  timeframe?: string;
}

export const CandleChart = ({ symbol = 'EUR/USD', timeframe = '1H' }: CandleChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);
  const [price, setPrice] = useState<string>('0.0000');
  const [time, setTime] = useState<string>('');

  // Generate more realistic mock data
  const generateMockData = () => {
    const data = [];
    const basePrice = 1.0850;
    let currentPrice = basePrice;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 100); // 100 hari terakhir

    for (let i = 0; i < 100; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      // Random walk untuk simulasi pergerakan harga
      const change = (Math.random() - 0.5) * 0.01;
      const open = currentPrice;
      const close = open + change;
      const high = Math.max(open, close) + Math.random() * 0.005;
      const low = Math.min(open, close) - Math.random() * 0.005;
      
      currentPrice = close;
      
      data.push({
        time: date.toISOString().split('T')[0] as Time,
        open: Number(open.toFixed(5)),
        high: Number(high.toFixed(5)),
        low: Number(low.toFixed(5)),
        close: Number(close.toFixed(5)),
      });
    }
    
    return data;
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Cleanup previous chart
    if (chartRef.current) {
      chartRef.current.remove();
    }

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#0f172a' }, // background-dark
        textColor: '#d1d5db',
        fontSize: 12,
      },
      grid: {
        vertLines: { 
          color: '#1e293b', // panel-dark
          style: 1, // Solid line
        },
        horzLines: { 
          color: '#1e293b', // panel-dark
          style: 1, // Solid line
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight || 400,
      crosshair: {
        mode: CrosshairMode.Normal, // TradingView-like crosshair
        vertLine: {
          color: '#3b82f6', // accent-blue
          width: 1,
          style: 2, // Dashed line
          labelBackgroundColor: '#1e293b',
        },
        horzLine: {
          color: '#3b82f6', // accent-blue
          width: 1,
          style: 2, // Dashed line
          labelBackgroundColor: '#1e293b',
        },
      },
      rightPriceScale: {
        borderColor: '#1e293b',
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
        entireTextOnly: false,
        mode: PriceScaleMode.Normal,
      },
      timeScale: {
        borderColor: '#1e293b',
        timeVisible: true,
        secondsVisible: false,
        rightOffset: 12,
        barSpacing: 6,
        fixLeftEdge: false,
        fixRightEdge: false,
      },
      handleScroll: {
        mouseWheel: true, // Enable zoom dengan mouse wheel
        pressedMouseMove: true, // Enable pan dengan drag
        horzTouchDrag: true,
        vertTouchDrag: true,
      },
      handleScale: {
        axisPressedMouseMove: {
          time: true,
          price: true,
        },
        axisDoubleClickReset: true, // Double click untuk reset zoom
        mouseWheel: true,
        pinch: true,
      },
    });

    chartRef.current = chart;

    // Add candlestick series
    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#22c55e', // accent-green
      downColor: '#ef4444', // accent-red
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
      priceFormat: {
        type: 'price',
        precision: 5,
        minMove: 0.00001,
      },
    });

    seriesRef.current = candlestickSeries;

    // Set mock data
    const mockData = generateMockData();
    candlestickSeries.setData(mockData);

    // Fit content untuk menampilkan semua data
    chart.timeScale().fitContent();

    // Crosshair move handler - TradingView-like price/time display
    chart.subscribeCrosshairMove((param) => {
      if (param.point === undefined || !param.time || param.point.x < 0 || param.point.y < 0) {
        setPrice('0.0000');
        setTime('');
        return;
      }

      const data = param.seriesData.get(candlestickSeries);
      if (data && 'close' in data) {
        const candleData = data as { close: number; time: Time };
        setPrice(candleData.close.toFixed(5));
        
        // Format time
        if (typeof param.time === 'string') {
          const date = new Date(param.time);
          setTime(date.toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
          }));
        } else if (typeof param.time === 'number') {
          setTime(new Date(param.time * 1000).toLocaleString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
          }));
        } else {
          setTime('');
        }
      }
    });

    // Resize handler dengan debounce
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      if (!chartContainerRef.current || !chartRef.current) return;
      
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (chartContainerRef.current && chartRef.current) {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight || 400,
          });
        }
      }, 100);
    };

    // ResizeObserver untuk lebih akurat
    const resizeObserver = new ResizeObserver(handleResize);
    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [symbol, timeframe]);

  return (
    <div className="relative w-full h-full">
      {/* Price/Time Display - TradingView style */}
      <div className="absolute top-2 left-2 z-10 bg-panel-dark/90 backdrop-blur-sm border border-background-dark rounded px-3 py-1.5 text-xs font-mono">
        <div className="text-white">
          <span className="text-accent-blue font-semibold">{symbol}</span>
          {' '}
          <span className="text-gray-300">{price}</span>
        </div>
        {time && (
          <div className="text-gray-400 text-[10px] mt-0.5">{time}</div>
        )}
      </div>
      
      {/* Chart Container */}
      <div ref={chartContainerRef} className="w-full h-full" />
    </div>
  );
};