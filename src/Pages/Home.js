import AppLayout from "../Layouts/AppLayout";
import styled from "styled-components";
import { styleVariables } from "../GlobalStyles/StyleVariables.js";
import { useHistory } from "react-router-dom";
import useCurrentUser from "../Hooks/useCurrentUser";
import headerBg from "../Images/bg-pattern-header.svg";
import Section from "../Components/PageComponents/Section";

const sections = [
  {
    title: "Send and Receive Real Time SMS Text Messages",
    description:
      "Business text messaging is proven to generate stronger engagement from potential clients.",
    img: "/sms-example.gif",
    orientation: "flipped",
  },
  {
    title: "Supercharge your follow-up work flow",
    description:
      "Only focus on the single most important task at hand for each client. After you've completed that action, set the next one.  No more dead to-do lists filled with expired items",
    img: "/action-view-example.gif",
    orientation: "standard",
  },
];

const Home = () => {
  const [currentUser] = useCurrentUser();
  const history = useHistory();
  return (
    <AppLayout>
      <Wrapper>
        <header>
          <div className="left">
            <h1 className="title">The fortune is in the follow up </h1>
            <p className="sub-title">
              🔥 Firechat Pro allows you to send and receive text messages while
              managing client interactions all in one simple to use platform.
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
          <div className="right">
            <img src="/hero-img-2.jpeg" alt="" />
          </div>
        </header>
        {sections.map((section, i) => {
          return (
            <Section
              key={i + section.title}
              title={section.title}
              description={section.description}
              img={section.img}
              orientation={section.orientation}
            />
          );
        })}

        <footer>
          <div className="footer-container">
            <p>© 2022 Erik De Jesus </p>
            <a href="https://github.com/erikdcodes">@Github</a>
          </div>
        </footer>
      </Wrapper>
    </AppLayout>
  );
};

const Wrapper = styled.div`
  header {
    height: calc(min-content - 80px);
    background: url(${headerBg}) no-repeat fixed left;
    margin-inline: auto;
    width: min(90%, 1440px);
    padding-block: 10px;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    animation: fadeIn 2000ms linear;

    .title {
      font-size: 36px;
      line-height: 1.4;
      color: ${styleVariables.accentColorBlue};
      text-transform: capitalize;
    }

    .sub-title {
      margin-top: 15px;
      font-size: 18px;
      line-height: 1.8;
      color: ${styleVariables.primaryTextColor};
    }

    .left {
      flex-basis: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .right {
      width: 100%;
      height: 100%;
    }

    .right img {
      width: 100%;
      height: 100%;
    }

    button {
      padding: 15px 20px;
      max-width: 400px;
      max-width: 100%;
      font-size: 24px;
    }
  }
  footer {
    background: #4a4a52;
    color: #fff;
    padding-block: 30px;
  }
  .footer-container {
    margin-inline: auto;
    width: min(90%, 1140px);
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  @media (min-width: 1140px) {
    header {
      background: url(${headerBg}) no-repeat fixed right top;
      padding-block: 100px;
      flex-direction: row;
      text-align: left;
      .title {
        font-size: 48px;
      }
      .sub-title {
        font-size: 24px;
      }
    }
  }
`;

export default Home;
