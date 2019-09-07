import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("E-mail"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Senha"),
    name: Joi.string()
      .required()
      .label("Nome")
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Criar conta</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "E-mail", "email")}
          {this.renderInput("password", "Senha", "password")}
          {this.renderInput("name", "Nome")}
          {this.renderButton("Criar conta")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
