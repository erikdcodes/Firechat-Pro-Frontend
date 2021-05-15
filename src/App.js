import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Inbox from "./Pages/Inbox";
import Actions from "./Pages/Actions";

function App() {
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
