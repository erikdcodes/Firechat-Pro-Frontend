import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { darken } from "polished";

const SendMessageForm = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  if (!selectedContact) return "";

  return (
    <Wrapper>
      <textarea type="text" className="send-message-input"></textarea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200px;
  width: 100%;

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
