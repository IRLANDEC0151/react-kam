import React from "react";

import { connect } from "react-redux";
import {
  followUserToFriendsActionCreator,
  setCurrentPageActionCreator,
  setTotalUserCountActionCreator,
  setUsersActionCreator,
  unFollowUserToFriendsActionCreator,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users.jsx";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUserCount(res.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    if (p === this.props.currentPage) {
      return 0;
    }
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unFollowUserToFriends={this.props.unFollowUserToFriends}
        followUserToFriends={this.props.followUserToFriends}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    followUserToFriends: (userId) => {
      dispatch(followUserToFriendsActionCreator(userId));
    },
    unFollowUserToFriends: (userId) => {
      dispatch(unFollowUserToFriendsActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageActionCreator(currentPage));
    },
    setTotalUserCount: (totalUsersCount) => {
      dispatch(setTotalUserCountActionCreator(totalUsersCount));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
