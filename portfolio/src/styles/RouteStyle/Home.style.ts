import styled from "styled-components";
/*
const Background = styled.div`
  padding-top: 10%;
  width: 100%;
  height: 100%;
  background-color: #36393f;
`;
const HomeContainer = styled.div`
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;*/
const Introduction = styled.h1`
  font-size: 60px;
  text-align: left;
  justify-content: center;
  padding-left: 5%;
`;
const Prompt = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  justify-content: center;
  text-align: left;
  padding-left: 80px;
  margin-top: 10px;
  font-size: 20px;
  width: 50%;
  padding-bottom: 10%;
`;
const Skills = styled.div`
  font-size: 25px;
  text-align: center;
  justify-items: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const List = styled.span`
  font-size: 20px;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Hobbies = styled.div``;

const Topic = styled.div``;

export {
  // HomeContainer,
  Introduction,
  // Background,
  CardWrapper,
  Prompt,
  Skills,
  List,
  Hobbies,
  Topic,
};
