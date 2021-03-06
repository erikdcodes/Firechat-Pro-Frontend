import styled from "styled-components";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import ReactTooltip from "react-tooltip";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { formatPhoneNumber } from "react-phone-number-input/input";
import { markAsRead } from "../../Data/Axios";
import useSelectedContact from "../../Hooks/useSelectedContact.js";
import useShowUnreadNotification from "../../Hooks/useShowUnreadNotification.js";

dayjs.extend(calendar);

const relativeDate = (date) => {
  const relative = dayjs(date).calendar(null, {
    sameDay: "[Today] h:mm A", // The same day ( Today at 2:30 AM )
    nextDay: "[Tomorrow at] h:mm A", // The next day ( Tomorrow at 2:30 AM )
    nextWeek: "[This] dddd", // The next week ( Sunday at 2:30 AM )
    lastDay: "[Yesterday] h:mm A", // The day before ( Yesterday at 2:30 AM )
    lastWeek: "[Last] dddd MM/DD/YYYY", // Last week ( Last Monday at 2:30 AM )
    sameElse: "MM/DD/YYYY", // Everything else ( 7/10/2011 )
  });
  return relative;
};

// component
const ConversationItem = (props) => {
  const { _id, firstName, lastName, contactPhone, messages, hasUnreadMessage } =
    props.contact;
  const lastMessage = messages[messages.length - 1];
  const lastMessageDateRaw = lastMessage?.updatedAt;
  // const lastMessageDate = messageDateConverter(lastMessage?.updatedAt);
  const lastMessageDateTooltip = dayjs(lastMessage?.updatedAt).format(
    "MM/DD/YYYY h:mm A"
  );
  const [selectedContact, setSelectedContact] = useSelectedContact();
  const [, setShowUnreadNotification] = useShowUnreadNotification();

  const displayName = () => {
    if (firstName && lastName) return `${firstName} ${lastName}`;
    if (firstName && !lastName) return `${firstName}`;
    if (!firstName && lastName) return `${lastName}`;
    return "";
  };

  const handleClick = async () => {
    const newContact = { ...props.contact };
    if (hasUnreadMessage) {
      await markAsRead(_id);
      setSelectedContact(newContact);
    }
    if (props.contact?._id === selectedContact?._id) return;
    setSelectedContact(newContact);

    setShowUnreadNotification(false);

    return;
  };

  return (
    <Wrapper key={_id} onClick={handleClick}>
      <div
        className={
          selectedContact?._id === _id ? "selected container" : "container"
        }
      >
        <div className="conversation-header">
          <div className="name">
            {displayName() ? displayName() : formatPhoneNumber(contactPhone)}
          </div>
          <div className="date" data-tip={lastMessageDateTooltip}>
            {relativeDate(lastMessageDateRaw)}
          </div>
          <ReactTooltip effect="solid" />
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

export default ConversationItem;
