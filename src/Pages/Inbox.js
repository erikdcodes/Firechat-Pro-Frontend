import styled from "styled-components";
import AppLayout from "../Layouts/AppLayout";
import { styleVariables } from "../GlobalStyles/StyleVariables.js";
import ConversationsList from "../Components/ConversationsList";
import Search from "../Components/Search";
import { useRecoilValue } from "recoil";
import { selectedContactState } from "../Store/UIState";
import ContactDetails from "../Components/ContactDetails";

const Inbox = () => {
  const selectedContact = useRecoilValue(selectedContactState);

  return (
    <AppLayout>
      <Wrapper>
        <div className="left">
          <Search />
          <ConversationsList />
        </div>
        <div className="center">
          <div>{selectedContact?.name}</div>
          <div>{selectedContact?.phone}</div>
        </div>
        <div className="right">
          <ContactDetails />
        </div>
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);

  .center,
  .right {
    padding: ${styleVariables.padding1} ${styleVariables.padding3};
  }

  .left {
    width: 300px;
    border-right: 2px solid ${styleVariables.bgColor1};

    & > *:first-child {
      margin: 10px 0;
    }
  }

  .center {
    flex-grow: 1;
  }

  .right {
    width: 450px;
    border-left: 2px solid ${styleVariables.bgColor1};
  }
`;

export default Inbox;
