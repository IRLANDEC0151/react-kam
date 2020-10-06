import React from "react";
// import s from "./ProfileStatus.module.css";

const ProfileStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  activateEditMode = () => {
    setEditMode(true);
  };

  deactivateEditMode = (e) => {
    setEditMode(false);
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};
export default ProfileStatusHooks;
