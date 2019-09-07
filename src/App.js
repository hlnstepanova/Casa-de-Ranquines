import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import CollaboratorForm from "./components/collaboratorForm";
import LoginForm from "./components/common/loginForm";
import NotFound from "./components/notfound";
import RegisterForm from "./components/registerForm";
import Collaborators from "./components/collaborators";
import NavBar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/collaborators/:id" component={CollaboratorForm}></Route>
          <Route path="/collaborators/new" component={CollaboratorForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/collaborators" component={Collaborators}></Route>
          {/* <Route path="/anniversaries" component={Anniversaries}></Route> */}
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Redirect from="/" to="/collaborators" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
