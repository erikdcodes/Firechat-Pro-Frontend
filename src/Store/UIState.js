import { atom } from "recoil";

export const selectedContactState = atom({
  key: "selectedContactState",
  default: null,
});

export const loggedInState = atom({
  key: "loggedInState",
  default: false,
});

export const loggedInUserState = atom({
  key: "loggedInUserState",
  default: null,
});
