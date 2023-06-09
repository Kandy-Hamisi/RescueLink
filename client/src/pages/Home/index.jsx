import { FaRegClipboard, FaRegHeart, FaUsers } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../../components/Layout";
import { VictoryArea, VictoryChart, VictoryPie } from "victory";
import MainCards from "../../sections/MainCards";

// const ChartData = [
//   { x: 1, y: 2, y0: 0 },
//   { x: 2, y: 3, y0: 1 },
//   { x: 3, y: 5, y0: 1 },
//   { x: 4, y: 4, y0: 2 },
//   { x: 5, y: 6, y0: 2 },
// ];
const PieChartData = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 },
];
const num = 800000;
const Wrapper = styled.section`
  ${tw`
  flex
  flex-col
    md:grid
    grid-cols-4
    grid-rows-4
    w-full
    h-full
    overflow-x-hidden
    p-4
    grid-flow-row
    space-y-4
    space-x-4
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
const SmallChartCard = styled.div`
  ${tw`
    col-span-1
    row-span-2
    rounded-lg
    border-[#dcdfe4]
    border-[1px]
    p-2 
    pr-0
  `}
`;

const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <MainCards />
        {/* <FiguresCard>
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
        </FiguresCard> */}

        <ChartCard>
          <VictoryChart style={{ padding: "100px" }}>
            <VictoryArea
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              style={{ data: { fill: "#c43a31" } }}
              size={900}
              data={[
                { x: 1, y: 2, y0: 0 },
                { x: 2, y: 3, y0: 1 },
                { x: 3, y: 5, y0: 1 },
                { x: 4, y: 4, y0: 2 },
                { x: 5, y: 6, y0: 2 },
              ]}
            />
          </VictoryChart>
        </ChartCard>
        <SmallChartCard>
          <h1>Floods</h1>
          <VictoryPie data={PieChartData} />
        </SmallChartCard>
      </Wrapper>
    </Layout>
  );
};

export default Home;
