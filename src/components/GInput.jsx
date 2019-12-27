import React from "react";
import TextField from "@material-ui/core/TextField";

export default function GInput({ onChange, initialValue }) {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = event => {
    setValue(event.target.value);
    onChange(event);
  };
  return (
    <div className="component-app">
      <TextField multiline value={value} onChange={handleChange} />
    </div>
  );
}
