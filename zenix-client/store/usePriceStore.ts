import { create } from 'zustand';

interface PriceState {
  currentPrice: number;
  lastPrice: number;
  setPrice: (price: number) => void;
}

export const usePriceStore = create<PriceState>((set) => ({
  currentPrice: 0,
  lastPrice: 0,
  setPrice: (price) => set((state) => ({ 
    lastPrice: state.currentPrice, 
    currentPrice: price 
  })),
}));