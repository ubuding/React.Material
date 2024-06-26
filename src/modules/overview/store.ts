import { atom, useAtom } from "jotai";

const data = {
  count: atom<number>(0),
};

export const useOverviewStore = (key: keyof Store) => {
  return useAtom(data[key]);
};

interface Store {
  count: number;
}
