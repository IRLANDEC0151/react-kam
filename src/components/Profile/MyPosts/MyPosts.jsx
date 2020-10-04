import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../../utils/validators/validators";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const maxLength30=maxLength(3)
const MyPosts = (props) => {

  let addPost = (value) => {
    props.addPost(value.newPostBody);
  };
  return (
    <div>
      <h3>My post</h3>

      <div className={s.posts}>
        {props.posts.map((i) => (
          <Post message={i.message} key={i.id} />
        ))}
      </div>
      <AddPostFormRedux onSubmit={addPost}/>
    </div>
  );
};

const AddPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostBody" validate={[requiredField, maxLength30]} />
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
