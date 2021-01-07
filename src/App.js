import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/dashboard";
import Feed from "./components/feed";
import Pages from "./components/pages";
import Profile from "./components/profile";
import ResponsiveDrawer from "./components/responsive_drawer";
import Signin from "./containers/SignIn/signin";
import Signup from "./containers/SIgnup/signup";
import PrivateRoute from "./routes/privateRoute";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Appbar from "./components/appbar";

function App() {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <Grid
        container
        justify="center"
        alignContent="space-around"
        display="flex"
        style={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }
  if (isLoaded(auth) && isEmpty(auth)) {
    return (
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Appbar />
        <Switch>
          <Route exact path="/" component={Signin}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route path="" component={Signin} />
        </Switch>
      </div>
    );
  }
  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        padding: isLoaded(auth) && !isEmpty(auth) ? "10px" : "0px",
        paddingTop: isLoaded(auth) && !isEmpty(auth) ? "70px" : "0px",
      }}
    >
      <ResponsiveDrawer />
      <Switch>
        <PrivateRoute path="/home">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <PrivateRoute path="/feed">
          <Feed />
        </PrivateRoute>
        <PrivateRoute path="/pages">
          <Pages />
        </PrivateRoute>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="" component={() => <div>404 Not found </div>} />
      </Switch>
    </div>
  );
}
export default App;
