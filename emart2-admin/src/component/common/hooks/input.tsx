import { useState } from "react";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChangeHandler,
  };
};

export default useInput;
