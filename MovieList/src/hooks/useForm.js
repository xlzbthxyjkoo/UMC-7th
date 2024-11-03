import { useEffect, useState } from "react";

const useForm = (initialValue, validate) => {
  // 초기값을 바로 설정
  const [values, setValues] = useState(initialValue || {});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const getTextInputProps = (name) => ({
    value: values[name] || "", // 값이 undefined일 경우 빈 문자열 반환
    onChange: (event) => handleChange(name, event.target.value),
    onBlur: () => handleBlur(name),
  });

  useEffect(() => {
    if (validate) {
      const newErrors = validate(values);
      setErrors(newErrors);
    }
  }, [validate, values]);

  return { values, errors, touched, getTextInputProps };
};

export default useForm;
