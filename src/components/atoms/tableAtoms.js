import styled from "styled-components";

export const Thead = styled.thead`
  font-weight: bold;
`;
export const TableRow = styled.tr`
  height: 25px;
`;
export const TableHeader = styled.th`
  color: #f13958;
  font-size: 25px;
  border: 1px solid lightgray;
`;
export const TableData = styled.td`
  font-size: 18px;
  border: 1px solid lightgray;
  text-align: center;
  text-transform: ${(props) => (props.title ? "capitalize" : "")};
`;
export const StartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
