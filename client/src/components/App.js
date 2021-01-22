import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/admin/StreamEdit";
import StreamDelete from "./streams/admin/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamConfirmation from "./streams/StreamConfirmation";
import Header from "./Header";
import history from "../history";
function App() {
  return (
      <Router history={history}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route
              path="/streams/confirm/:id"
              exact
              component={StreamConfirmation}
            />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </React.Fragment>
      </Router>
  );
}

export default App;
