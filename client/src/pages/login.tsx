import Head from "next/head";
import React, { ReactElement } from "react";
import styled from "styled-components";
import LoginHumanSvg from "../../public/static/svg/login.svg";

import { MainLayout } from "../components/layout/MainLayout";
import { LoginForm } from "../components/auth/LoginForm";
import { AuthLayout } from "../components/layout/AuthLayout";

type Props = {};

function Login({}: Props): ReactElement {
  return (
    <MainLayout>
      <Head>
        <title key="title">Login | Dooee</title>
      </Head>
      <AuthLayout.Container>
        <AuthLayout.SvgContainer>
          <LoginHumanSvg />
        </AuthLayout.SvgContainer>

        <LoginForm />
      </AuthLayout.Container>
    </MainLayout>
  );
}

export default Login;
