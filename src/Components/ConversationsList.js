import { useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../GlobalStyles/StyleVariables";
import ConversationItem from "./ConversationItem";
import data from "../FakeData/FakeContacts.js";

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
      {data.map((item, i) => (
        <ConversationItem contact={item} key={i} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .header {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${styleVariables.bgColor1};
  }

  .selected {
    color: ${styleVariables.accentColorBlue};
    background: transparent;
  }
`;

export default ConversationsList;
