import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Inbox from "./Pages/Inbox";
import Actions from "./Pages/Actions";
import Login from "./Pages/Login";
import { fbAuth } from "./Firebase/Firebase";

const authListener = () => {
  fbAuth.onAuthStateChanged((user) => {
    if (user) {
      console.log(
        "logged in",
        user.email,
        "USER ID:",
        user.uid,
        "user object:",
        user
      );
    } else {
      console.log("not logged in");
    }
  });
};

const App = () => {
  useEffect(() => {
    authListener();
  }, []);

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
        <Route path="*">
          <AppLayout>
            <h1>404 Not Found</h1>
          </AppLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
