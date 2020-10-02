import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  a = 32;
  render() {
    return <Profile {...this.props} profileInfo={this.props.profileInfo} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo,
  };
};



export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
)(ProfileContainer);