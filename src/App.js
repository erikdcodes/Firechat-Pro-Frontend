import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Inbox from "./Pages/Inbox";
import Actions from "./Pages/Actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useSetRecoilState } from "recoil";
import { loggedInUserState } from "./Store/UIState";

function App() {
  const { user, isAuthenticated } = useAuth0();
  const setIsLoggedIn = useSetRecoilState(loggedInUserState);

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(user);
    }
  }, [user]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AppLayout>
            <h1>Home Page</h1>
          </AppLayout>
        </Route>
        <Route path="/login" exact>
          <AppLayout>
            <h1>Login</h1>
          </AppLayout>
        </Route>
        <Route path="/inbox" exact>
          <Inbox />
        </Route>
        <Route path="/actions" exact>
          <Actions />
        </Route>
        <Route path="*">
          <AppLayout>
            <h1>404 Not Found</h1>
          </AppLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
