import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import ContactInfo from "./ContactInfo";
import Notes from "./Notes";
import ContactArchiveIcons from "./ContactArchiveIcons";

const ContactDetails = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  if (!selectedContact) return "";

  return (
    <Wrapper>
      <ContactArchiveIcons />
      <ContactInfo />
      <Notes />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ContactDetails;
