import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/lib/codemirror.css");
require("codemirror/mode/javascript/javascript");

export default function Editor(props) {
  var options = {
    lineNumbers: true,
    mode: "javascript",
    lineWrapping: true,
    height: 800
  };

  return (
    <CodeMirror
      value={props.content}
      options={options}
      onBeforeChange={props.onChange}
    />
  );
}
