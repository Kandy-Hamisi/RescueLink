import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { LoginAction } from "../../app/api_calls";
import { sleep } from "../../constants/functions";

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
    text-sm
    md:text-base
    text-[#0B0A37]
    text-center
    align-middle
  `}
`;
const LoginLink = styled.span`
  ${tw`
    text-[#347AE2]
    text-sm
    md:text-base
    font-semibold
    underline
    cursor-pointer
  `}
`;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const clearLocalstorage = (user) => {
      localStorage.clear();
    };
    // clearLocalstorage();
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // dispatch(LoginAction(dispatch, { email, password }));
      LoginAction(dispatch, { email, password }).then((user) => {
        setIsLoading(false);
        console.log("logged in");
        //Wait one second before attempting to navigate to the home page
        sleep(3000).then(() => {
          navigate("/");
          console.log("navigated");
        });
      });
    } catch (err) {
      setIsLoading(false);
      resetFields();
      console.log(err);
    }

    // window.location.href = "/";
    // auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   console.log(user);
    //   window.location.href = "/";
    //   // ...
    // });
  };
  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

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

        <ContinueButton onClick={handleLogin}>
          {isLoading ? "Loading..." : "Continue"}
        </ContinueButton>

        <LinkContainer>
          <LinkText>{"Don't have an account?"}</LinkText>
          <Link to="/signup">
            <LoginLink>Sign Up</LoginLink>
          </Link>
        </LinkContainer>
        {/* <button
          onClick={() =>
            auth.signOut().then(() => {
              console.log("signed out");
            })
          }
        >
          Sign Out
        </button> */}
      </Container>
    </Wrapper>
  );
};

export default Login;
