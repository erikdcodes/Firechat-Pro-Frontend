import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import { formatPhoneNumber } from "react-phone-number-input/input";

const ActionItem = (props) => {
  const { id, name, phone, nextAction } = props.contact;

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
          <div className="date">Due: {nextAction.dueDate}</div>
        </div>
        <div className="message">{nextAction.task.substring(0, 50)}</div>
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

export default ActionItem;
