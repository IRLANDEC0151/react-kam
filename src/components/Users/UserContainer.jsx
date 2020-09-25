import { connect } from "react-redux";
import {
  followUserToFriendsActionCreator,
  setUsersActionCreator,
  unFollowUserToFriendsActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
