// import styled from "styled-components"
// import tw from "twin.macro"
import { FaRegClipboard, FaRegHeart, FaUsers } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../../components/Layout";
const num = 800000;
const Container = styled.section`
  ${tw`
    grid
    grid-cols-4
    grid-rows-4
    w-full
    h-full
    overflow-x-hidden
    p-4
    grid-flow-col
    
    space-y-4
  `}
`;
const FiguresCard = styled.div`
  ${tw`
    col-span-3
    row-span-1
    rounded-lg
    border-[#dcdfe4]
    border-[1px]
    p-2
    pr-0
  `}
`;
const ChartCard = styled.div`
  ${tw`
    col-span-3
    row-span-2
    rounded-lg
    border-[#dcdfe4]
    border-[1px]
    p-2
    pr-0
  `}
`;
const Content = styled.div`
  ${tw`
  flex
  h-full
  w-full
  space-x-2
`}
`;
const ContentCell = styled.div`
  ${tw`
  flex
  h-full
  w-full
  border-r-[1px]
  border-[#dcdfe4]
  justify-center
  align-middle
  space-x-8
`}
`;
const FigureText = styled.span`
  ${tw`
  text-2xl
  flex
  align-middle
  my-auto
  font-bold
`}
`;
const Icon = styled.div`
  ${tw`
  text-[#347AE2]
  flex
  justify-center
  text-2xl
  align-middle
`}
`;
const Home = () => {
  return (
    <Layout>
      <Container>
        <FiguresCard>
          <Content>
            <ContentCell>
              <FigureText>{num.toLocaleString("en-US")}</FigureText>
              <Icon>
                <FaUsers style={{ marginTop: "auto", marginBottom: "auto" }} />
              </Icon>
            </ContentCell>
            <ContentCell>
              <FigureText>{num.toLocaleString("en-US")}</FigureText>
              <Icon>
                <FaRegClipboard
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                />
              </Icon>
            </ContentCell>
            <ContentCell>
              <FigureText>{num.toLocaleString("en-US")}</FigureText>
              <Icon>
                <FaRegHeart
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                />
              </Icon>
            </ContentCell>
          </Content>
        </FiguresCard>
        <ChartCard></ChartCard>
      </Container>
    </Layout>
  );
};

export default Home;
