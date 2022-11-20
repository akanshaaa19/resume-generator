import React from "react";

function Question(props) {
  return (
    <input
      placeholder={props.placeholder}
      ref={props.inputRef}
      {...props}
      className={`bg-transparent border-b-2 border-slate-600 focus:border-indigo-400 py-2 px-4 my-2 ${props.className}`}
    />
  );
}

export default Question;
