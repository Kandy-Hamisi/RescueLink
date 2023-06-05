import { FaBell, FaCaretDown, FaSearch } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";
import { man } from "../../assets";

const Wrapper = styled.header`
  ${tw`
        w-full
        h-[100px]
        p-[1.5rem]
        lg:p-[2.5rem]
        flex
        items-center
        justify-between
        z-10
        
    `}
`;

const Left = styled.div`
  ${tw`
    
  `}
`;

const NavbarTitle = styled.h1`
  ${tw`
      text-sm
      md:text-lg
      lg:text-[30px]
      font-bold
      text-[#1c1b44]
  `}
`;

const Right = styled.div`
  ${tw`
      flex
      items-center
  `}
`;

const Icons = styled.div`
  ${tw`
      lg:flex
      items-center
      hidden
      text-[#1c1b44]
  `}
`;

const Icon = styled.span`
  ${tw`
      relative
      mr-[20px]
      text-[16px]
      md:text-[18px]
      lg:text-[20px]

  `}
`;

const User = styled.span`
  ${tw`
      flex
      items-center
      space-x-4
  `}
`;

const Profile = styled.img`
  ${tw`
    h-[50px]
    w-[50px]
    rounded-full
    
  `}
`;

const UserName = styled.h5`
  ${tw`
      hidden
      lg:inline-block    
  `}
`;

const NotificationDot = styled.span`
  ${tw`
      border
      border-red-500
      border-[3px]
      absolute
      top-0
      right-0
      rounded-full
  `}
`;

const Caret = styled.span`
  ${tw`
      cursor-pointer
  `}
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Left>
        <NavbarTitle>Welcome Back, Idriss</NavbarTitle>
      </Left>

      <Right>
        <Icons>
          <Icon>
            <FaSearch />
          </Icon>
          <Icon>
            <FaBell />
            <NotificationDot></NotificationDot>
          </Icon>
        </Icons>
        <User>
          <Profile src={man} alt="user-profile" />
          <UserName>Idriss Shulu</UserName>
          <Caret>
            <FaCaretDown />
          </Caret>
        </User>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
