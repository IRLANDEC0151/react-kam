import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";


const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let state=props.dialogsPage
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    if (newMessageBody !== "") {
      props.sendMessage();
    }
  };
  let onNewMessageBodyChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageBody(text);
  };

  if(!props.isAuth){
    return <Redirect to={'/login'}/>
  }
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
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              value={newMessageBody}
              onChange={onNewMessageBodyChange}
              ref={newMessageElement}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
