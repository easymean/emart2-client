import { useState } from "react";

function useForm<T>(initValue, validateFunc) {
  const [values, setValues] = useState<T>(initValue);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit =
    (
      submitHandler: (data: T, e?) => void,
      submitErrorHandler: (errors: Object, e?) => void
    ) =>
    (e) => {
      e.preventDefault();
      // const data = {} as T;
      // for (var i = 0; i < e.currentTarget.length - 1; i++) {
      //   const { name, value } = e.currentTarget[i];
      //   data[name] = value;
      // }
      if (!validateFunc(values)) {
        submitErrorHandler(new Error("필수요소를 채워주세요"));
        return;
      }
      submitHandler(values);
    };

  return {
    values,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
