import { selector } from "recoil";
import { orderState } from "./atoms";

export const nameLengthSelector = selector({
  key: "nameLengthSelector",
  get: ({ get }) => {
    const order = get(orderState);
  },
});
