import { useEffect, useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import ConversationItem from "../ConversationListPanel/ConversationItem";
import {
  getActiveContactsByUser,
  getAllContactsByUser,
} from "../../Data/Axios.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { userDataState, selectedContactState } from "../../Store/UIState";
import io from "socket.io-client";
import AddContactButton from "../AddContactButton";
const URL = process.env.REACT_APP_SERVER_URL;

const ConversationsList = () => {
  const [activeLink, setActiveLink] = useState("ACTIVE");
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userAuth0ID, userTwilioPhone } = useRecoilValue(userDataState);
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);

  const loadData = async (activeLink) => {
    let newdata;
    if (activeLink === "ACTIVE") {
      newdata = await getActiveContactsByUser(userAuth0ID);
    }
    if (activeLink === "ALL") {
      newdata = await getAllContactsByUser(userAuth0ID);
    }
    const sorted = [...newdata].sort((a, b) => {
      const valueA = a.messages[a.messages.length - 1]?.createdAt;
      const valueB = b.messages[b.messages.length - 1]?.createdAt;
      if (valueA > valueB) return -1;
      if (valueA < valueB) return 1;
      return 0;
    });
    setContacts(sorted);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData(activeLink);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedContact, activeLink]);

  useEffect(() => {
    const socket = io(URL, {
      transports: ["websocket"],
    });
    socket.on("smsReceived", (contact) => {
      if (contact.userTwilioPhone === userTwilioPhone) {
        loadData(activeLink);
      }

      if (selectedContact && contact._id === selectedContact._id) {
        setSelectedContact(contact);
      }
    });

    return () => {
      socket.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading)
    return (
      <Wrapper>
        <div className="loading">
          <p>Retrieving contacts...</p>
        </div>
      </Wrapper>
    );

  if (!contacts || contacts?.length === 0)
    return (
      <Wrapper>
        <div className="loading">
          <p>add a contact</p>

          <AddContactButton />
        </div>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div className="header">
        <button
          onClick={() => setActiveLink("ACTIVE")}
          className={activeLink === "ACTIVE" ? "link selected" : "link"}
        >
          Active
        </button>
        <button
          onClick={() => setActiveLink("ALL")}
          className={activeLink === "ALL" ? "link selected" : "link"}
        >
          All
        </button>
      </div>
      <div className="list-wrapper">
        {contacts?.map((item, i) => (
          <ConversationItem contact={item} key={i + item._id} />
        ))}
        <AddContactButton />
      </div>
    </Wrapper>
  );
};

// styles
const Wrapper = styled.div`
  height: 100%;
  .header {
    padding: 0 30px;
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
