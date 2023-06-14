import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { auth } from "../../firebase/firebase";

const Wrapper = styled.div`
  ${tw`
  flex
    w-full
    h-full
    bg-[#F2F2F2]
    justify-center
    align-middle
  `}
  height: 100vh;
  width: 100vw;
`;
const Container = styled.div`
  ${tw`
    bg-white
    my-auto
    flex
    flex-col
    justify-center
    px-16
    py-0
    pb-6
    pt-0
    space-y-4
  `}
  width: 48%;
  height: 97%;
  border-radius: 12px;
`;
const HeaderContainer = styled.div`
  ${tw`
    
    flex
    flex-col
    space-y-2
    py-0
    
  `}
`;
const Title = styled.h2`
  ${tw`
    md:text-2xl
    text-center
    text-[#0B0A37]
    font-semibold
    py-0
  `}
`;
const Subtitle = styled.h2`
  ${tw`
  text-xs
    md:text-sm
    text-center
    text-[#7C8DB5]
    font-semibold
  `}
`;
const TextField = styled.input`
  ${tw`
    // bg-[#f0f0f0]
    py-2
    px-4
    border-[#f0f0f0]
    border-solid
    border-2
    rounded-md
    focus:outline-[#347AE2]
     
  `}
`;
const ContinueButton = styled.button`
  ${tw`
    bg-[#347AE2]
    p-2
    text-white
    rounded-md
    active:bg-[#0B0A37]
  `}
`;
const LinkContainer = styled.span`
  ${tw`
    flex
    space-x-2
    justify-center
  `}
`;
const LinkText = styled.span`
  ${tw`
    text-[#0B0A37]
  `}
`;
const LoginLink = styled.span`
  ${tw`
    text-[#347AE2]
    font-semibold
    underline
    cursor-pointer
  `}
`;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location.href = "/";
      // ...
    });
  };

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title>Log In</Title>

          <Subtitle>Sign in with your email and password</Subtitle>
        </HeaderContainer>

        <TextField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <ContinueButton onClick={handleLogin}>Continue</ContinueButton>

        <LinkContainer>
          <LinkText>{"Don't have an account?"}</LinkText>
          <Link to="/signup">
            <LoginLink>Sign Up</LoginLink>
          </Link>
        </LinkContainer>
      </Container>
    </Wrapper>
  );
};

export default Login;
