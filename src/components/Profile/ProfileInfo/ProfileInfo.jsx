import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusHooks from "./ProfileStatus";
import userPhoto from "../../../assets/img/user.png";

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <Preloader />;
  }
  const mainPhotoSelected=(e)=>{
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profileInfo.photos.large || userPhoto} alt="img" />
        {props.isOwner && <input type='file' onChange={mainPhotoSelected}/> }
        <ProfileStatusHooks status={props.status}  updateUserStatus={props.updateUserStatus} />
      </div>
    </div>
  );
};
export default ProfileInfo;
