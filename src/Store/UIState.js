import { atom } from "recoil";

export const selectedContactState = atom({
  key: "selectedContactState",
  default: null,
});

export const isEditingState = atom({
  key: "isEditingState",
  default: false,
});
