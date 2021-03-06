import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { selectedContactState, userDataState } from "../../Store/UIState";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { darken } from "polished";
import { sendMessage } from "../../Data/Axios";

const SendMessageForm = () => {
  const [messageValue, setMessageValue] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);
  const user = useRecoilValue(userDataState);

  useEffect(() => {
    setMessageValue("");
  }, [selectedContact]);

  const handleChange = (e) => {
    setMessageValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { contactPhone } = selectedContact;
    const { userAuth0ID, userTwilioPhone } = user;
    const text = messageValue;
    if (!text) return;

    setIsSending(true);
    // clear input
    setMessageValue("");
    // send message via api
    const updatedContact = await sendMessage(
      userAuth0ID,
      userTwilioPhone,
      contactPhone,
      text
    );

    setIsSending(false);

    // get contact data and set as selected contact to refresh data
    setSelectedContact(updatedContact);
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
        <button className={isSending ? "test" : "blue test"}>
          {isSending ? "Sending.." : "Send"}
        </button>
      </form>
    </Wrapper>
  );
};

// styles
const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  .form {
    display: flex;
  }
  .send-message-input {
    padding: 10px;
    width: 100%;
    flex-basis: 100%;
    flex-shrink: 1;
    height: 75px;
    resize: none;
    outline: none;
    border-color: ${darken(0.1, styleVariables.bgColor1)};
    border-radius: 3px;
    color: ${styleVariables.primaryTextColor};
  }

  .test {
    min-width: 100px;
  }
`;

export default SendMessageForm;
