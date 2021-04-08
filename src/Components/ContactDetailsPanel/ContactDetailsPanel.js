import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import ContactInfo from "./ContactInfo";
import NextAction from "./NextAction";
import Notes from "./Notes";

const ContactDetails = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  if (!selectedContact) return "";

  return (
    <Wrapper>
      <ContactInfo />
      {/* <NextAction /> */}
      <Notes />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ContactDetails;
