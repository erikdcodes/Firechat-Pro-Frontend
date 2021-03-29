import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StylesTest from "./Components/StylesTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>Home Page</h1>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/inbox">Inbox</Link>
              </li>
            </ul>
          </div>
        </Route>
        <Route path="/login" exact>
          <div>
            <h1>Login Page</h1>
            <Link to="/login">Login</Link>
            <Link to="/inbox">Inbox</Link>
          </div>
        </Route>
        <Route path="/inbox" exact>
          <div>
            <h1>Inbox Page</h1>
            <Link to="/login">Login</Link>
            <Link to="/inbox">Inbox</Link>
          </div>
        </Route>
        <Route path="/styles" exact>
          <StylesTest />
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
