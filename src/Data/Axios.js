import axios from "axios";
const URL = "http://localhost:5000";

export const getAllContactsByUser = async (userAuth0ID) => {
  try {
    const data = await axios.post(`${URL}/api/contacts/`, {
      userAuth0ID,
    });
    const contacts = await data.data;
    console.log(contacts.contacts);
    return contacts.contacts;
  } catch (error) {
    console.log(error);
  }
};

export const getActiveContactsByUser = async (userAuth0ID) => {
  try {
    const data = await axios.post(`${URL}/api/contacts/active`, {
      userAuth0ID,
    });
    const contacts = await data.data;
    console.log(contacts.contacts);
    return contacts.contacts;
  } catch (error) {
    console.log(error);
  }
};
