import { useEffect } from "react";
import styled from "styled-components";
import { styleVariables } from "../GlobalStyles/StyleVariables.js";
import { NavLink } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { selectedContactState, userDataState } from "../Store/UIState";
import useCurrentUser from "../Hooks/useCurrentUser.js";
import useShowUnreadNotification from "../Hooks/useShowUnreadNotification";
import { getAuth } from "@firebase/auth";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import socket from "../Data/socketConfig.js";

const NavigationBar = () => {
  const auth = getAuth();
  const setSelectedContactState = useSetRecoilState(selectedContactState);
  const resetSelectedContact = () => {
    setSelectedContactState(null);
  };
  const [currentUser, setCurrentUser] = useCurrentUser();
  const [showUnreadNotification, setShowUnreadNotification] =
    useShowUnreadNotification();
  const { userAuth0ID } = useRecoilValue(userDataState);

  const signOut = () => {
    auth.signOut();
    setCurrentUser(null);
  };

  useEffect(() => {
    socket.on("smsReceived", (contact) => {
      if (contact.userAuth0ID === userAuth0ID) {
        // show notification
        setShowUnreadNotification(true);
      }
    });

    return () => {
      socket.removeAllListeners();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <div className="logo-container">
        <a href="/">
          <h1 className="logo">🔥 Firechat Pro</h1>
        </a>
      </div>
      <nav className="nav-menu">
        <ul>
          {currentUser ? (
            <>
              <li className="nav-item">
                {showUnreadNotification ? (
                  <span className="icon orange">
                    <BsFillChatSquareDotsFill />
                  </span>
                ) : (
                  ""
                )}
                <NavLink
                  to="/inbox"
                  activeClassName="selected"
                  onClick={() => {
                    resetSelectedContact();
                    setShowUnreadNotification(false);
                  }}
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
                  to="/login"
                  onClick={signOut}
                  // activeClassName="selected"
                >
                  Log Out
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                <NavLink to="/login" activeClassName="selected" exact>
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="profile-link-container">
        {currentUser ? (
          <>
            <NavLink
              to="/profile"
              activeClassName="selected"
              onClick={resetSelectedContact}
            >
              Profile
            </NavLink>
            <span> (951) 227-7675</span>
          </>
        ) : (
          ""
        )}
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

  .logo-container a,
  .logo-container a:hover {
    text-decoration: none;
  }

  .logo {
    font-size: 20px;
  }

  .nav-menu {
    & ul {
      margin: 0;
      list-style: none;
      display: flex;
      padding: 0;
      position: relative;
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
  .icon {
    position: absolute;
    left: -20px;
    top: 5px;
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
`;

export default NavigationBar;
