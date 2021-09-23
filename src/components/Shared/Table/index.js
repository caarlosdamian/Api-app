import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Thead = styled.thead`
  font-weight: bold;
`;
export const Row = styled.tr`
  height: 25px;
  ${mobile({ width: "150px", height: "50px" })}
`;
export const Header = styled.th`
  color: #f13958;
  font-size: 25px;
  border: 1px solid lightgray;
  ${mobile({ fontSize: "18px" })}
`;
export const TableData = styled.td`
  font-size: 18px;
  border: 1px solid lightgray;
  text-align: center;
  text-transform: ${(props) => (props.title ? "capitalize" : "")};
  ${mobile({ fontSize: "16px", margin: "0px 5px" })}
`;

