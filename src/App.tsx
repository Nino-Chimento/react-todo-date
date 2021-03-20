import React, { useState } from "react";
import Home from "./pages/Home";
import { Landing } from "./pages/Landing";
import { SetPassword } from "./pages/SetPassowrd";
import { InsertPassword } from "./pages/InsertPassowrd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [firstPassword, setFirstPassword] = useState(
    //@ts-ignore
    JSON.parse(localStorage.getItem("firstPassword"))
  );
  //@ts-ignore
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));

  if (!firstPassword) {
    return <SetPassword setFirstPassword={setFirstPassword} />;
  }
  if (!auth) {
    return <InsertPassword setAuth={setAuth} />;
  }

  return (
    <>
      {" "}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/landing">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
