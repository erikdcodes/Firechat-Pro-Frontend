import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";

const MessagesList = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  if (!selectedContact) return "";

  return (
    <Wrapper>
      {selectedContact.messages.map((item) => (
        <div>{item.message}</div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: calc(100% - 100px);
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MessagesList;
