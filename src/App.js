import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultAppLayout from "./Layouts/AppLayout";
import Inbox from "./Pages/Inbox";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <DefaultAppLayout>
            <h1>Home Page</h1>
          </DefaultAppLayout>
        </Route>
        <Route path="/login" exact>
          <DefaultAppLayout>
            <h1>Login</h1>
          </DefaultAppLayout>
        </Route>
        <Route path="/inbox" exact>
          <Inbox />
        </Route>
        <Route path="*">
          <DefaultAppLayout>
            <h1>404 Not Found</h1>
          </DefaultAppLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
