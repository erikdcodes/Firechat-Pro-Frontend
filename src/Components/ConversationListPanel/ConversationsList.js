import { useEffect, useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import ConversationItem from "../ConversationListPanel/ConversationItem";
import { getActiveContactsByUser } from "../../Data/Axios.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { userDataState, selectedContactState } from "../../Store/UIState";
import io from "socket.io-client";
import AddContactButton from "../AddContactButton";
const URL = process.env.REACT_APP_SERVER_URL;

const ConversationsList = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userAuth0ID, userTwilioPhone } = useRecoilValue(userDataState);
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);

  const loadData = async () => {
    const contactsData = await getActiveContactsByUser(userAuth0ID);
    setContacts(contactsData);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedContact]);

  useEffect(() => {
    const socket = io(URL, {
      transports: ["websocket"],
    });
    socket.on("smsReceived", (contact) => {
      if (contact.userTwilioPhone === userTwilioPhone) {
        loadData();
      }

      if (contact._id === selectedContact?._id) {
        setSelectedContact({ ...contact });
      }
    });

    return () => {
      socket.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedContact]);

  return (
    <Wrapper>
      <div className="header">
        <h4>Inbox</h4>
      </div>
      {isLoading ? (
        <div className="loading">
          <p>Retrieving contacts...</p>
        </div>
      ) : !contacts || !contacts?.length ? (
        <div className="loading">
          <p>no conversations</p>
        </div>
      ) : (
        <div className="list-wrapper">
          {contacts?.map((item, i) => (
            <ConversationItem contact={item} key={i + item._id} />
          ))}
        </div>
      )}
      <AddContactButton />
    </Wrapper>
  );
};

// styles
const Wrapper = styled.div`
  height: 100%;
  .header {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${styleVariables.bgColor1};

    .selected {
      color: ${styleVariables.accentColorBlue};
      background: transparent;
    }
  }

  .list-wrapper {
    height: 100%;
    padding-bottom: 200px;
    overflow-y: scroll;
  }

  .loading {
    padding: 20px;
  }
`;

export default ConversationsList;
