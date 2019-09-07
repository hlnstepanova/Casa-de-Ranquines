import React from "react";
import Joi from "joi-browser";
import Form from "./form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("E-mail"),
    password: Joi.string()
      .required()
      .label("Senha")
  };

  doSubmit = () => {
    //Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Fazer login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "E-mail", "email")}
          {this.renderInput("password", "Senha", "password")}
          {this.renderButton("Fazer login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
