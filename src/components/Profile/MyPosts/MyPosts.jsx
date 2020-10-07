import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength30 = maxLength(30);

const MyPosts = React.memo((props) => {
  let addPost = (value) => {
    props.addPost(value.newPostBody);
  };
  
  return (
    <div>
      <h3>My post</h3>
      <AddPostFormRedux onSubmit={addPost} />

      <div className={s.posts}>
        {props.posts.map((i) => (
          <Post message={i.message} key={i.id} />
        ))}
      </div>
    </div>
  );
});

const AddPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostBody"
          validate={[requiredField, maxLength30]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};
const AddPostFormRedux = reduxForm({
  form: "addPost",
})(AddPost);
export default MyPosts;
