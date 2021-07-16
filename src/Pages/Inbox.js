import styled from "styled-components";
import AppLayout from "../Layouts/AppLayout";
import { styleVariables } from "../GlobalStyles/StyleVariables.js";
import ConversationsList from "../Components/ConversationListPanel/ConversationsList";
import SearchContacts from "../Components/SearchContacts";
import ContactDetailsPanel from "../Components/ContactDetailsPanel/ContactDetailsPanel";
import MessagesPanel from "../Components/MessagesPanel/MessagesPanel";
import AddContactModal from "../Components/AddContactModal";

const Inbox = () => {
  return (
    <>
      <AddContactModal />
      <AppLayout>
        <Wrapper>
          <div className="left">
            <SearchContacts />
            <ConversationsList />
          </div>
          <div className="center">
            <MessagesPanel />
          </div>
          <div className="right">
            <ContactDetailsPanel />
          </div>
        </Wrapper>
      </AppLayout>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  overflow: hidden;
  .center,
  .right {
    padding: ${styleVariables.padding1} ${styleVariables.padding3};
  }

  .left {
    flex-shrink: 0;
    width: 300px;
    border-right: 2px solid ${styleVariables.bgColor1};

    & > *:first-child {
      margin: 10px 0;
    }
  }

  .center {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .right {
    flex-shrink: 0;

    width: 450px;
    border-left: 2px solid ${styleVariables.bgColor1};
  }
`;

export default Inbox;
