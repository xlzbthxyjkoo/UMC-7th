import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "../styles/SignupStyle";

const SignupPage = () => {
  // Yup validation schema
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다")
      .required("이메일은 필수 입력사항입니다"),
    password: yup
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
      .max(16, "비밀번호는 최대 16자까지 가능합니다")
      .required("비밀번호는 필수 입력사항입니다"),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
      .required("비밀번호 확인은 필수 입력사항입니다"),
    name: yup
      .string()
      .min(2, "이름은 최소 2자 이상이어야 합니다")
      .required("이름은 필수 입력사항입니다"),
    nickname: yup
      .string()
      .min(2, "닉네임은 최소 2자 이상이어야 합니다")
      .max(10, "닉네임은 최대 10자까지 가능합니다")
      .required("닉네임은 필수 입력사항입니다"),
    birthDate: yup
      .date()
      .max(new Date(), "생년월일이 현재 날짜보다 늦을 수 없습니다")
      .required("생년월일은 필수 입력사항입니다"),
    gender: yup
      .string()
      .oneOf(["male", "female", "other"], "성별을 선택해주세요")
      .required("성별은 필수 선택사항입니다"),
    phone: yup
      .string()
      .matches(
        /^01[0-9]-\d{4}-\d{4}$/,
        "올바른 전화번호 형식이 아닙니다 (01x-xxxx-xxxx)"
      )
      .required("전화번호는 필수 입력사항입니다"),
    terms: yup.boolean().oneOf([true], "이용약관에 동의해주세요"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("제출된 데이터:", data);
  };

  return (
    <S.FormContainer>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputWrapper>
          <S.Input
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register("email")}
            hasError={errors.email}
          />
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password")}
            hasError={errors.password}
          />
          {errors.password && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            {...register("passwordCheck")}
            hasError={errors.passwordCheck}
          />
          {errors.passwordCheck && (
            <S.ErrorMessage>{errors.passwordCheck.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="text"
            placeholder="이름을 입력해주세요"
            {...register("name")}
            hasError={errors.name}
          />
          {errors.name && (
            <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="text"
            placeholder="닉네임을 입력해주세요"
            {...register("nickname")}
            hasError={errors.nickname}
          />
          {errors.nickname && (
            <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="date"
            {...register("birthDate")}
            hasError={errors.birthDate}
          />
          {errors.birthDate && (
            <S.ErrorMessage>{errors.birthDate.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Select {...register("gender")} hasError={errors.gender}>
            <option value="">성별을 선택해주세요</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </S.Select>
          {errors.gender && (
            <S.ErrorMessage>{errors.gender.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Input
            type="tel"
            placeholder="전화번호를 입력해주세요 (01x-xxxx-xxxx)"
            {...register("phone")}
            hasError={errors.phone}
          />
          {errors.phone && (
            <S.ErrorMessage>{errors.phone.message}</S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.CheckboxWrapper>
          <S.Checkbox type="checkbox" {...register("terms")} />
          <S.CheckboxLabel>이용약관에 동의합니다</S.CheckboxLabel>
          {errors.terms && (
            <S.ErrorMessage>{errors.terms.message}</S.ErrorMessage>
          )}
        </S.CheckboxWrapper>

        <S.SubmitButton type="submit" disabled={!isValid} isValid={isValid}>
          가입하기
        </S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default SignupPage;
