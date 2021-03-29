import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultAppLayout from "./Layouts/AppLayout";

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
          <DefaultAppLayout>
            <h1>Inbox</h1>
          </DefaultAppLayout>
        </Route>
        <Route path="*">
          <div>
            <h1>404 Not Found</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
