import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { darken } from "polished";
import dayjs from "dayjs";

const noteDate = (date) => {
  return dayjs(date).format("MM/DD/YYYY h:mm A");
};

//component

const Notes = () => {
  const selectedContact = useRecoilValue(selectedContactState);
  console.log("notes selected contact", selectedContact);

  return (
    <Wrapper>
      <div className="notes">
        <h4>Notes</h4>
        <input type="text" placeholder="add a note" />
        <div className="notes-wrapper hide-scrollbar">
          {selectedContact?.notes?.map((note, i) => (
            <div key={i} className="note">
              <p>
                <span className="note-date">{noteDate(note.createdAt)}</span>{" "}
                <br />
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

//styling

const Wrapper = styled.div`

.notes {
    padding: 10px 0;
  }

    .note {
      border-left: 2px dashed ${darken(0.05, styleVariables.bgColor1)};
      padding: 5px 0;
      padding-left: 30px;
      margin: 15px 0;
      
    }
    .note-date {
      font-size: ${styleVariables.smallerTextSize};
      color: ${styleVariables.secondaryTextColor};
      font-style: italic;
    }
  }
  .notes-wrapper {
    margin-top: 5px;
    height: 400px;
    padding-bottom: 100px; /* Scroll past last item*/
    overflow-y: scroll;

    `;

export default Notes;
