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

export const sendMessage = async (
  userAuth0ID,
  userTwilioPhone,
  contactPhone,
  text
) => {
  try {
    const data = await axios.post(`${URL}/api/sms/send`, {
      userAuth0ID,
      userTwilioPhone,
      contactPhone,
      text,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const markAsRead = async (contactID) => {
  try {
    await axios.patch(`${URL}/api/contacts/edit`, {
      contactID: contactID,
      updatedContactObj: {
        hasUnreadMessage: "false",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
