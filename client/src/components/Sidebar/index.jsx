import styled from "styled-components";
import tw from "twin.macro";
import {
  FaCaretDown,
  FaCaretRight,
  FaCog,
  FaCogs,
  FaExclamationCircle,
  FaRegClipboard,
  FaRegHeart,
  FaRocketchat,
  FaThLarge,
  FaTimes,
  FaUsersCog,
} from "react-icons/fa";
import { BsBoxArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSidebarWidth,
  toggleVisibility,
} from "../../app/Features/ToggleSlice";
// Logo assets imports
import Logo from "../../assets/images/Logo.png";
import LogoWithText from "../../assets/images/Logo_plus_text.png";
// icons imports
import FeatherIcon from "feather-icons-react";

const Wrapper = styled.aside`
  ${tw`
        fixed
        left-0
        top-0
        h-screen
        bg-white
        z-10
        border
        border-[#e8eaed]
        border-r-[2px]
        flex
        flex-col
        flex-1
    `}

  padding: 30px 20px;
  /* width: ${(props) => (props.isMinimized ? "75px" : "300px")}; */
  transition: 0.3s ease-in-out;

  @media (max-width: 767px) {
    width: ${(props) => (props.isMinimized ? "75px" : `${props.width}px`)};
    display: ${(props) => (props.visibility ? "flex" : "none")} !important;
  }

  @media (min-width: 768px) {
    width: ${(props) => (props.isMinimized ? "75px" : `${props.width}px`)};
  }

  /* width: ${(props) => props.width}; */
`;

const Button = styled.div`
  ${tw`
        absolute
        p-[10px]
        bg-blue-500
        bottom-0
        left-0
        w-full
        flex
        justify-center
        items-center
        cursor-pointer
    `}
`;

const ExitButton = styled.span`
  ${tw`
        absolute
        top-[30px]
        -right-[40px]
        bg-white
        shadow-lg
        rounded-full
        p-2
        cursor-pointer
        inline-block
        md:hidden
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
        border
        border-gray-300
        my-[1.5rem]
    `}
`;

const NavigationContainer = styled.ul`
  ${tw`
        flex
        flex-col
        w-full
        mt-[2.5rem]
        ease-in-out
        duration-300
    `}
`;

const NavigationItem = styled.li`
  ${tw`
        flex justify-between
        mb-[2.5rem]
        cursor-pointer
        relative
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
        mb-[1rem]
        ml-[0.5rem]
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
        mr-[4px]
      
    `}
`;

const Title = styled.h5`
  ${tw`
        text-sm
        font-semibold
    `}
`;

const Caret = styled.span`
  ${tw`
        
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
        mb-[2.5rem]
        cursor-pointer
    `}

  color: ${(props) => (props.active ? "#347AE2" : "#7C8DB5")};
`;

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [displayIconTexts, setDisplayIconTexts] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showDropDown, setShowDropDown] = useState(null);
  const [activeLink, setActiveLink] = useState("dropdown1");

  const width = useSelector((state) => state.width.sidebarWidth);
  const visibility = useSelector((state) => state.width.visibility);

  const dispatch = useDispatch();

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

    // todo: I want to change the width of the sidebar on toggle. default is 200

    if (isMinimized) {
      // setIsSmallScreen(false);
      setDisplayIconTexts(false);

      // set the width to 75
      isSmallScreen
        ? dispatch(toggleSidebarWidth(150))
        : dispatch(toggleSidebarWidth(200));
      console.log("expanded");
    } else {
      // setIsSmallScreen(true);
      setDisplayIconTexts(true);
      dispatch(toggleSidebarWidth(75));
      console.log("minimized");
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
    <Wrapper
      isMinimized={isMinimized}
      visibility={visibility}
      isSmallScreen={isSmallScreen}
      className={isSmallScreen ? `w-[150px]` : `w-[${width}px]`}
    >
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
                <FeatherIcon icon="grid" />
              </Icon>
              {!displayIconTexts && <Title>Dashboard</Title>}
            </IconTitleContainer>
            <Caret>
              <FeatherIcon icon="chevron-down" />
            </Caret>
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
                <FeatherIcon icon="clipboard" />
              </Icon>
              {!displayIconTexts && <Title>Programs</Title>}
            </IconTitleContainer>
            <Caret>
              <span className="h-4 w-4 text-xs items-center justify-center bg-red-400 p-[6px] text-white rounded-full inline-flex">
                2
              </span>
            </Caret>
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
                <FeatherIcon icon="heart" />
              </Icon>
              {!displayIconTexts && <Title>Donations</Title>}
            </IconTitleContainer>
            <Caret>
              <FeatherIcon icon="chevron-down" />
            </Caret>
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
                <FeatherIcon icon="users" />
              </Icon>
              {!displayIconTexts && <Title>Volunteers</Title>}
            </IconTitleContainer>
            <Caret>
              <FeatherIcon icon="chevron-down" />
            </Caret>
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
                <FeatherIcon icon="settings" />
              </Icon>
              {!displayIconTexts && <Title>Settings</Title>}
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
                <FeatherIcon icon="alert-circle" />
              </Icon>
              {!displayIconTexts && <Title>Help Center</Title>}
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
                <FeatherIcon icon="message-circle" />
              </Icon>
              {!displayIconTexts && <Title>Contact Us</Title>}
            </IconTitleContainer>
          </Item>
        </BottomItem>
        <BottomItem>
          <Item>
            <IconTitleContainer>
              <Icon>
                <BsBoxArrowRight />
              </Icon>
              {!displayIconTexts && <Title>Logout</Title>}
            </IconTitleContainer>
          </Item>
        </BottomItem>
      </BottomContainer>
      <Button onClick={handleToggleSidebar}>
        <Caret>
          <FaCaretRight />
        </Caret>
      </Button>
      <ExitButton>
        <FaTimes onClick={() => dispatch(toggleVisibility())} />
      </ExitButton>
    </Wrapper>
  );
};

export default Sidebar;
