import { useEffect, useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { darken } from "polished";
import dayjs from "dayjs";
import { addNextAction, addNote, completeNextAction } from "../../Data/Axios";

const NextAction = () => {
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);
  const [isEditing, setIsEditing] = useState(false);
  const [actionText, setActionText] = useState("");
  const [startDate, setStartDate] = useState(Date.now());
  const [checked] = useState(false);

  useEffect(() => {
    handleFinishEditing();
  }, [selectedContact]);

  const handleFinishEditing = () => {
    setIsEditing(false);
    setActionText("");
  };

  const handleSaveAction = async () => {
    const { _id } = selectedContact;
    const updatedContact = await addNextAction(_id, startDate, actionText);
    setSelectedContact(updatedContact);
    handleFinishEditing();
  };

  const handleCheckbox = async () => {
    const { _id } = selectedContact;
    await completeNextAction(_id);
    const updatedContact = await addNote(
      _id,
      `completed: "${selectedContact.nextAction.text}"`
    );
    setSelectedContact(updatedContact);
    handleFinishEditing();
  };

  if (!selectedContact) return null;

  if (isEditing) {
    return (
      <Wrapper>
        <div className="next-action">
          <h4>Next Action</h4>
          <input
            value={actionText}
            onChange={(e) => setActionText(e.target.value)}
            type="text"
            name="next-action-item"
            placeholder="add next action"
          />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="button-container">
          <button onClick={handleFinishEditing} className="link">
            cancel
          </button>
          <button onClick={handleSaveAction} className="green">
            save
          </button>
        </div>
      </Wrapper>
    );
  }

  if (selectedContact.nextAction) {
    return (
      <Wrapper>
        <div className="next-action">
          <h4>Next Action</h4>
          <input
            // onClick={handleCheckbox}
            onChange={handleCheckbox}
            type="checkbox"
            name="next-action-item"
            checked={checked}
          />
          <label style={{ marginLeft: "10px" }} htmlFor="next-action-item">
            {selectedContact.nextAction.text}
          </label>
          <p className="due-date">
            Due:{" "}
            {dayjs(selectedContact.nextAction.dueDate).format(
              "MM-DD-YYYY h:mm A"
            )}
          </p>
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
  z-index: 990;
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
