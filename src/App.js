import { useEffect } from "react";
import { loggedInState } from "./Store/UIState";
import { useSetRecoilState } from "recoil";
import { useAuth0 } from "@auth0/auth0-react";
import Routes from "./Routes";

const App = () => {
  const setLoggedIn = useSetRecoilState(loggedInState);
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    setLoggedIn(isAuthenticated);
  }, [setLoggedIn, isAuthenticated]);

  return <Routes />;
};

export default App;
