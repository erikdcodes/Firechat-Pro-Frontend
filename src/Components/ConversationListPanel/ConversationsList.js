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
    let contactsData;
    if (activeLink === "ACTIVE") {
      contactsData = await getActiveContactsByUser(userAuth0ID); //active contacts
    }
    if (activeLink === "ALL") {
      contactsData = await getAllContactsByUser(userAuth0ID); //all contacts
    }

    setContacts(contactsData);
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

      if (contact._id === selectedContact?._id) {
        setSelectedContact({ ...contact });
      }
    });

    return () => {
      socket.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedContact]);

  if (isLoading)
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
        <div className="loading">
          <p>Retrieving contacts...</p>
        </div>
      </Wrapper>
    );

  if (!contacts || !contacts?.length)
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
        <div className="loading">
          <p>no conversations</p>

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
