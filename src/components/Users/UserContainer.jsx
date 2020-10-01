import React from "react";
import { connect } from "react-redux";
import {
  followUserToFriends,
  unFollowUserToFriends,
  toggleIsFollowingInProgress,
  getUsersThunkCreator,
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
          unFollowUserToFriends={this.props.unFollowUserToFriends}
          followUserToFriends={this.props.followUserToFriends}
          onPageChanged={this.onPageChanged}
          isFetching={this.isFetching}
          toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
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
  followUserToFriends,
  unFollowUserToFriends,
  toggleIsFollowingInProgress,
  getUsers: getUsersThunkCreator,
})(UsersContainer);
