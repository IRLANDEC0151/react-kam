import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png"
          alt="img"
        ></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
