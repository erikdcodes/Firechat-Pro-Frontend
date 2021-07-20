import styled from "styled-components";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import ReactTooltip from "react-tooltip";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import { formatPhoneNumber } from "react-phone-number-input/input";

dayjs.extend(calendar);

const messageDateConverter = (dueDate) => {
  const dueDateObj = dayjs(dueDate);

  return dayjs(dueDateObj).format("MM/DD/YYYY h:mm A");
};

const relativeDue = (dueDate) => {
  const now = dayjs();
  const dueDateObj = dayjs(dueDate);
  if (dueDateObj.isBefore(now)) return "PASTDUE";
  if (dueDateObj.isSame(now, "day")) return "DUETODAY";
  return;
};

// component
const ActionItem = (props) => {
  const { _id, firstName, contactPhone, nextAction } = props.contact;
  const dueDate = messageDateConverter(nextAction.dueDate);
  const dueDateTooltip = dayjs(nextAction.dueDate).format("MM/DD/YYYY h:mm A");
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);

  const handleClick = async () => {
    if (props.contact?._id === selectedContact?._id) return;
    setSelectedContact(props.contact);
    return;
  };

  return (
    <Wrapper onClick={handleClick}>
      <div
        className={
          selectedContact?._id === _id ? "selected container" : "container"
        }
      >
        <div className="conversation-header">
          <div className="name">
            {firstName ? firstName : formatPhoneNumber(contactPhone)}
          </div>
          <div
            className={
              relativeDue(dueDate) === "PASTDUE"
                ? "past date"
                : relativeDue(dueDate) === "DUETODAY"
                ? " today date"
                : "date "
            }
            data-tip={dueDateTooltip}
          >
            Due: {dueDate}
          </div>
          <ReactTooltip delayShow={300} effect="solid" />
        </div>
        <div className="message">{nextAction?.text?.substring(0, 50)}</div>
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
    flex-direction: column;
    font-weight: 600;
  }

  .date {
    color: ${styleVariables.primaryTextColor};
    font-size: ${styleVariables.smallerTextSize};
    font-weight: 400;
  }

  .past {
    color: ${styleVariables.accentColorRed};
  }

  .today {
    color: ${styleVariables.accentColorBlue};
  }

  .unread {
    font-weight: 600;
  }

  .unread::before {
    content: "";
    margin-right: 10px;
    border-left: 3px solid ${styleVariables.accentColorBlue};
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
