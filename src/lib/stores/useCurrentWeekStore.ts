import { create } from 'zustand';
import { getCurrentWeekNumber } from '../utils';

type CurrentWeekStore = {
    currentWeek: number;
    setCurrentWeek: (week: number) => void;
}

const useCurrentWeekStore = create<CurrentWeekStore>((set) => ({
    currentWeek: getCurrentWeekNumber(),
    setCurrentWeek: (week: number) => set({ currentWeek: week }),
}));

export default useCurrentWeekStore;