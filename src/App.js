import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./containers/SignUp/signup";
class App extends Component {
    render(){
      return(
        <BrowserRouter>
      <Switch>
        <Route path='/' component={SignUp}/>
      </Switch>
    </BrowserRouter>
      );
    }
}

export default App;
