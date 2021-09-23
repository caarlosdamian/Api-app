import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../../atoms/button";
import { Links } from "../../atoms/links";
import {
  TableHeader,
  TableRow,
  Thead,
  TableData,
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
            <TableData>{item.stargazerCount}</TableData>
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
