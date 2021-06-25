import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import dayjs from "dayjs";

const Message = (props) => {
  const { text, updatedAt, direction, status } = props.message;

  const messageDate = dayjs(updatedAt).format("MM/DD/YYYY h:mm A");

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
