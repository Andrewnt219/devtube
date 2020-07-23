import React, { ReactElement } from "react";
import styled from "styled-components";
import { Logo } from "../../ui/Logo";
import { FooterMenu } from "./FooterMenu";

type Props = {
  height: string;
};

function Footer({ height }: Props): ReactElement {
  return (
    <Container style={{ height }}>
      <FooterMenu />

      <SubContainer>
        <Logo height="2rem" fill="white" />

        <Text>Copyright © 2020, Inc. All rights reserved.</Text>
      </SubContainer>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.footer<ContainerProps>`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;

  background: ${(p) => p.theme.palette.primary.dark};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: ${(p) => p.theme.palette.common.white};
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  margin-top: 1rem;
  display: block;
`;

export { Footer };
