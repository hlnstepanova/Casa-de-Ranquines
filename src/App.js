import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CollaboratorForm from "./components/collaboratorForm";
import RegisterForm from "./components/registerForm";
import Collaborators from "./components/collaborators";
import Anniversaries from "./components/anniversaries";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute
              path="/collaborators/:id"
              component={CollaboratorForm}
            />
            <Route
              path="/collaborators"
              render={props => (
                <Collaborators {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/anniversaries"
              render={props => (
                <Anniversaries {...props} user={this.state.user} />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/collaborators" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
