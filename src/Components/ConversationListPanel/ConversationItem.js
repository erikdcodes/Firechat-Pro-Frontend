import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import { formatPhoneNumber } from "react-phone-number-input/input";

const ConversationItem = (props) => {
  const { id, name, phone, messages } = props.contact;
  const lastMessage = messages[messages.length - 1];

  const [selectedContact, setSelectedContact] = useRecoilState(
    selectedContactState
  );

  return (
    <Wrapper onClick={() => setSelectedContact(props.contact)}>
      <div
        className={
          selectedContact?.id === id ? "selected container" : "container"
        }
      >
        <div className="conversation-header">
          <div className="name">{name ? name : formatPhoneNumber(phone)}</div>
          <div className="date">{lastMessage?.date}</div>
        </div>
        <div className="message">{lastMessage?.message.substring(0, 50)}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    padding: 10px 30px;
    border-bottom: 2px solid ${styleVariables.bgColor1};
  }

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
    background-color: ${styleVariables.bgColor1};
  }
`;

export default ConversationItem;
