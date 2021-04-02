import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import ContactInfo from "./ContactInfo";
import NextAction from "./NextAction";

const ContactDetails = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  if (!selectedContact) return "";

  return (
    <Wrapper>
      <ContactInfo />
      <NextAction />

      <div className="notes">
        <h4>Notes</h4>
        <input type="text" placeholder="add a note" />
        {selectedContact?.notes?.map((note) => (
          <div className="note">
            <p>
              <span className="note-date">{note.date}</span> <br />
              {note.title}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .notes {
    height: 400px;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    padding-bottom: 100px; /* Scroll past last item*/

    .note {
      border-left: 2px dashed ${styleVariables.bgColor1};
      padding-left: 30px;
    }
    .note-date {
      font-size: ${styleVariables.smallerTextSize};
      color: ${styleVariables.secondaryTextColor};
      font-style: italic;
    }
  }
`;

export default ContactDetails;
