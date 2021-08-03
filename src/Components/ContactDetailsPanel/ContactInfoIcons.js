import styled from "styled-components";
import { BsArchive, BsAspectRatio } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import ReactTooltip from "react-tooltip";
import { styleVariables } from "../../GlobalStyles/StyleVariables";

const ContactInfoIcons = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  return (
    <Wrapper>
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
