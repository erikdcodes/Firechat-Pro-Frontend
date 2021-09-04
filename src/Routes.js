import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import { useRecoilValue } from "recoil";
import { loggedInState } from "./Store/UIState";
import Inbox from "./Pages/Inbox";
import Actions from "./Pages/Actions";
import Login from "./Pages/Login";

const ProtectedRoute = ({ redirectPath, children, ...rest }) => {
  const isLoggedIn = useRecoilValue(loggedInState);
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn === true ? children : <Redirect to={redirectPath} />;
      }}
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AppLayout>
            <h1>Home Page</h1>
          </AppLayout>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/inbox" exact>
          <Inbox />
        </Route>
        <Route path="/actions" exact>
          <Actions />
        </Route>
        <ProtectedRoute path="/secret" redirectPath="/login">
          <h1>Protected Route</h1>
        </ProtectedRoute>
        <Route path="*">
          <AppLayout>
            <h1>404 Not Found</h1>
          </AppLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
