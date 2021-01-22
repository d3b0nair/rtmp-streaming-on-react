import React from "react";

export default function CopyField(props) {
  async function CopyText() {
    await navigator.clipboard.writeText(`${props.value}`);
  }
  return (
    <React.Fragment>
      <h3>{props.label}:</h3>
      <div onClick={CopyText} className="ui action input">
        <input readOnly type="text" value={props.value} />
        <button className="ui teal right labeled icon button">
          <i className="copy icon"></i>
          Copy
        </button>
      </div>
    </React.Fragment>
  );
}
