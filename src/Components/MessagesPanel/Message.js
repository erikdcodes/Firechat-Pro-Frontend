import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar);

const Message = (props) => {
  const { text, updatedAt, direction, status } = props.message;

  const relativeDate = (date) => {
    const relative = dayjs(date).calendar(null, {
      sameDay: "[Today] h:mm A", // The same day ( Today at 2:30 AM )
      nextDay: "[Tomorrow at] h:mm A", // The next day ( Tomorrow at 2:30 AM )
      nextWeek: "[This] dddd", // The next week ( Sunday at 2:30 AM )
      lastDay: "[Yesterday] h:mm A", // The day before ( Yesterday at 2:30 AM )
      lastWeek: "MM/DD/YYYY h:mm A", // Last week ( Last Monday at 2:30 AM )
      sameElse: "MM/DD/YYYY h:mm A", // Everything else ( 7/10/2011 )
    });
    return relative;
  };

  const messageDate = relativeDate(updatedAt);

  return (
    <Wrapper>
      <div
        className={direction === "fromUser" ? "bubble sent" : "bubble received"}
      >
        {text}
      </div>
      <div className={direction === "fromUser" ? "date sent" : "date received"}>
        {direction === "fromUser" && status === "failed"
          ? "failed to send"
          : messageDate}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .bubble {
    max-width: 60%;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;

    &.sent {
      align-self: flex-end;
      background-color: ${styleVariables.accentColorBlue};
      color: #fff;
    }

    &.received {
      align-self: flex-start;
      background-color: ${styleVariables.bgColor1};
    }
  }

  .date {
    font-size: ${styleVariables.smallestTextSize};
    margin-bottom: 20px;

    &.sent {
      align-self: flex-end;
    }

    &.received {
      align-self: flex-start;
    }
  }
`;

export default Message;
