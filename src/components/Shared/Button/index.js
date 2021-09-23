import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Button = styled.button`
  width: 100px;
  border: none;
  padding: 10px 15px;
  background-color: darkblue;
  color: white;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  margin: 5px 0;
  &:hover {
    opacity: 0.9;
  }
  ${mobile({
    padding: "10px 5px",
    width: "70px",
    fontSize: "16px",
    margin: "0px 5px",
  })}
`;

export default Button;
