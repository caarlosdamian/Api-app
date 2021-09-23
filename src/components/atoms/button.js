import styled from "styled-components";
import { mobile } from "../../responsive";

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

export const CardButton = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
`;

export const CardButtonStar = styled.button`
  padding: 10px;
  margin: 10px 0px;
  border: 1.5px solid crimson;
  background-color: white;
  color: crimson;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
