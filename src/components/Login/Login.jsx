import React from "react";
import { Field, reduxForm } from "redux-form";
import { postAuthUserData } from "../../redux/authReducer";

const Login = (props) => {
  const onSubmit = (data) => {
    postAuthUserData(data)
    console.log(data);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder="login" name="login" component="input" />
        </div>
        <div>
          <Field placeholder="password" name="password" component="input" />
        </div>
        <div>
          <Field type="checkbox" name="rememberMe" component="input" />
          remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
export default Login;
