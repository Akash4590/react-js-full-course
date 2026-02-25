import { useState } from "react";

const usetoggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (newValue) => {
    if (typeof newValue === "boolean") {
      setValue(newValue);   // show or hide directly
    } else {
      setValue((prev) => !prev); // toggle
    }
  };

  return [value, toggleValue];
};

export default usetoggle;

