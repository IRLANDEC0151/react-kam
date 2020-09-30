import React from "react";
import { connect } from "react-redux";
import {
  followUserToFriends,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggleIsFetching,
  unFollowUserToFriends,
  toggleIsFollowingInProgress,
} from "../../redux/usersReducer";
import Users from "./Users.jsx";
import Preloader from "../common/preloader/preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);

    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUserCount(data.totalCount);
      });
  }

  onPageChanged = (p) => {
    if (p === this.props.currentPage) {
      return 0;
    }
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);

    userAPI.getUsers(p, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  toggleIsFetching,
  toggleIsFollowingInProgress,
})(UsersContainer);
