import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Wrapper = styled.section`
    ${tw`
      w-full
      h-full 
    
    `}
  `;
  const Container = styled.section`
    ${tw`
      w-5
      h-5
      bg-gray-200
    
    `}
  `;

  useEffect(() => {}, []);

  return <Wrapper></Wrapper>;
};

export default Login;
