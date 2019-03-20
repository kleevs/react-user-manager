import { startup } from '../app/main';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './component/list';
import { RouterService } from './service/router.service';

var appService = startup(new RouterService());

function Get(component) {
    return () => {
        appService.onRouting();
        return component(appService);
    }
}

function App() {
    return (
      <Router>
          <Route path="/" component={Get(Home)} />
      </Router>
    );
}
  
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);