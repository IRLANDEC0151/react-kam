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
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/usersSelectors";
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
  debugger;
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
export default compose(
  connect(mapStateToProps, {
    acceptFollowUserToFriends,
    acceptUnFollowUserToFriends,
    toggleIsFollowingInProgress,
    getUsers: getUsersThunkCreator,
    follow: followThunkCreator,
    unFollow: unFollowThunkCreator,
  }),
  withAuthRedirect
)(UsersContainer);
