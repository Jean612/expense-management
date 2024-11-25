import { create } from 'zustand';

type CurrencyStore = {
    currency: string;
    setCurrency: (currency: string) => void;
}

const useCurrencyStore = create<CurrencyStore>((set) => ({
    currency: 'PEN',
    setCurrency: (currency: string) => set({ currency }),
}));