import styled from "styled-components";
import tw from "twin.macro";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Wrapper = styled.div`
  ${tw`
        flex
        h-auto
        w-full
    `}
`;

const Content = styled.main`
  ${tw`
        flex-1
    `}

  @media(min-width: 768px) {
    margin-left: ${(props) =>
      props.width ? `${props.width + 20}px` : null} !important;
  }

  @media (max-width: 767px) {
    margin-left: 0px;
  }
`;

const MainContent = styled.section`
  ${tw`
        p-[10px]
    `}
`;

const Layout = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const width = useSelector((state) => state.width.sidebarWidth);
  const visibility = useSelector((state) => state.width.visibility);

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
    <Wrapper>
      <Sidebar />
      <Content width={width}>
        <Navbar />
        <MainContent>{children}</MainContent>
      </Content>
    </Wrapper>
  );
};

export default Layout;
