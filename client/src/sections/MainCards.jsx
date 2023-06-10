import { FaIcons, FaUsers } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";
import { SummaryData, SummaryIcons } from "../constants";

const FiguresCard = styled.div`
  ${tw`
    col-span-3
    row-span-1
    rounded-lg
    border-[#dcdfe4]
    border-[1px]
    p-[20px]
    md:h-[200px]
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
  lg:text-2xl
  md:text-xl
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

const MainCards = () => {
  return (
    <FiguresCard>
      <Content>
        {SummaryData.map((item, index) => (
          <ContentCell key={item.id}>
            <FigureText>{item.figure.toLocaleString("en-US")}</FigureText>
            <Icon>{SummaryIcons[index]}</Icon>
          </ContentCell>
        ))}
      </Content>
    </FiguresCard>
  );
};

export default MainCards;
