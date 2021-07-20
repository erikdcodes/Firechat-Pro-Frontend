import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllNextActions } from "../../Data/Axios";
import { styleVariables } from "../../GlobalStyles/StyleVariables";
import { useRecoilValue } from "recoil";
import { selectedContactState, userDataState } from "../../Store/UIState";
import ActionItem from "./ActionItem.js";
import ConversationItem from "../ConversationListPanel/ConversationItem";

// component starts
const ActionsList = () => {
  const { userAuth0ID } = useRecoilValue(userDataState);
  const [contacts, setContacts] = useState([]);
  const selectedContact = useRecoilValue(selectedContactState);

  const getData = async () => {
    const contactsData = await getAllNextActions(userAuth0ID);
    setContacts(contactsData);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedContact]);

  return (
    <Wrapper>
      <div className="header">
        <h4>Upcoming Actions</h4>
      </div>
      <div className="list-wrapper">
        {contacts.map((item, i) => (
          <ActionItem contact={item} key={i + item._id} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  .header {
    padding: 10px 30px;
    /* display: flex; */
    /* justify-content: space-between; */
    border-bottom: 2px solid ${styleVariables.bgColor1};
  }
`;

export default ActionsList;
