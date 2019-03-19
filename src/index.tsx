import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './component/list';

function App() {
    return (
      <Router>
          <Route path="/" component={Home} />
      </Router>
    );
}
  
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);