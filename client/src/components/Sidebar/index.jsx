import styled from "styled-components";
import tw from "twin.macro";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCog,
  FaExclamationCircle,
  FaRegClipboard,
  FaRegHeart,
  FaRocketchat,
  FaThLarge,
  FaUsers,
} from "react-icons/fa";
import { BsBoxArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import LogoWithText from "../../assets/images/Logo_plus_text.png";

const Wrapper = styled.aside`
  ${tw`
        fixed
        left-0
        top-0
        w-[75px]
        md:w-[150px]
        lg:w-[200px]
        h-screen
        bg-white
        z-10
        border-r
        border-[#dcdfe4]
        border-r-[1px]
    `}

  padding: 30px 20px;
  /* width: ${(props) => (props.isMinimized ? "75px" : "300px")}; */
  transition: 0.3s ease-in-out;

  @media (max-width: 767px) {
    width: ${(props) => (props.isMinimized ? "75px" : "150px")};
  }

  @media (min-width: 768px) {
    width: ${(props) => (props.isMinimized ? "75px" : "200px")};
  }
`;

const Button = styled.div`
  ${tw`
        absolute
        p-[10px]
        bg-transparent
        bottom-0
        left-0
        w-full
        flex
       justify-center
        items-center
        cursor-pointer
        text-[#7C8DB5]
        hover:text-[#347AE2]
    `}
`;

const LogoContainer = styled.div`
  ${tw`
        font-bold
        text-[20px]
        lg:text-[30px]
    `}
`;

const Splitter = styled.hr`
  ${tw`
        h-0
        border-[1px]
        border-[#dcdfe4]
        mb-[1rem]
    `}
`;

const NavigationContainer = styled.ul`
  ${tw`
        flex
        flex-col
        w-full
        mt-[2rem]
    `}
`;

const NavigationItem = styled.li`
  ${tw`
        flex justify-between
        mb-[2rem]
        cursor-pointer
        relative
        hover:text-[#347AE2]
        my-auto
    `}

  color: ${(props) => (props.active ? "#347AE2" : "#7C8DB5")};
`;

const DropDownContainer = styled.ul`
  ${tw`
        flex
        flex-col
        hidden
    `}
`;

const MobileDropDownContainer = styled.ul`
  ${tw`
        flex
        flex-col
        absolute
        left-[150px]
        bg-white
        z-10
        border
        border-gray-500
        rounded-[5px]
        p-1.5
        text-gray-500
    `}
`;

const DropDownItem = styled.li`
  ${tw`
        mb-[0.5rem]
        ml-[0.5rem]
        hover:text-[#347AE2]
    `}
`;

const Item = styled.div`
  ${tw`
        flex
        justify-between
        items-center
        w-full
    `}
`;

const IconTitleContainer = styled.span`
  ${tw`
        flex
        items-center
    `}
`;

const Icon = styled.span`
  ${tw`
        text-[18px]
        mr-[15px]
    `}
`;

const Title = styled.h5`
  ${tw`
        text-sm
    `}
`;

const BottomContainer = styled.ul`
  ${tw`
        mt-[1.5rem]
        flex
        flex-col
    `}
`;

const BottomItem = styled.li`
  ${tw`
        mb-[2rem]
        cursor-pointer
        hover:text-[#347AE2]
        
    `}

  color: ${(props) => (props.active ? "#347AE2" : "#7C8DB5")};
`;

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showDropDown, setShowDropDown] = useState(null);
  const [activeLink, setActiveLink] = useState("dropdown1");

  const handleMenuItemClick = (menuItem) => {
    setActiveLink(menuItem);

    if (showDropDown === menuItem) {
      setShowDropDown(null);
    } else {
      setShowDropDown(menuItem);
    }
  };

  const handleToggleSidebar = () => {
    setIsMinimized(!isMinimized);
    setShowDropDown(false);
    if (isMinimized) {
      setIsSmallScreen(false);
    } else {
      setIsSmallScreen(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as per your requirement
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize once on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper isMinimized={isMinimized}>
      {isMinimized ? (
        <LogoContainer>
          <img src={Logo} />
        </LogoContainer>
      ) : (
        <LogoContainer>
          <img src={LogoWithText} />
        </LogoContainer>
      )}
      <Splitter />
      <NavigationContainer>
        <NavigationItem
          onClick={() => handleMenuItemClick("dropdown1")}
          active={activeLink === "dropdown1"}
        >
          <Item>
            <IconTitleContainer>
              <Icon>
                <FaThLarge />
              </Icon>
              {!isSmallScreen && <Title>Dashboard</Title>}
            </IconTitleContainer>
          </Item>
          <DropDownContainer>
            <DropDownItem>Floods</DropDownItem>
            <DropDownItem>Fires</DropDownItem>
            <DropDownItem>Accidents</DropDownItem>
          </DropDownContainer>

          {showDropDown === "dropdown1" && (
            <MobileDropDownContainer>
              <DropDownItem>Floods</DropDownItem>
              <DropDownItem>Fires</DropDownItem>
              <DropDownItem>Accidents</DropDownItem>
            </MobileDropDownContainer>
          )}
        </NavigationItem>
        <NavigationItem
          onClick={() => handleMenuItemClick("dropdown2")}
          active={activeLink === "dropdown2"}
        >
          <Item>
            <IconTitleContainer>
              <Icon>
                <FaRegClipboard />
              </Icon>
              {!isSmallScreen && <Title>Programs</Title>}
            </IconTitleContainer>
          </Item>
          <DropDownContainer>
            <DropDownItem>Floods</DropDownItem>
            <DropDownItem>Fires</DropDownItem>
            <DropDownItem>Accidents</DropDownItem>
          </DropDownContainer>

          {showDropDown === "dropdown2" && (
            <MobileDropDownContainer>
              <DropDownItem onClick={() => setShowDropDown(false)}>
                Floods
              </DropDownItem>
              <DropDownItem>Fires</DropDownItem>
              <DropDownItem>Accidents</DropDownItem>
            </MobileDropDownContainer>
          )}
        </NavigationItem>
        <NavigationItem
          onClick={() => handleMenuItemClick("dropdown3")}
          active={activeLink === "dropdown3"}
        >
          <Item>
            <IconTitleContainer>
              <Icon>
                <FaRegHeart />
              </Icon>
              {!isSmallScreen && <Title>Donations</Title>}
            </IconTitleContainer>
          </Item>
          <DropDownContainer>
            <DropDownItem>Floods</DropDownItem>
            <DropDownItem>Fires</DropDownItem>
            <DropDownItem>Accidents</DropDownItem>
          </DropDownContainer>

          {showDropDown === "dropdown3" && (
            <MobileDropDownContainer>
              <DropDownItem onClick={() => setShowDropDown(false)}>
                Floods
              </DropDownItem>
              <DropDownItem>Fires</DropDownItem>
              <DropDownItem>Accidents</DropDownItem>
            </MobileDropDownContainer>
          )}
        </NavigationItem>
        <NavigationItem
          onClick={() => handleMenuItemClick("dropdown4")}
          active={activeLink === "dropdown4"}
        >
          <Item>
            <IconTitleContainer>
              <Icon>
                <FaUsers />
              </Icon>
              {!isSmallScreen && <Title>Volunteers</Title>}
            </IconTitleContainer>
          </Item>
          <DropDownContainer>
            <DropDownItem>Floods</DropDownItem>
            <DropDownItem>Fires</DropDownItem>
            <DropDownItem>Accidents</DropDownItem>
          </DropDownContainer>

          {showDropDown === "dropdown4" && (
            <MobileDropDownContainer>
              <DropDownItem onClick={() => setShowDropDown(false)}>
                Floods
              </DropDownItem>
              <DropDownItem>Fires</DropDownItem>
              <DropDownItem>Accidents</DropDownItem>
            </MobileDropDownContainer>
          )}
        </NavigationItem>
        <NavigationItem
          onClick={() => handleMenuItemClick("dropdown5")}
          active={activeLink === "dropdown5"}
        >
          <Item>
            <IconTitleContainer>
              <Icon>
                <FaCog />
              </Icon>
              {!isSmallScreen && <Title>Settings</Title>}
            </IconTitleContainer>
          </Item>
        </NavigationItem>
      </NavigationContainer>
      <Splitter />

      <BottomContainer>
        <BottomItem
          onClick={() => handleMenuItemClick("help")}
          active={activeLink === "help"}
        >
          <Item>
            <IconTitleContainer>
              <Icon>
                <FaExclamationCircle />
              </Icon>
              {!isSmallScreen && <Title>Help Center</Title>}
            </IconTitleContainer>
          </Item>
        </BottomItem>
        <BottomItem
          onClick={() => handleMenuItemClick("contact")}
          active={activeLink === "contact"}
        >
          <Item>
            <IconTitleContainer>
              <Icon>
                <FaRocketchat />
              </Icon>
              {!isSmallScreen && <Title>Contact Us</Title>}
            </IconTitleContainer>
          </Item>
        </BottomItem>
        <BottomItem>
          <Item>
            <IconTitleContainer>
              <Icon>
                <BsBoxArrowRight />
              </Icon>
              {!isSmallScreen && <Title>Logout</Title>}
            </IconTitleContainer>
          </Item>
        </BottomItem>
      </BottomContainer>
      <Button onClick={handleToggleSidebar}>
        {!isSmallScreen ? <FaArrowRight /> : <FaArrowLeft />}
      </Button>
    </Wrapper>
  );
};

export default Sidebar;
