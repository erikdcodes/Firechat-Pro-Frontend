import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilState } from "recoil";
import { selectedContactState } from "../../Store/UIState";
import ReactTooltip from "react-tooltip";
import Input, { formatPhoneNumber } from "react-phone-number-input/input";
import { deleteContact, editContact } from "../../Data/Axios.js";
import { FaPhoneAlt, FaEnvelope, FaStreetView } from "react-icons/fa";

const ContactInfo = () => {
  const [selectedContact, setSelectedContact] =
    useRecoilState(selectedContactState);
  const [isEditing, setIsEditing] = useState(false);
  const [phoneValue, setPhoneValue] = useState(selectedContact?.contactPhone);
  const formRef = useRef(null);

  // resets phone value when new contact selected & closes editing form
  useEffect(() => {
    setPhoneValue(selectedContact?.contactPhone);
    setIsEditing(false);
  }, [selectedContact]);

  const displayName = () => {
    const { firstName, lastName } = selectedContact;

    if (firstName && lastName) return `${firstName} ${lastName}`;
    if (firstName && !lastName) return `${firstName}`;
    if (!firstName && lastName) return `${lastName}`;
    return "";
  };

  const handleEditContact = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, list, backgroundInfo } =
      formRef.current;
    const updated = await editContact(selectedContact._id, {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      list: list.value,
      backgroundInfo: backgroundInfo.value,
    });
    setSelectedContact(updated);
    setIsEditing(false);
  };

  const handleDeleteContact = async () => {
    if (
      window.confirm(`Delete ${displayName() || formatPhoneNumber(phoneValue)}`)
    ) {
      await deleteContact(selectedContact._id);
      setSelectedContact(null);
    }
  };

  // component starts

  if (!selectedContact) return null;

  if (isEditing)
    return (
      <Wrapper>
        <form onSubmit={(e) => handleEditContact(e)} ref={formRef}>
          <div className="header">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              defaultValue={selectedContact.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              defaultValue={selectedContact.lastName}
            />
            <input
              type="text"
              placeholder="Background Info"
              name="backgroundInfo"
              defaultValue={selectedContact.backgroundInfo}
              maxLength="125"
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
                  name="email"
                  defaultValue={selectedContact.email}
                />
              </div>
            </div>

            <div className="form-group">
              <span className=" icon green">L:</span>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="add list"
                  name="list"
                  defaultValue={selectedContact.list}
                />
              </div>
            </div>
          </div>
          <div className="button-container">
            <button
              type="button"
              onClick={handleDeleteContact}
              className="red-link"
            >
              delete
            </button>
            <div className="save-buttons">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="link"
              >
                cancel
              </button>
              <button type="submit" className="green">
                save
              </button>
            </div>
          </div>
        </form>
      </Wrapper>
    );

  return (
    <Wrapper
      data-tip="Double-click to edit"
      onDoubleClick={() => setIsEditing(true)}
    >
      <ReactTooltip effect="solid" />
      <div className="header">
        {displayName() ? (
          <div className="name"> {displayName()} </div>
        ) : (
          <div className="name missing">Add name</div>
        )}

        {selectedContact.backgroundInfo ? (
          selectedContact.backgroundInfo
        ) : (
          <div className="missing">Add background info</div>
        )}
      </div>

      <div className="contact-info">
        <p>
          <span className=" icon pink">
            <FaPhoneAlt size={15} />{" "}
          </span>
          {formatPhoneNumber(selectedContact?.contactPhone)}
        </p>
        <p>
          <span className=" icon orange">
            <FaEnvelope size={15} />{" "}
          </span>{" "}
          {selectedContact?.email}
        </p>
        <p>
          <span className=" icon green">
            <FaStreetView size={15} />{" "}
          </span>{" "}
          {selectedContact?.list}
        </p>
      </div>
    </Wrapper>
  );
};

// styling
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
      vertical-align: text-top;

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
    justify-content: space-between;
    border-bottom: 2px solid ${styleVariables.bgColor1};
  }
`;

export default ContactInfo;
