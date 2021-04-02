import { useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";

const NextAction = () => {
  const selectedContact = useRecoilValue(selectedContactState);
  const [isEditing, setIsEditing] = useState(false);

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
          <input
            type="text"
            name="next-action-due-date"
            placeholder="add due date"
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
          <p className="due-date">Due: 03/21/2021</p>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="next-action hoverable">
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
  .next-action {
    border-bottom: 2px solid ${styleVariables.bgColor1};

    .due-date {
      font-size: ${styleVariables.smallerTextSize};
      color: ${styleVariables.accentColorBlue};
    }
  }

  .hoverable {
    cursor: pointer;
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
