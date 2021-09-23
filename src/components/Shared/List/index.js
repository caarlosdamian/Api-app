import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  font-size: ${(props) => (props.header ? "25px" : "")};
  font-weight: ${(props) => (props.header ? "500" : "300")};
  text-transform: ${(props) => (props.header ? "" : "capitalize")};
  margin: 20px 0px;
`;

export default List;
