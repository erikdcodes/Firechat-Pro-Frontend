import { useEffect, useState } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import ReactTooltip from "react-tooltip";
import Input, { formatPhoneNumber } from "react-phone-number-input/input";

const ContactInfo = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  const [isEditing, setIsEditing] = useState(false);
  const [phoneValue, setPhoneValue] = useState(selectedContact?.contactPhone);

  // resets phone value when new contact selected & closes editing form
  useEffect(() => {
    setPhoneValue(selectedContact?.contactPhone);
    setIsEditing(false);
  }, [selectedContact]);

  if (!selectedContact) return null;

  if (isEditing)
    return (
      <Wrapper>
        <div className="header">
          <input
            type="text"
            placeholder="add Name"
            defaultValue={selectedContact.name}
          />
          <input
            type="text"
            placeholder="add background info"
            defaultValue={selectedContact.background}
          />
        </div>

        <div className="contact-info">
          <div className="form-group">
            <span className=" icon pink">P:</span>
            <div className="input-wrapper">
              <Input
                defaultCountry="US"
                placeholder="Enter phone number"
                value={phoneValue}
                onChange={setPhoneValue}
              />
            </div>
          </div>

          <div className="form-group">
            <span className=" icon orange">E:</span>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="add email"
                defaultValue={selectedContact.email}
              />
            </div>
          </div>

          <div className="form-group">
            <span className=" icon green">A:</span>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="add address"
                defaultValue={selectedContact.address}
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => setIsEditing(false)} className="link">
            cancel
          </button>
          <button className="green">save</button>
        </div>
      </Wrapper>
    );

  return (
    <Wrapper
      data-tip="Double-click to edit"
      onDoubleClick={() => setIsEditing(true)}
    >
      <ReactTooltip delayShow={500} effect="solid" />
      <div className="header">
        {selectedContact.name ? (
          <div className="name"> {selectedContact.name} </div>
        ) : (
          <div className="name missing">Add name</div>
        )}

        {selectedContact.background ? (
          selectedContact.background
        ) : (
          <div className="missing">Add background info</div>
        )}
      </div>

      <div className="contact-info">
        <p>
          <span className=" icon pink">P: </span>
          {formatPhoneNumber(selectedContact?.contactPhone)}
        </p>
        <p>
          <span className=" icon orange">E:</span> {selectedContact?.email}
        </p>
        <p>
          <span className=" icon green">A:</span> {selectedContact?.address}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  user-select: none;

  .header {
    border-bottom: 2px solid ${styleVariables.bgColor1};
    padding: 10px 0;

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

    .form-group {
      display: flex;
      align-items: center;
    }

    .input-wrapper {
      margin-left: 10px;
      width: 100%;
    }

    .icon {
      font-weight: 600;

      &.orange {
        color: ${styleVariables.accentColorOrange};
      }
      &.pink {
        color: ${styleVariables.accentColorPink};
      }
      &.green {
        color: ${styleVariables.accentColorGreen};
      }
    }
  }

  .missing {
    color: ${styleVariables.secondaryTextColor};
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    border-bottom: 2px solid ${styleVariables.bgColor1};
  }
`;

export default ContactInfo;
