import { useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { darken } from "polished";

const NextAction = () => {
  const selectedContact = useRecoilValue(selectedContactState);
  const [isEditing, setIsEditing] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  if (!selectedContact) return "";

  if (isEditing) {
    return (
      <Wrapper>
        <div className="next-action">
          <h4>Next Action</h4>
          <input
            type="text"
            name="next-action-item"
            placeholder="add next action"
          />
          {/* <input
            type="text"
            name="next-action-due-date"
            placeholder="add due date"
          /> */}
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="button-container">
          <button onClick={() => setIsEditing(false)} className="link">
            cancel
          </button>
          <button className="green">save</button>
        </div>
      </Wrapper>
    );
  }

  if (selectedContact.nextAction) {
    return (
      <Wrapper>
        <div className="next-action">
          <h4>Next Action</h4>
          <input type="checkbox" name="next-action-item" />
          <label style={{ marginLeft: "10px" }} htmlFor="next-action-item">
            Next action item goes here
          </label>
          <p className="due-date">Due: {startDate.toLocaleString()}</p>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="next-action">
          <h4>Next Action</h4>
          <button onClick={() => setIsEditing(true)} className="link">
            Click to Add Next Action
          </button>
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  z-index: 999;
  position: relative;

  .next-action {
    padding: 10px 0;
    border-bottom: 2px solid ${darken(0.1, styleVariables.bgColor1)};

    .due-date {
      font-size: ${styleVariables.smallerTextSize};
      color: ${styleVariables.accentColorBlue};
    }
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid ${styleVariables.bgColor1};
  }

  .missing {
    color: ${styleVariables.secondaryTextColor};
  }
`;

export default NextAction;
