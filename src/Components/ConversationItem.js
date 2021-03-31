import styled from "styled-components";
import { styleVariables } from "../GlobalStyles/StyleVariables";
import { useSetRecoilState } from "recoil";
import { selectedContactState } from "../Store/UIState";

const ConversationItem = (props) => {
  const { name, phone, messages } = props.contact;
  const lastMessage = messages[messages.length - 1];

  const setSelectedContact = useSetRecoilState(selectedContactState);

  return (
    <Wrapper onClick={() => setSelectedContact(props.contact)}>
      <div className="conversation-header">
        <div>{name ? name : phone}</div>
        <div className="date">{lastMessage?.date}</div>
      </div>
      <div className="message">{lastMessage?.message}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 30px;
  border-bottom: 2px solid ${styleVariables.bgColor1};

  .conversation-header {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
  }

  .date {
    color: ${styleVariables.secondaryTextColor};
    font-size: ${styleVariables.smallestTextSize};
    font-weight: 400;
  }

  .message {
    font-size: ${styleVariables.smallerTextSize};
  }

  &:hover {
    cursor: pointer;
    background-color: ${styleVariables.bgColor1};
  }

  .selected {
    background: ${styleVariables.bgColor1};
  }
`;

export default ConversationItem;
