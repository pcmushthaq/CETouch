import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/profile";
import Signup from "./containers/SignUp/signup";
import PrivateRoute from "./routes/privateRoute";
function App() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Switch>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route path="/">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
