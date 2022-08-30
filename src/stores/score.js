import create from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  wins: 0,
  addWin: () => set({ wins: wins + 1 }),
});

const useScore = create(
  persist(store, {
    name: "score",
  })
);
export default useScore;
