import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "../components/Shared/Text";
import Flex, { Center } from '../components/Shared/Flex'
import Table from "../components/Features/DataGrid";
import { getData } from "../api/getData";
import { LinearProgress } from "@material-ui/core";
import { mobile } from '../responsive'

const Wrapper = styled(Flex)`
  width:100%;
  overflow: hidden;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
  ${mobile({ padding: "10px" })}
`;
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setData(res?.data?.topic?.relatedTopics || []);
    });
      
  }, []);
  return (
    <Wrapper>
        <Center>
          <Flex marginTop="10px">
            <Text size="60px">Github Api</Text>
          </Flex>
        </Center>
       <Center>
        {data.length === 0 ? (
          <LinearProgress style={{ width: "90%" }} />
        ) : (
            <InfoContainer>
              <Table data={data} />
            </InfoContainer>
          )}
       </Center>
        
    </Wrapper>
  );
};

export default Home;
