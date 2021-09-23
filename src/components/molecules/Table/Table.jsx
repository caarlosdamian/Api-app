import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../../atoms/button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Links } from "../../atoms/links";
import {
  TableHeader,
  TableRow,
  Thead,
  TableData,
  StartContainer,
} from "../../atoms/tableAtoms";

const TableStyled = styled.table`
  width: 50%;
`;

const Table = ({ data }) => {
  console.log(data);
  return (
    <TableStyled>
      <Thead>
        <TableRow>
          <TableHeader>Topic</TableHeader>
          <TableHeader>Starts</TableHeader>
          <TableHeader>View More</TableHeader>
        </TableRow>

        {data.map((item) => (
          <TableRow key={item.id}>
            <TableData title>{item.name}</TableData>
            <TableData>
              <StartContainer>
                <StarBorderIcon style={{ color: "#e9d02c" }} />
                {item.stargazerCount}
              </StartContainer>
            </TableData>
            <TableData>
              <Links
                to={{
                  pathname: `/${item.id}`,
                  state: { data: item },
                }}
              >
                <Button>View</Button>
              </Links>
            </TableData>
          </TableRow>
        ))}
      </Thead>
    </TableStyled>
  );
};

Table.propTypes = {
  data: PropTypes.array,
};
export default Table;
