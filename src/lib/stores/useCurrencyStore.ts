// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// type CurrencyStore = {
//   currency: "PEN" | "USD" | "EUR";
//   setCurrency: (currency: "PEN" | "USD" | "EUR") => void;
// };

// const useCurrencyStore = create<CurrencyStore>()(
//   persist(
//     (set) => ({
//       currency: "PEN",
//       setCurrency: (currency: "PEN" | "USD" | "EUR") => set({ currency }),
//     }),
//     {
//       name: "currency-store",
//     }
//   )
// );

// export default useCurrencyStore;
