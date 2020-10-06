import React, { useEffect, useState } from "react";

const ProfileStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = (e) => {
    setEditMode(false);
    setStatus(e.currentTarget.value);
    props.updateUserStatus(e.currentTarget.value);
  };

  useEffect(() => {
    console.log("ue");
  }, [props.status]);
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
