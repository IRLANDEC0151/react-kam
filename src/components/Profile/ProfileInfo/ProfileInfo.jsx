import React, { useState } from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusHooks from "./ProfileStatus";
import userPhoto from "../../../assets/img/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profileInfo) {
    return <Preloader />;
  }
  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (data) => {  
    props
      .saveProfile(data)
      .then(() => {
        setEditMode(false);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profileInfo.photos.large || userPhoto} alt="img" />
        {props.isOwner && <input type="file" onChange={mainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm
            initialValues={props.profileInfo}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profileInfo={props.profileInfo}
            isOwner={props.isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
        <ProfileStatusHooks
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && (
        <div>
          <button onClick={props.goToEditMode}>Редактировать</button>
        </div>
      )}
      <div>
        Looking for a job: {props.profileInfo.lookingForAJob ? "yes" : "no"}
      </div>
      {props.profileInfo.lookingForAJob && (
        <div>
          My professional skills: {props.profileInfo.lookingForAJobDescription}
        </div>
      )}
      <div>About me: {props.profileInfo.aboutMe ? "yes" : "no"}</div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(props.profileInfo.contacts).map((k) => {
          return (
            <Contact
              key={k}
              contactTitle={k}
              contactValue={props.profileInfo.contacts[k]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}:</b>
      {contactValue}
    </div>
  );
};
export default ProfileInfo;
