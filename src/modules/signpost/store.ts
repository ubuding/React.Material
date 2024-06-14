import { atom, useAtom } from "jotai";

const data = {
  count: atom<number>(0),
};

export const useSignpostStore = (key: keyof Data) => {
  return useAtom(data[key]);
};

interface Data {
  count: number;
}
