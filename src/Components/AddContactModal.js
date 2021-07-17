import { useState, useRef } from "react";
import styled from "styled-components";
import Input from "react-phone-number-input/input";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isAddContactOpenState,
  selectedContactState,
  userDataState,
} from "../Store/UIState";
import { styleVariables } from "../GlobalStyles/StyleVariables";
import { createContact } from "../Data/Axios";
import Loader from "react-loader-spinner";

const AddContactModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(isAddContactOpenState);
  const [phoneValue, setPhoneValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  const { userAuth0ID, userTwilioPhone } = useRecoilValue(userDataState);
  const setSelectedContact = useSetRecoilState(selectedContactState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newContact = await createContact(
      userAuth0ID,
      userTwilioPhone,
      phoneValue
    );
    setIsOpen(false);
    setIsLoading(false);
    setSelectedContact(newContact);
    setPhoneValue("");
  };

  const outsideClick = (e) => {
    if (e.target === modalRef.current) {
      setPhoneValue("");
      setIsOpen(false);
    }
  };

  if (!isOpen) return "";
  if (isOpen && isLoading)
    return (
      <Wrapper>
        <div className="form-container">
          <Loader type="Bars" color="#00BFFF" height={50} width={50} />
        </div>
      </Wrapper>
    );

  return (
    <Wrapper onClick={(e) => outsideClick(e)} ref={modalRef}>
      <div className="form-container">
        <h2>Add a contact</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            defaultCountry="US"
            placeholder="Enter phone number"
            value={phoneValue}
            onChange={setPhoneValue}
          />
          <div className="button-container">
            <button onClick={() => setIsOpen(false)} className="cancel">
              cancel
            </button>
            <button className="button blue" type="submit" value="Add Contact">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddContactModal;

const Wrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .form-container {
    margin-top: 150px;
    width: 500px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  button {
    align-self: flex-end;
  }

  .cancel {
    background-color: transparent;
    border: none;
    &:hover {
      color: ${styleVariables.accentColorBlue};
    }
  }
`;
