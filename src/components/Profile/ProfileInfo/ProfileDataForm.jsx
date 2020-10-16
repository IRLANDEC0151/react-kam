import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import s from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, initialValues, error }) => {
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Сохранить</button>
      </div>
      {error && <div className={s.formError}>{error}</div>}
      <div>
        <b>
          Full name:
          {createField("text", "fullName", "fullName", Input, [], "")}
        </b>
      </div>
      <div>
        Looking for a job:
        {createField("checkbox", "", "lookingForAJob", Input, [], "")}
      </div>
      <div>
        My professional skills:
        {createField(
          "text",
          "skills",
          "lookingForAJobDescription",
          Textarea,
          [],
          ""
        )}
      </div>
      <div>
        About me:
        {createField("text", "about me", "aboutMe", Textarea, [], "")}
        <div>
          <b>Contacts</b>:{" "}
          {Object.keys(initialValues.contacts).map((key) => {
            return (
              <div>
                <b>
                  {key}:{" "}
                  {createField("text", key, "contacts." + key, Input, [], "")}
                </b>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};
const ProfileDataFormReduxFrom = reduxForm({ form: "ediProfile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxFrom;
