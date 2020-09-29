import React from "react";
import { connect } from "react-redux";
import {
  followUserToFriends,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggleIsFetching,
  unFollowUserToFriends,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users.jsx";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalUserCount(res.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    if (p === this.props.currentPage) {
      return 0;
    }
    this.props.setCurrentPage(p);
    this.props.toggleIsFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items);
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
  };
};

export default connect(mapStateToProps, {
  followUserToFriends,
  unFollowUserToFriends,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  toggleIsFetching,
})(UsersContainer);
