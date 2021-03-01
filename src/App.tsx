import React, { useState } from "react";
import Home from "./pages/Home";
import { SetPassword } from "./pages/SetPassowrd";
import { InsertPassword } from "./pages/InsertPassowrd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [firstPassword, setFirstPassword] = useState(
    //@ts-ignore
    JSON.parse(localStorage.getItem("firstPassword"))
  );
  const [auth, setAuth] = useState(false);

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
