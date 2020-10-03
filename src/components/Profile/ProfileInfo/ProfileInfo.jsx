import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profileInfo.photos.large} alt="img" />
        <ProfileStatus status={props.status} />
      </div>
    </div>
  );
};
export default ProfileInfo;
