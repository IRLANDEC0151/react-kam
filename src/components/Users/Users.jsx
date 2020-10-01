import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={s.avatarDiv}>
            <NavLink to={"/profile/" + u.id}>
              <div>
                <img
                  src={u.photos.small || userPhoto}
                  className={s.userPhoto}
                  alt="avatar"
                />
              </div>
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleIsFollowingInProgress(true, u.id);
                    userAPI.unFollowUsers(u.id).then((resultCode) => {
                      if (resultCode === 0) {
                        props.unFollowUserToFriends(u.id);
                      }
                      props.toggleIsFollowingInProgress(false, u.id);
                    });
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.toggleIsFollowingInProgress(true, u.id);

                    userAPI.followUsers(u.id).then((resultCode) => {
                      if (resultCode === 0) {
                        props.followUserToFriends(u.id);
                      }
                      props.toggleIsFollowingInProgress(false, u.id);
                    });
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
};

export default Users;
