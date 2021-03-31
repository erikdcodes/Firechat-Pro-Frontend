import React from "react";
import styled from "styled-components";
import ConversationItem from "./ConversationItem";
import data from "../FakeData/FakeContacts.js";

const ConversationsList = () => {
  return (
    <Wrapper>
      {data.map((item, i) => (
        <ConversationItem contact={item} key={i} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ConversationsList;
