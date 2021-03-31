import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../Store/UIState";
import { styleVariables } from "../GlobalStyles/StyleVariables";

const ContactDetails = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  if (!selectedContact) return "";

  return (
    <Wrapper>
      <div className="header">
        {selectedContact.name ? (
          <div className="name"> {selectedContact.name} </div>
        ) : (
          <input type="text" placeholder="add a name" />
        )}

        {selectedContact.background ? (
          selectedContact.background
        ) : (
          <input type="text" placeholder="background info" />
        )}
      </div>

      <div className="contact-info">
        <p>
          <span className=" icon orange">E:</span>: {selectedContact?.email}{" "}
        </p>
        <p>
          <span className=" icon pink">P:</span>: {selectedContact?.phone}{" "}
        </p>
        <p>
          <span className=" icon green">A:</span>: {selectedContact?.address}{" "}
        </p>
      </div>

      <div className="next-action">
        <h4>Next Action</h4>
        <input type="checkbox" name="next-action-item" />
        <label style={{ marginLeft: "10px" }} for="next-action-item">
          Next action item goes here
        </label>
        <p className="due-date">Due: 03/21/2021</p>
      </div>

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
  .header {
    height: 100px;
    border-bottom: 2px solid ${styleVariables.bgColor1};

    .name {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .contact-info {
    border-bottom: 2px solid ${styleVariables.bgColor1};
    padding: 10px 0;

    p {
      margin: 5px;
    }
  }

  .icon {
    font-weight: 600;
  }

  .orange {
    color: ${styleVariables.accentColorOrange};
  }
  .pink {
    color: ${styleVariables.accentColorPink};
  }
  .green {
    color: ${styleVariables.accentColorGreen};
  }

  .next-action {
    border-bottom: 2px solid ${styleVariables.bgColor1};

    .due-date {
      font-size: ${styleVariables.smallerTextSize};
      color: ${styleVariables.accentColorBlue};
    }
  }

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
