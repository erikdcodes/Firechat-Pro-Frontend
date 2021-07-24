import { useEffect, useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { darken } from "polished";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { addNextAction, addNote, completeNextAction } from "../../Data/Axios";

dayjs.extend(calendar);

const relativeDue = (dueDate) => {
  const relative = dayjs(dueDate).calendar(null, {
    sameDay: "[Today at] h:mm A", // The same day ( Today at 2:30 AM )
    nextDay: "[Tomorrow at] h:mm A", // The next day ( Tomorrow at 2:30 AM )
    nextWeek: "[This] dddd", // The next week ( Sunday at 2:30 AM )
    lastDay: "[Yesterday]", // The day before ( Yesterday at 2:30 AM )
    lastWeek: "[Last] dddd MM/DD/YYYY", // Last week ( Last Monday at 2:30 AM )
    sameElse: "MM/DD/YYYY [at] h:mm A", // Everything else ( 7/10/2011 )
  });

  return relative;
};

const isDue = (dueDate) => {
  const now = dayjs();
  const dueDateObj = dayjs(dueDate);
  if (dueDateObj.isBefore(now)) return "PASTDUE";
  if (dueDateObj.isSame(now, "day")) return "DUETODAY";
  return;
};

// component start

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
      <ModalWrapper>
        <div className="form-container">
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
            <button onClick={handleSaveAction} className="button blue">
              save
            </button>
          </div>
        </div>
      </ModalWrapper>
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
            <span
              className={
                isDue(selectedContact.nextAction.dueDate) === "PASTDUE"
                  ? "past"
                  : isDue(selectedContact.nextAction.dueDate) === "DUETODAY"
                  ? "today"
                  : ""
              }
            >
              {relativeDue(selectedContact.nextAction.dueDate)}
            </span>
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

// styling

const Wrapper = styled.div`
  z-index: 990;
  position: relative;

  .next-action {
    padding: 10px 0;
    border-bottom: 2px solid ${darken(0.1, styleVariables.bgColor1)};

    .due-date {
      font-size: ${styleVariables.smallerTextSize};
      font-weight: 900;
    }
  }

  .missing {
    color: ${styleVariables.secondaryTextColor};
  }

  .past {
    color: ${styleVariables.accentColorRed};
  }

  .today {
    color: ${styleVariables.accentColorGreen};
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .form-container {
    margin-top: 150px;
    width: 500px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }
`;

export default NextAction;
