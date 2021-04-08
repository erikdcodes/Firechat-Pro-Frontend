import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";

const Message = (props) => {
  const { message, date, direction } = props.message;

  return (
    <Wrapper>
      <div className={direction === "sent" ? "bubble sent" : "bubble received"}>
        {message}
      </div>
      <div className={direction === "sent" ? "date sent" : "date received"}>
        {date}
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
