import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";

const NextAction = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  if (selectedContact.nextAction) {
    return (
      <Wrapper>
        <div className="next-action">
          <h4>Next Action</h4>
          <input type="checkbox" name="next-action-item" />
          <label style={{ marginLeft: "10px" }} for="next-action-item">
            Next action item goes here
          </label>
          <p className="due-date">Due: 03/21/2021</p>
        </div>
      </Wrapper>
    );
  } else {
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
`;

export default NextAction;
