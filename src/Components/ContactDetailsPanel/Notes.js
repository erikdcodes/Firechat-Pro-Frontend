import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import { styleVariables } from "../../GlobalStyles/StyleVariables";

const Notes = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  return (
    <Wrapper>
      <div className="notes">
        <h4>Notes</h4>
        <input type="text" placeholder="add a note" />
        <div className="notes-wrapper">
          {selectedContact?.notes?.map((note, i) => (
            <div key={i} className="note">
              <p>
                <span className="note-date">{note.date}</span> <br />
                {note.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

.notes {
    padding: 10px 0;
  }

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
  .notes-wrapper {
    margin-top: 5px;
    height: 400px;
    padding-bottom: 100px; /* Scroll past last item*/
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    `;

export default Notes;
