import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { auth, firestore } from "../../firebase/firebase";
import { addUser } from "../../firebase/firestore";

const Wrapper = styled.div`
  ${tw`
  flex
    w-full
    h-full
    bg-[#F2F2F2]
    justify-center
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
    my-auto
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

const Signup = () => {
  //   const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [IDnum, setIDnum] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleIDChange = (e) => {
    const { value } = e.target;
    // Remove non-digit characters from the input
    const cleanedValue = value.replace(/\D/g, "");
    // Limit the input to 8 digits
    const truncatedValue = cleanedValue.slice(0, 8);
    setIDnum(truncatedValue);
  };
  const passwordCheck = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  // Signup function
  const handleSignUp = async () => {
    setIsLoading(true);
    if (passwordCheck()) {
      auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
        console.log("uid: " + authUser.user.uid);
        firestore
          .collection("users")
          .doc(authUser.user.uid)
          .set({
            email: email,
            fullname: fullname,
            IDnum: IDnum,
            admin: false,
            uid: authUser.user.uid,
            phoneNumber: phoneNumber,
          })
          .then(() => {
            console.log("user added to database!");
            navigate("/login");
            // router.push("/login");
          });
      });
    }
  };

  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <Title>Sign Up</Title>
          <Subtitle>Create a new account</Subtitle>
        </HeaderContainer>

        <TextField
          placeholder="Full Name"
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <TextField
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <TextField
          placeholder="Phone Number"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          placeholder="ID number"
          type="number"
          value={IDnum}
          onChange={handleIDChange}
        />
        <ContinueButton onClick={handleSignUp}>Continue</ContinueButton>
        <LinkContainer>
          <LinkText>Already have an account?</LinkText>
          <Link to="/login">
            <LoginLink>Login</LoginLink>
          </Link>
        </LinkContainer>
      </Container>
    </Wrapper>
  );
};

export default Signup;
