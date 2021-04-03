import { atom } from "recoil";

export const selectedContactState = atom({
  key: "selectedContactState",
  default: null,
});

export const loggedInState = atom({
  key: "loggedInState",
  default: true,
});
