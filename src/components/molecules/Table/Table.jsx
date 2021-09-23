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
import { mobile } from "../../../responsive";

const TableStyled = styled.table`
  width: 50%;
  ${mobile({ width: "100%" })}
`;

const Table = ({ data }) => {
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
            <TableData title="true">{item.name}</TableData>
            <TableData>
              <StartContainer>
                <StarBorderIcon style={{ color: "#e9d02c" }} />
                {item.stargazerCount}
              </StartContainer>
            </TableData>
            <TableData>
              <Links
                to={{
                  pathname: `/details/${item.name}`,
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
