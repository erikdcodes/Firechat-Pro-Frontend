import AppLayout from "../Layouts/AppLayout";
import styled from "styled-components";
import { styleVariables } from "../GlobalStyles/StyleVariables.js";
import { useHistory } from "react-router-dom";
import useCurrentUser from "../Hooks/useCurrentUser";
import headerBg from "../Images/bg-pattern-header.svg";

const Home = () => {
  const [currentUser] = useCurrentUser();
  const history = useHistory();
  return (
    <AppLayout>
      <Wrapper>
        <header>
          <div className="left">
            <h1 className="title">
              A Texting Centered CRM That Does Other Things Good Too
            </h1>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              quia maiores cumque ratione. Placeat inventore id, nostrum
              officiis nihil aspernatur, suscipit nulla eum asperiores
              reiciendis impedit voluptates, cumque laborum quo.
            </p>
            {currentUser ? (
              <button onClick={() => history.push("/inbox")} className="blue">
                Go To Inbox
              </button>
            ) : (
              <button onClick={() => history.push("/login")} className="blue">
                Login
              </button>
            )}
          </div>
          <div className="right"></div>
        </header>
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div`
  header {
    height: calc(100vh - 80px);
    background: url(${headerBg}) no-repeat fixed right top;
    padding: 30px;
    display: flex;

    .title {
      font-size: 48px;
      line-height: 1.4;
      color: ${styleVariables.accentColorBlue};
    }

    .sub-title {
      margin-top: 15px;
      font-size: 18px;
      line-height: 1.8;
      color: ${styleVariables.primaryTextColor};
    }

    .left {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    button {
      padding: 15px 20px;
      max-width: 400px;
    }
  }
`;

export default Home;
