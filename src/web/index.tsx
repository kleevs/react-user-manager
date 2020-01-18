import 'jquery';
import 'bootstrap';
import './tools/ui';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, useParams } from "react-router-dom";
import AjaxService from '../app/api/ajax.service';
import List from './component/list';
import Detail from './component/detail';
import { ListPage } from '../app/page/list';
import { DetailPage } from '../app/page/detail';
import { ToolService } from './service/tool.service';


function App() {
    return (
      <Router>
          <Route exact path="/" render={() => <List page={new ListPage(new AjaxService())} tool={new ToolService()}/>} />
          <Route exact path="/users" render={(props) => <Detail page={new DetailPage(new AjaxService(), undefined)} tool={new ToolService()} />}/>
          <Route path="/users/:id" render={(props) => <Detail page={new DetailPage(new AjaxService(), props.match.params.id)} tool={new ToolService()} />}/>
      </Router>
    );
}
  
ReactDOM.render(
    <App/>,
    document.getElementById("app")
);