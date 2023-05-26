import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../shared/helpers";
import "./Login.css";

function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const [success, setSuccess] = useState(true);

  const navigate = useNavigate();

  function handleCancel(e) {
    setLogin("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const authenticationData = {
      login: login,
      password: password,
    };

    getLogin(authenticationData).then((sucess) => {
      if (sucess) {
        navigate("/coffees");
      } else {
        setSuccess(false);
      }
    });
  }

  // return a component for a login form
  return (
    <div className="div">
      <h2>
        <FormattedMessage id="session" />
      </h2>
      <div className="loginContainer">
        <Form>
          <Form.Group className="dataInput">
            <Form.Label htmlFor="login">
              <FormattedMessage id="user" />
            </Form.Label>
            <input
              type="text"
              className="form-control"
              id="login"
              aria-describedby="loginHelp"
              placeholder="Enter login"
              onChange={(data) => setLogin(data.target.value)}
            />
          </Form.Group>
          <Form.Group className="dataInput">
            <Form.Label htmlFor="password">
              <FormattedMessage id="pass" />
            </Form.Label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(data) => setPassword(data.target.value)}
            />
          </Form.Group>
          <div className="buttons">
            <Button className="enter" type="submit" onClick={handleSubmit}>
              Ingresar
            </Button>
            <Button className="cancel" type="cancel" onClick={handleCancel}>
              Cancelar
            </Button>
          </div>
        </Form>
        {!success && <FormattedMessage id="login-error" />}
      </div>
    </div>
  );
}

export default Login;
