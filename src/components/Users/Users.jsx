import React from "react";
import * as axios from "axios";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";

class Users extends React.Component {
  componentDidMount(){
    axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((res) => {
      this.props.setUsers(res.data.items);
    });
  }
  getUsers = () => {};
  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div className={s.avatarDiv}>
              <div>
                <img
                  src={u.photos.small || userPhoto}
                  className={s.userPhoto}
                  alt="avatar"
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unFollowUserToFriends(u.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.followUserToFriends(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>

            <div className={s.userInfo}>
              <div className={s.leftInfo}>
                <span>{u.name}</span>
                <span>{u.status}</span>
              </div>
              <div className={s.rightInfo}>
                <span>{"u.location.city"}</span>
                <span>{"u.location.country"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Users;
