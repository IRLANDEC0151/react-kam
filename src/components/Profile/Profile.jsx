import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profileInfo={props.profileInfo} 
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}

      />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
 