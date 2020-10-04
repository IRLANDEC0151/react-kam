import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLength, requiredField } from "../../utils/validators/validators";
const maxLength100=maxLength(100)

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let addNewMessage = (value) => {
    console.log(value);
    props.sendMessage(value.newMessageBody);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {state.dialogsData.map((i) => (
          <DialogItem item={i} />
        ))}
      </div>
      <div className={s.messages}>
        <div>
          {state.messagesData.map((i) => (
            <Message item={i} />
          ))}
        </div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[requiredField, maxLength100]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({
  form: "dialogsAddMessageForm",
})(AddMessageForm);
export default Dialogs;
