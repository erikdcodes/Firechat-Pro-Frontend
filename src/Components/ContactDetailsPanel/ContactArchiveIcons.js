import styled from "styled-components";
import { BsArchive, BsAspectRatio } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import ReactTooltip from "react-tooltip";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { editContact } from "../../Data/Axios";

const ContactInfoIcons = () => {
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);

  const handleClick = async () => {
    const updated = await editContact(selectedContact._id, {
      isArchived: !selectedContact.isArchived,
    });
    if (selectedContact.isArchived) {
      setSelectedContact(updated);
    } else {
      setSelectedContact(null);
    }
  };

  return (
    <Wrapper onClick={handleClick}>
      {selectedContact.isArchived ? (
        <div data-tip="Unarchive Contact">
          <ReactTooltip effect="solid" />
          <BsAspectRatio className="icon archived" size={20} />
        </div>
      ) : (
        <div data-tip="Archive Contact">
          <ReactTooltip effect="solid" />
          <BsArchive className="icon" size={20} />
        </div>
      )}
    </Wrapper>
  );
};

//styled
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .icon {
    vertical-align: middle;
    cursor: pointer;
    color: ${styleVariables.accentColorGreen};
  }

  .archived {
    color: ${styleVariables.accentColorBlue};
  }
`;

export default ContactInfoIcons;
