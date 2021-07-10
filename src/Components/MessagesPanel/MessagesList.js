import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import Message from "../MessagesPanel/Message";

const MessagesList = () => {
  const selectedContact = useRecoilValue(selectedContactState);
  const listEnd = useRef(null);

  useEffect(() => {
    listEnd.current?.scrollIntoView({
      block: "nearest",
    });
  }, [selectedContact]);

  if (!selectedContact) return "";

  return (
    <Wrapper className="hide-scrollbar">
      <div>
        {selectedContact.messages?.map((message, i) => (
          <Message key={i} message={message} />
        ))}
        <div ref={listEnd}></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 200px);
  overflow-y: scroll;
  padding-top: 10px;
`;

export default MessagesList;
