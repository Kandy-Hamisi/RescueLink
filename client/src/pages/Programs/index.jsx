import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../../components/Layout";
import AuthCheck from "../../app/Features/AuthCheck";
import { useEffect, useState } from "react";
import EmbVideo from "../../components/Youtube";
import { getVideoId } from "../../constants/functions";
import { firestore } from "../../firebase/firebase";
import LoadingAnimation from "../../components/Loading";

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
const Title = styled.h1`
  ${tw`
  text-lg
    md:text-2xl
    pb-10
    font-Poppins
    text-[#0B0A37]
font-semibold
p-8
  `}
`;
const TagContainer = styled.div`
  ${tw`
    flex
    space-x-4
    p-8
    `}
`;
const Tag = styled.button`
  ${tw`
    text-slate-400
    font-bold
    text-sm
    hover:text-[#347AE2]
    `}
`;
const ProgramContainer = styled.div`
  ${tw`
   flex
   p-0
space-x-4
   
    `}
`;
const ProgramList = styled.div`
  ${tw`
    flex
    flex-col
    space-y-4
    
    `}
  width:40%;
`;
const ProgramCard = styled.div`
  ${tw`
        flex
        p-4
        bg-white
        rounded-xl 
    border-[#dcdfe4]
    border-[1px]
    space-x-2
    bg-green-500
    hover:bg-gray-50
    cursor-pointer
`}
  width:100%;
`;
const ProgramTextContainer = styled.div`
  ${tw`flex 
  space-y-0
flex-col
w-[90%]
h-[100%]
`}
`;
const ProgramTitle = styled.h2`
  ${tw`
 text-black 
 text-[16px] 
 font-semibold 
 leading-normal
`}
`;
const ProgramDescription = styled.p`
  ${tw`
  w-[100%]
  h-[50%]
  
  text-neutral-500 
  text-[0.5rem] 
  font-semibold 
`}
`;
const ProgramImageContainer = styled.div`
  ${tw`
  rounded-xl
  
`}
  width:100%;
  height: 100%;
`;
const ProgramImage = styled.img`
  ${tw`
  rounded-xl
  `}
  width:100%;
  height: 100%;
  object-fit: cover;
`;
const Program = styled.div`
  ${tw`
  flex
  flex-col
  space-y-4
  rounded-xl
  border-[#dcdfe4]
    border-[1px]
`}
  width: 70%;
`;
const ProgramLessonsList = styled.div`
  ${tw`
  flex
  flex-col
  space-y-4
  justify-center
`}
`;
const ProgramVideoCard = styled.div`
  ${tw`
  w-[100%]
  h-[50%]
  rounded-t-xl
  mx-auto
  overflow-hidden
  `}
`;
const ProgramDescriptionContainer = styled.div`
  ${tw`
  w-[100%]
  h-[100vh]
  p-4
  mx-auto
  `}
`;
const ProgramDescriptionText = styled.p`
  ${tw`
  text-xs
   w-[80%]
   
  `}
`;
const Splitter = styled.hr`
  ${tw`
        h-0
        border
        border-gray-200
        my-8
        w-[50%]
        mx-auto
    `}
`;
const ProgramDescriptionSubtitle = styled.h2`
  ${tw`
  text-sm
   text-slate-400
  
  `}
`;
const ProgramDaysList = styled.div`
  ${tw`
  flex
  flex-col
  space-y-4
  pt-0
  mx-auto
`}
`;
const ProgramDayTitle = styled.h2`
  ${tw`
  text-lg
  mx-auto
`}
`;
const ProgramDay = styled.button`
  ${tw`
  flex
  flex-col
  space-y-4
  text-[#7C8DB5]
  hover:text-[#347AE2]
`}
`;

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState();
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [selectedLink, setSelectedLink] = useState("");
  const [programDataList, setProgramDataList] = useState([{}]);
  const [isProgramLoading, setIsProgramLoading] = useState(false);
  const [isProgramListLoading, setIsProgramListLoading] = useState(false);

  const getProgram = async (program) => {
    // setIsProgramLoading(true);
    setSelectedProgram(program);
    setSelectedLessonIndex(0);
    console.log(selectedProgram);
    // setIsProgramLoading(false);
    // var data = [];
    // firestore
    //   .collection("programs")
    //   .doc(uid)
    //   .onSnapshot((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //       data.push(doc.data());
    //     });
    //     console.log(data);
    //     setSelectedProgram(data);
    //     setIsProgramLoading(false);
    //   });
  };
  useEffect(() => {
    const fetchPrograms = () => {
      try {
        setIsProgramListLoading(true);
        // fetch the programs from the database
        // set the programs to the state
        var data = [];
        firestore
          .collection("programs")
          .orderBy("time_added", "asc")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              console.log(doc.data());
              data.push(doc.data());
            });
          })
          .then(() => {
            console.log(data);
            setProgramDataList(data);
            setIsProgramListLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrograms();
  }, []);

  // const chooseProgram = (program) => {
  //   // selecting the program
  //   setselectedProgram(program);
  // };
  console.log("Program Data: ", programDataList);

  return (
    <Layout>
      <AuthCheck>
        <Wrapper>
          {isProgramListLoading ? (
            <LoadingAnimation />
          ) : (
            <>
              <Title>Programs</Title>
              <TagContainer>
                <Tag>All</Tag>
                <Tag>New</Tag>
                <Tag>Active</Tag>
                <Tag>Completed</Tag>
              </TagContainer>
              <ProgramContainer>
                <ProgramList>
                  {programDataList.map((program) => {
                    return (
                      <ProgramCard
                        key={program.uid}
                        onClick={async () => {
                          await getProgram(program);
                        }}
                      >
                        <ProgramImageContainer>
                          <ProgramImage
                            src={program.cover_img}
                            alt={program.Title}
                          />
                        </ProgramImageContainer>
                        <ProgramTextContainer>
                          <ProgramTitle>{program.Title}</ProgramTitle>
                          <ProgramDescription>
                            {program.Description}
                          </ProgramDescription>
                        </ProgramTextContainer>
                      </ProgramCard>
                    );
                  })}
                </ProgramList>
                {isProgramLoading ? (
                  <LoadingAnimation />
                ) : selectedProgram ? (
                  <Program>
                    <ProgramLessonsList>
                      <ProgramVideoCard>
                        {selectedLink == "" ? (
                          <></>
                        ) : (
                          <EmbVideo videoId={getVideoId(selectedLink)} />
                        )}
                      </ProgramVideoCard>
                      <ProgramDescriptionContainer>
                        <ProgramTitle
                          onClick={() => {
                            console.log(
                              selectedProgram.Lessons[selectedLessonIndex]
                            );
                          }}
                        >
                          {selectedProgram.Title}
                        </ProgramTitle>
                        <ProgramDescriptionSubtitle>
                          {selectedProgram.Lessons[selectedLessonIndex].name}
                        </ProgramDescriptionSubtitle>
                        <ProgramDescriptionText>
                          {
                            selectedProgram.Lessons[selectedLessonIndex]
                              .description
                          }
                        </ProgramDescriptionText>
                        <Splitter />
                        <ProgramDaysList>
                          {selectedProgram.Lessons.length > 0 ? (
                            selectedProgram.Lessons.map((lesson, index) => {
                              console.log(lesson);
                              return (
                                <ProgramDay
                                  key={lesson.name}
                                  onClick={() => {
                                    setSelectedLink(
                                      selectedProgram.Lessons[
                                        selectedLessonIndex
                                      ].youtube_link
                                    );
                                    setSelectedLessonIndex(index);
                                  }}
                                >
                                  <ProgramDayTitle>
                                    {lesson.name}
                                  </ProgramDayTitle>
                                </ProgramDay>
                              );
                            })
                          ) : (
                            <ProgramTitle className="mx-auto">
                              No Lessons
                            </ProgramTitle>
                          )}
                        </ProgramDaysList>
                      </ProgramDescriptionContainer>
                    </ProgramLessonsList>
                  </Program>
                ) : (
                  <Program>No program selected</Program>
                )}
              </ProgramContainer>
            </>
          )}
        </Wrapper>
      </AuthCheck>
    </Layout>
  );
};

export default Programs;
