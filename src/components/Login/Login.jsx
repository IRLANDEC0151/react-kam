import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/authReducer";
import { requiredField } from "../../utils/validators/validators";
import { Input, TextArea } from "../common/FormsControls/FormsControls";

const Login = (props) => {
  const onSubmit = (data) => {
    props.login(data);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
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
          <Field
            placeholder="email"
            type="email"
            name="email"
            component={Input}
            validate={[requiredField]}
          />
        </div>
        <div>
          <Field
            placeholder="password"
            type="password"
            name="password"
            component={Input}
            validate={[requiredField]}
          />
        </div>
        <div>
          <Field type="checkbox" name="rememberMe" component={Input} />
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

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
