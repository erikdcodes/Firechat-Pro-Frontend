import styled from "styled-components";
import MessagesList from "./MessagesList";
import SendMessageForm from "./SendMessageForm";

const MessagesPanel = () => {
  return (
    <Wrapper>
      <MessagesList />
      <SendMessageForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

export default MessagesPanel;
