import { useEffect, useState, ChangeEvent } from "react";

// 기본 인터페이스 정의
export interface FormErrors {
  [key: string]: string;
}

// getTextInputProps의 반환 타입
export interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

// useForm 훅의 제네릭 타입
const useForm = <T extends Record<string, string>>(
  initialValue: T,
  validate?: (values: T) => FormErrors
) => {
  const [values, setValues] = useState<T>(initialValue || ({} as T));
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (name: keyof T, value: string) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (name: keyof T) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const getTextInputProps = (name: keyof T): TextInputProps => ({
    value: values[name] || "",
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
