import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import Message from "../MessagesPanel/Message";

const MessagesList = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  if (!selectedContact) return "";

  return (
    <Wrapper className="hide-scrollbar">
      {selectedContact.messages.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 195px);
  overflow-y: scroll;
  padding-top: 10px;
`;

export default MessagesList;
