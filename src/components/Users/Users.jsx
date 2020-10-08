import React from "react";
import Paginator from "../common/Paginator/Pagination";
import User from "./User";

let Users = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      {props.users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          unFollow={props.unFollow}
          follow={props.follow}
          key={u.id}
        />
      ))}
    </div>
  );
};

export default Users;
