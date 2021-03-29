import styled from "styled-components";
import AppLayout from "../Layouts/AppLayout";
import { styleVariables } from "../GlobalStyles/StyleVariables.js";

const Inbox = () => {
  return (
    <AppLayout>
      <Wrapper>
        <div className="left">Left</div>
        <div className="center">Center</div>
        <div className="right">Right</div>
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);

  .left,
  .center,
  .right {
    padding: ${styleVariables.padding1} ${styleVariables.padding3};
  }

  .left {
    width: 300px;
    border-right: 2px solid ${styleVariables.bgColor1};
  }

  .center {
    flex-grow: 1;
  }

  .right {
    width: 300px;
    border-left: 2px solid ${styleVariables.bgColor1};
  }
`;

export default Inbox;
