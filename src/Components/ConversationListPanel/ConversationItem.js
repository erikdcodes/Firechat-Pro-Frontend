import styled from "styled-components";
import dayjs from "dayjs";
import ReactTooltip from "react-tooltip";

import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import { formatPhoneNumber } from "react-phone-number-input/input";
import { markAsRead } from "../../Data/Axios";

const messageDateConverter = (lastMessageDate) => {
  const now = dayjs();
  const lastMessageObj = dayjs(lastMessageDate);
  const difference = now.diff(lastMessageObj, "hour");

  if (difference < 12) return dayjs(lastMessageObj).format("h:mm A");
  return dayjs(lastMessageObj).format("MM/DD/YYYY");
};

// component
const ConversationItem = (props) => {
  const { _id, name, contactPhone, messages, hasUnreadMessage } = props.contact;
  const lastMessage = messages[messages.length - 1];
  const lastMessageDate = messageDateConverter(lastMessage?.updatedAt);
  const lastMessageDateTooltip = dayjs(lastMessage?.updatedAt).format(
    "MM/DD/YYYY h:mm A"
  );
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);

  const handleClick = async () => {
    if (hasUnreadMessage) {
      await markAsRead(_id);
      setSelectedContact(props.contact);
    }
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
            {name ? name : formatPhoneNumber(contactPhone)}
          </div>
          <div className="date" data-tip={lastMessageDateTooltip}>
            {lastMessageDate}
          </div>
          <ReactTooltip delayShow={300} effect="solid" />
        </div>
        <div className={hasUnreadMessage ? "unread message" : "message"}>
          {lastMessage?.text?.substring(0, 50)}
        </div>
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

  .unread {
    font-weight: 600;
  }

  .unread::before {
    content: "";
    margin-right: 3px;
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

export default ConversationItem;
