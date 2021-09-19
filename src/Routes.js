import { Switch, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Inbox from "./Pages/Inbox";
import Actions from "./Pages/Actions";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import useCurrentUser from "./Hooks/useCurrentUser";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

const Routes = () => {
  const [currentUser] = useCurrentUser();

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/register" exact>
        <Register />
      </Route>
      <ProtectedRoute currentUser={currentUser} path="/inbox" exact>
        <Inbox />
      </ProtectedRoute>
      <ProtectedRoute currentUser={currentUser} path="/actions" exact>
        <Actions />
      </ProtectedRoute>
      <ProtectedRoute currentUser={currentUser} path="/profile" exact>
        <Profile />
      </ProtectedRoute>
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
