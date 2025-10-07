import { useState } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const errorValues = {
    name: "",
    link: "",
    weatherType: "",
  };
  const [errors, setErrors] = useState(errorValues);
  const errorMessages = {
    name: "Name must be at least 2 characters",
    link: "Please enter a valid URL",
    weatherType: "Please select a weather type",
  };

  function validateField(evt) {
    if (!evt.target.validity.valid) {
      setErrors({
        ...errors,
        [evt.target.name]: errorMessages[evt.target.name],
      });
    } else {
      setErrors({
        ...errors,
        [evt.target.name]: errorValues[evt.target.name],
      });
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    validateField(evt);
  }

  function handleReset() {
    setValues(defaultValues);
  }

  return { values, setValues, errors, setErrors, handleChange, handleReset };
}
