import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState, userDataState } from "../../Store/UIState";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { darken } from "polished";
import { sendMessage } from "../../Data/Axios";

const SendMessageForm = () => {
  const [messageValue, setMessageValue] = useState("");
  const selectedContact = useRecoilValue(selectedContactState);
  const user = useRecoilValue(userDataState);

  useEffect(() => {
    setMessageValue("");
  }, [selectedContact]);

  const handleChange = (e) => {
    setMessageValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { contactPhone } = selectedContact;
    const { userAuth0ID, userTwilioPhone } = user;
    const text = messageValue;

    if (!text) return;

    // send message via api
    sendMessage(userAuth0ID, userTwilioPhone, contactPhone, text);

    // clear input
    setMessageValue("");
  };

  if (!selectedContact) return "";

  return (
    <Wrapper>
      <form className="form" onSubmit={(e) => handleSubmit(e)} action="">
        <textarea
          onChange={(e) => handleChange(e)}
          value={messageValue}
          type="text"
          className="send-message-input"
        ></textarea>
        <input className="send-message-submit" type="submit" />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  .form {
    display: flex;
  }
  .send-message-input {
    padding: 10px;
    width: 100%;
    flex-basis: 90%;
    flex-shrink: 1;
    height: 75px;
    resize: none;
    outline: none;
    border-color: ${darken(0.1, styleVariables.bgColor1)};
    border-radius: 3px;
    color: ${styleVariables.primaryTextColor};
  }

  .send-message-submit {
    margin-left: 5px;
    padding: 10px;
    height: 75px;
    flex-basis: 10%;
    border-radius: 5px;
  }
`;

export default SendMessageForm;
