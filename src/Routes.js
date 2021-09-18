import { Switch, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Inbox from "./Pages/Inbox";
import Actions from "./Pages/Actions";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import useCurrentUser from "./Hooks/useCurrentUser";

const Routes = () => {
  const [currentUser, setCurrentUser] = useCurrentUser();

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
      <ProtectedRoute
        currentUser={currentUser}
        path="/secret"
        redirectPath="/login"
      >
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
