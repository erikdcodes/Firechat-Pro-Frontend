import { atom } from "recoil";

export const selectedContactState = atom({
  key: "selectedContactState",
  default: null, //object
});

export const loggedInState = atom({
  key: "loggedInState",
  default: true, //boolean
});

export const userDataState = atom({
  key: "userDataState",
  default: {
    _id: "60c6b2f3ba0a6e08494df73b",
    userTwilioPhone: "+19512277675",
    userAuth0ID: "1234",
    __v: 0,
  }, //object
});
