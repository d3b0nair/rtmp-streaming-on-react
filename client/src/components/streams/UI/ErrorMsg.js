import React from "react";

export default function ErrorMsg(props) {
  return (
    <div className="ui negative message">
      <i className="close icon" onClick={props.onDissmiss}></i>
      <div className="header">{props.title}</div>
      <p>{props.msg}</p>
    </div>
  );
}
