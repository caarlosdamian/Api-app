import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/atoms/typograpy";
import Table from "../components/molecules/Table/Table";
import { getData } from "../api/getData";
import { LinearProgress } from "@material-ui/core";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const TableContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  height: 500px;
  width: 100%;
`;
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => setData(res?.data?.topic?.relatedTopics));
  }, []);
  return (
    <Container>
      <Wrapper>
        <TableContainer>
          <Header>Github Api</Header>
          {data.length === 0 ? (
            <LinearProgress style={{ width: "500px" }} />
          ) : (
            <InfoContainer>
              <Table data={data} />
            </InfoContainer>
          )}
        </TableContainer>
      </Wrapper>
    </Container>
  );
};

export default Home;
