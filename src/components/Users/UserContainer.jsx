import React from "react";
import { connect } from "react-redux";
import {
  acceptFollowUserToFriends,
  acceptUnFollowUserToFriends,
  toggleIsFollowingInProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator,
} from "../../redux/usersReducer";
import Users from "./Users.jsx";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (p) => {
    this.props.getUsers(p, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          isFetching={this.isFetching}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  acceptFollowUserToFriends,
  acceptUnFollowUserToFriends,
  toggleIsFollowingInProgress,
  getUsers: getUsersThunkCreator,
  follow: followThunkCreator,
  unFollow: unFollowThunkCreator,
})(UsersContainer);
