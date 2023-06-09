import styled from "styled-components";
import tw from "twin.macro";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Wrapper = styled.div`
  ${tw`
        flex
        h-screen
    `}
`;

const Content = styled.main`
  ${tw`
        flex-1
        ml-[75px]
        md:ml-[150px]
        lg:ml-[200px]
    `}
`;

const MainContent = styled.section`
  ${tw`
        h-full
        w-full
    `}
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Navbar />
        <MainContent>{children}</MainContent>
      </Content>
    </Wrapper>
  );
};

export default Layout;
