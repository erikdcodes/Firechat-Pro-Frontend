import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StylesTest from "./Components/StylesTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div>
            <h1>Home</h1>
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
