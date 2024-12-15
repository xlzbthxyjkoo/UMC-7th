import { FormErrors } from "../hooks/useForm";

interface ValidationValues {
  email: string;
  password: string;
  [key: string]: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateUser = (values: ValidationValues): FormErrors => {
  const errors: FormErrors = {}; // Changed from ValidationErrors

  if (!values.email) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요!";
  }

  if (!values.password) {
    errors.password = "비밀번호를 입력해주세요.";
  } else if (values.password.length < 8 || values.password.length > 16) {
    errors.password = "비밀번호는 8~ 16자 사이로 입력해주세요";
  }

  return errors;
};

export const validateLogin = (values: ValidationValues): FormErrors => {
  return validateUser(values);
};
