import { Switch, Route, Redirect } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import { useRecoilValue } from "recoil";
import { loggedInState } from "./Store/UIState";
import Inbox from "./Pages/Inbox";
import Actions from "./Pages/Actions";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

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
      <Route path="/profile" exact>
        <Profile />
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
  );
};

export default Routes;
