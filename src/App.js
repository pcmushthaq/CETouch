import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Profile from "./components/profile";
import Signin from "./containers/SignIn/signin";
import Signup from "./containers/SIgnup/signup";
import PrivateRoute from "./routes/privateRoute";
function App() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Router>
        <Switch>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>

          <Route exact path="/" component={Signin}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route path="" component={() => <div>404 Not found </div>} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
