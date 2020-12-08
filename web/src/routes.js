import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Person from "./pages/Person";
import CreatePerson from "./pages/CreatePerson";
import UpdatePerson from "./pages/UpdatePerson";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/person" exact component={Person}></Route>
        <Route path="/person/new" exact component={CreatePerson}></Route>
        <Route path="/person/id/edit" exact component={UpdatePerson}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
