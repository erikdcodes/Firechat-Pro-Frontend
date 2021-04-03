import { useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import ConversationItem from "../ConversationListPanel/ConversationItem";
import data from "../../FakeData/FakeContacts.js";

const ConversationsList = () => {
  const [activeLink, setActiveLink] = useState("ACTIVE");

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
        {data.map((item, i) => (
          <ConversationItem contact={item} key={i + item.id} />
        ))}
      </div>
    </Wrapper>
  );
};

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
    padding-bottom: 120px;
    overflow-y: scroll;
  }
`;

export default ConversationsList;