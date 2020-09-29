import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src="https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png"
          alt="img"
        ></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profileInfo.photos.large} />
      </div>
    </div>
  );
};
export default ProfileInfo;
