import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveProfile
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId)
      this.refreshProfile();
  }
  render() {
    return (
      <Profile
        {...this.props}
        profileInfo={this.props.profileInfo}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, updateUserStatus, getUserStatus,savePhoto,saveProfile }),
  withRouter
)(ProfileContainer);
