import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  const path = "/dialogs/" + props.item.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}> {props.item.name} </NavLink>
    </div>
  );
};

export default DialogItem;
