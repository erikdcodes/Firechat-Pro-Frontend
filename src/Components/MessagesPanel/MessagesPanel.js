import styled from "styled-components";
import MessagesList from "./MessagesList";
import SendMessageForm from "./SendMessageForm";
import NextAction from "./NextAction";

const MessagesPanel = () => {
  return (
    <Wrapper>
      <NextAction />
      <MessagesList />
      <SendMessageForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

export default MessagesPanel;
