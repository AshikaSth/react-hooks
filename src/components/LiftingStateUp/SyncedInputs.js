import React, { useState } from "react";

export default function SyncedInputs() {
    const [text, setText] = useState("");

   function handleChange(e) {
    setText(e.target.value);
  } 
  return (
    <div>
      <Input label="First input" text={text} onChange={handleChange} />
      <Input label="Second input" text={text} onChange={handleChange}/>
    </div>
  );
}

function Input({label, text, onChange}) {
  return (
    <div>
      <label>
        {label}
        {''}
        <input name="text" value={text} onChange={onChange} />
      </label>
    </div>
  );
}
