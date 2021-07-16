import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { isAddContactOpenState } from "../Store/UIState";

const AddContactButton = () => {
  const setIsAddContactOpen = useSetRecoilState(isAddContactOpenState);
  return (
    <Wrapper>
      <button onClick={() => setIsAddContactOpen(true)} className="green">
        Add Contact
      </button>
    </Wrapper>
  );
};

export default AddContactButton;

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 75px;

  button {
    padding: 15px 20px;
  }
`;
