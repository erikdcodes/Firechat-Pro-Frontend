import { useEffect, useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import ConversationItem from "../ConversationListPanel/ConversationItem";
import { getActiveContactsByUser } from "../../Data/Axios.js";
import { useRecoilValue } from "recoil";
import { userDataState } from "../../Store/UIState";

const ConversationsList = () => {
  const [activeLink, setActiveLink] = useState("ACTIVE");
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userAuth0ID } = useRecoilValue(userDataState);

  useEffect(() => {
    const getData = async () => {
      const newdata = await getActiveContactsByUser(userAuth0ID);
      setContacts(newdata);
      setIsLoading(false);
    };
    getData();
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

          <div className="add-contact-button-container">
            <button>Add Contact</button>
          </div>
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
        <div className="add-contact-button-container">
          <button>Add Contact</button>
        </div>
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

  .add-contact-button-container {
    position: fixed;
    bottom: 20px;
    left: 75px;

    button {
      padding: 15px 20px;
      color: ${styleVariables.bgColor1};
      background-color: ${styleVariables.accentColorGreen};
    }
  }
`;

export default ConversationsList;
