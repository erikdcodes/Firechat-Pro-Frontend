import { atom } from "recoil";

export const selectedContactState = atom({
  key: "selectedContactState",
  default: null, //object
});

export const loggedInState = atom({
  key: "loggedInState",
  default: true,
});

export const userDataState = atom({
  key: "userDataState",
  default: null, //object
});
