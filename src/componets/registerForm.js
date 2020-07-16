import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { name: "", username: "", password: "" },
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("Name"),
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
  };
  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = err.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
