import styled from "styled-components";
import { styleVariables } from "../GlobalStyles/StyleVariables.js";
import { NavLink } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedInState, selectedContactState } from "../Store/UIState";

const NavigationBar = () => {
  const loggedIn = useRecoilValue(loggedInState);
  const setSelectedContactState = useSetRecoilState(selectedContactState);
  const resetSelectedContact = () => {
    setSelectedContactState(null);
  };

  if (!loggedIn)
    return (
      <Wrapper>
        <div className="logo-container">
          <h1 className="logo">🔥 Fire Chat</h1>
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="nav-item">
              <NavLink
                to="/"
                activeClassName="selected"
                onClick={resetSelectedContact}
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                activeClassName="selected"
                onClick={resetSelectedContact}
                exact
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="profile-link-container"></div>
      </Wrapper>
    );
  else
    return (
      <Wrapper>
        <div className="logo-container">
          <h1 className="logo">🔥 Fire Chat</h1>
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="nav-item">
              <NavLink
                to="/inbox"
                activeClassName="selected"
                onClick={resetSelectedContact}
              >
                Inbox
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/actions"
                activeClassName="selected"
                onClick={resetSelectedContact}
              >
                Actions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contacts"
                activeClassName="selected"
                onClick={resetSelectedContact}
              >
                Contacts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/faq"
                activeClassName="selected"
                onClick={resetSelectedContact}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="profile-link-container">
          <NavLink
            to="/profile "
            activeClassName="selected"
            onClick={resetSelectedContact}
          >
            Profile
          </NavLink>
          <span> (909) 541-1134</span>
        </div>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid ${styleVariables.bgColor1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${styleVariables.padding3};

  .logo {
    font-size: 20px;
  }

  .nav-menu {
    & ul {
      margin: 0;
      list-style: none;
      display: flex;
      padding: 0;
    }

    & li {
    }

    & li:not(:last-child) {
      margin-right: ${styleVariables.padding3};
    }

    & a {
      color: ${styleVariables.secondaryTextColor};
      font-weight: 600;

      &:hover,
      &:active,
      &.selected {
        text-decoration: none;
        color: ${styleVariables.accentTextColor};
        border-bottom: 2px solid ${styleVariables.accentTextColor};
      }
    }
  }
`;

export default NavigationBar;
