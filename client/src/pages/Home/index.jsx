import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../../components/Layout";
import { VictoryArea, VictoryChart, VictoryPie } from "victory";
import MainCards from "../../sections/MainCards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

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

const Wrapper = styled.section`
  ${tw`
    flex
    flex-col
    w-full

  `}/* md:grid
    grid-cols-4
    grid-rows-4
    w-full
    h-full
    overflow-x-hidden
    p-4
    grid-flow-row
    space-y-4
    space-x-4 */
`;

const ChatsContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    mt-6
    gap-8
  `}
`;

const ChartCard = styled.div`
  ${tw`
    flex-1
    rounded-lg
    border-[#dcdfe4]
    border-[1px]
    p-2
    pr-0
    mt-6
    md:mt-0
    mb-6
    lg:mb-0
  `}/* col-span-3
    row-span-2 */
`;
const SmallChartCard = styled.div`
  ${tw`
    
    rounded-lg
    border-[#dcdfe4]
    border-[1px]
    p-2 
    pr-0
  `}/* col-span-1
    row-span-2 */
`;

const Home = () => {
  // const dispatch = useDispatch();
  // const currentUser = useSelector((state) => state.currentUser);

  // useEffect(() => {
  //   dispatch(getUser)
  // }, [dispatch])

  return (
    <Layout>
      <Wrapper>
        <MainCards />

        <ChatsContainer>
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
            <button
              onClick={() => {
                // console.log(currentUser);
              }}
            >
              View More
            </button>
          </SmallChartCard>
        </ChatsContainer>
      </Wrapper>
    </Layout>
  );
};

export default Home;
