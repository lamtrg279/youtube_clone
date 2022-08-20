import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: ${({ theme }) => theme.soft};
  gap: 10px;
  padding: 20px 50px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  background-color: transparent;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Subtitle>to continue</Subtitle>
        <Input placeholder='Username' />
        <Input type='password' placeholder='Password' />
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder='Username' />
        <Input placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(US)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;
