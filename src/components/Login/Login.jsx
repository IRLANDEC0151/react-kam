import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/authReducer";
import { requiredField } from "../../utils/validators/validators";
import { Input, createField } from "../common/FormsControls/FormsControls";
import s from "../common/FormsControls/FormsControls.module.css";

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

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
          {createField("email", "email", "email", Input, [requiredField])}
          {createField("password", "password", "password", Input, [
            requiredField,
          ])}
          {createField("checkbox", "", "rememberMe", Input,[],'  remember me')}
        {error && <div className={s.formError}>{error}</div>}

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
