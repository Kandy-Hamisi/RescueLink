import styled from "styled-components"
import tw from "twin.macro"
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
    ${tw`
        flex
    `}
`;

const Content = styled.main`
    ${tw`
        flex-1
        border
        border-green-500
        border-[3px]
        
    `}
    

    @media(min-width: 768px) {
        margin-left: ${(props) => props.width ? `${props.width}px` : null} !important;
        
    }

    @media(max-width: 767px) {
        margin-left: 75px;
        
    }
`;

const MainContent = styled.section`
    ${tw`
        p-[10px]
    `}
`

const Layout = ({ children }) => {

    const width = useSelector(state => state.width.sidebarWidth);

  return (
    <Wrapper>
        <Sidebar />
        <Content width={width}>
            <Navbar />
            <MainContent>
                { children }
            </MainContent>
        </Content>
    </Wrapper>
  )
}

export default Layout