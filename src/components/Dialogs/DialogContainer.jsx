import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialog";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
