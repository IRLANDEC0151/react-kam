import React from "react";
import s from "./User.module.css";
import userPhoto from "../../assets/img/user.png";
import { NavLink } from "react-router-dom";

let Users = ({ user, ...props }) => {
  return (
    <div>
      <div className={s.avatarDiv}>
        <NavLink to={"/profile/" + user.id}>
          <div>
            <img
              src={user.photos.small || userPhoto}
              className={s.userPhoto}
              alt="avatar"
            />
          </div>
        </NavLink>
        <div>
          {user.followed ? (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.unFollow(user.id);
              }}
            >
              UnFollow
            </button>
          ) : (
            <button
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>

      <div className={s.userInfo}>
        <div className={s.leftInfo}>
          <span>{user.name}</span>
          <span>{user.status}</span>
        </div>
        <div className={s.rightInfo}>
          <span>{"user.location.city"}</span>
          <span>{"user.location.country"}</span>
        </div>
      </div>
    </div>
  );
};

export default Users;
