import React, { ReactElement, useState } from "react";
import { yupResolver } from "@hookform/resolvers";
import { useForm } from "react-hook-form";

import { TextField } from "../ui/form/TextField";
import { AuthForm } from "./AuthForm";
import { SubmitButton } from "../ui/form/SubmitButton";
import { signupSchema } from "../../schema/signup.schema";

const PASSWORD_DESCRIPTION =
  "Minimum 8 characters, at least 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character";

export type SignupFormValues = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {};
function SignupForm({}: Props): ReactElement {
  const { register, handleSubmit, errors, formState } = useForm<
    SignupFormValues
  >({
    mode: "onChange",
    resolver: yupResolver(signupSchema),
  });

  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  const onShowPasswordClicked = () => {
    setPasswordIsShown((isShown) => !isShown);
  };

  const footer = (
    <>
      Already has an account?{" "}
      <AuthForm.FooterText href="/login">Log in now</AuthForm.FooterText>
    </>
  );

  return (
    <AuthForm.Form onSubmit={onSubmit} footer={footer} heading="Welcome Back!">
      <TextField<SignupFormValues>
        type="text"
        id="register_fullname"
        label="Full Name"
        name="fullname"
        errors={errors}
        register={register}
      />

      <TextField<SignupFormValues>
        type="email"
        id="register_email"
        label="Email"
        name="email"
        errors={errors}
        register={register}
      />

      <TextField<SignupFormValues>
        type={passwordIsShown ? "text" : "password"}
        id="register_password"
        label="Password"
        name="password"
        errors={errors}
        register={register}
        description={PASSWORD_DESCRIPTION}
      >
        <AuthForm.ShowPasswordIcon
          passwordIsShown={passwordIsShown}
          handleClick={onShowPasswordClicked}
        />
      </TextField>

      <TextField<SignupFormValues>
        type={passwordIsShown ? "text" : "password"}
        id="register_confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        errors={errors}
        register={register}
      />

      <SubmitButton disabled={!formState.isValid}>SIGN UP</SubmitButton>
    </AuthForm.Form>
  );
}

export { SignupForm };