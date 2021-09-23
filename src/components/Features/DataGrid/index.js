import React from "react";
import { shape, arrayOf, any, string, number } from "prop-types";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Button from "../../Shared/Button";
import Link from '../../Shared/Link'
import Flex from '../../Shared/Flex';
import {
  Header,
  Row,
  Thead,
  TableData,
} from "../../Shared/Table";
import { mobile } from "../../../responsive";

const Wrapper = styled.table`
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const DataGrid = ({ data }) => {
  return (
    <Wrapper>
      <Thead>
        <Row>
          <Header>Topic</Header>
          <Header>Starts</Header>
          <Header>View More</Header>
        </Row>

        {data.map((item) => (
          <Row key={item.id}>
          <TableData title="true">{item.name}</TableData>
          <TableData>
            <Flex flexDirection="row" alignItems="center">
              <StarBorderIcon style={{ color: "#e9d02c" }} />
              {item.stargazerCount}
            </Flex>
          </TableData>
          <TableData>
          
          <Link
              to={{
                pathname: `/details/${item.name}`,
                state: { data: item },
              }}
            >
              <Button>View</Button>
            </Link>
          </TableData>
        </Row>
      
        ))}
      </Thead>
    </Wrapper>
  );
};

DataGrid.propTypes = {
  data: arrayOf(
    shape({
      id: number,
      name: string,
      relatedTopics: any
    })
  )
}
export default DataGrid;
