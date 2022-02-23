import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export const Editor = (props) => {
  const { displayName, language, value, onChange } = props;

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className="h-[100%] bg-blue-500 flex flex-col">
      <div className="basis-auto h-[10%]">{displayName}</div>
      <div className="basis-auto h-[100%]">
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="h-[100%]"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </div>
  );
};
