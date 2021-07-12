import axios from "axios";
const URL = "http://localhost:5000";

export const getAllContactsByUser = async (userAuth0ID) => {
  try {
    const res = await axios.post(`${URL}/api/contacts/`, {
      userAuth0ID,
    });
    const contacts = await res.data;
    return contacts.contacts;
  } catch (error) {
    console.log(error);
  }
};

export const getActiveContactsByUser = async (userAuth0ID) => {
  try {
    const res = await axios.post(`${URL}/api/contacts/active`, {
      userAuth0ID,
    });
    const contacts = await res.data;
    return contacts.contacts;
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};

export const getAContact = async (contactID) => {
  try {
    const res = await axios.post(`${URL}/api/contacts/single`, {
      contactID,
    });

    const contact = await res.data;
    return contact.contact;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const sendMessage = async (
  userAuth0ID,
  userTwilioPhone,
  contactPhone,
  text
) => {
  try {
    const res = await axios.post(`${URL}/api/sms/send`, {
      userAuth0ID,
      userTwilioPhone,
      contactPhone,
      text,
    });
    const contact = await res.data;
    return contact.contact;
  } catch (error) {
    console.log(error);
    return error;
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
    return error;
  }
};

export const addNextAction = async (contactID, dueDate, text) => {
  try {
    const res = await axios.put(`${URL}/api/contacts/nextaction`, {
      contactID,
      nextActionObj: {
        dueDate,
        text,
      },
    });

    return await res.data.contact;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const completeNextAction = async (contactID) => {
  try {
    const res = await axios.patch(`${URL}/api/contacts/edit`, {
      contactID,
      updatedContactObj: {
        nextAction: null,
      },
    });
    return await res.data.contact;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addNote = async (contactID, text) => {
  try {
    const res = await axios.post(`${URL}/api/contacts/note`, {
      contactID,
      noteObj: {
        text,
      },
    });
    return await res.data.contact;
  } catch (error) {
    console.log(error);
    return error;
  }
};
