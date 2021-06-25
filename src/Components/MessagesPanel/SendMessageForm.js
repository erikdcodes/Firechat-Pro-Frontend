import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState, userDataState } from "../../Store/UIState";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { darken } from "polished";
import { sendMessage } from "../../Data/Axios";

const SendMessageForm = () => {
  const inputEl = useRef(null);
  const selectedContact = useRecoilValue(selectedContactState);
  const user = useRecoilValue(userDataState);

  useEffect(() => {
    inputEl.current.value = "";
  }, [selectedContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { contactPhone } = selectedContact;
    const { userAuth0ID, userTwilioPhone } = user;
    const text = inputEl.current.value;
    if (!text) return;
    // send message via api
    sendMessage(userAuth0ID, userTwilioPhone, contactPhone, text);
    // clear input
    inputEl.current.value = "";
  };

  if (!selectedContact) return "";

  return (
    <Wrapper>
      <form className="form" onSubmit={(e) => handleSubmit(e)} action="">
        <textarea
          ref={inputEl}
          type="text"
          className="send-message-input"
        ></textarea>
        <input type="submit" />
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
    height: 75px;
    resize: none;
    outline: none;
    border-color: ${darken(0.1, styleVariables.bgColor1)};
    border-radius: 3px;
    color: ${styleVariables.primaryTextColor};
  }
`;

export default SendMessageForm;
