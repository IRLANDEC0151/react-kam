import React from "react";
import * as axios from "axios";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-Reducer";
import { connect } from "react-redux";
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          let { userId=res.data.data.id, email, login } = res.data.data;
          this.props.setAuthUserData(userId, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
 return {
    isAuth:state.auth.isAuth,
    login:state.auth.login
  }
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
