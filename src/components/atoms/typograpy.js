import styled from "styled-components";
import { mobile } from "../../responsive";

export const Logo = styled.h1`
  font-weight: bold;
  color: crimson;
`;
export const Header = styled.h1`
  font-weight: bold;
  font-size: 50px;
  color: crimson;
  ${mobile({ display: "none" })}
`;
export const CardTitle = styled.span`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 35px;
`;
export const Mode = styled.span`
  font-weight: 300;
  font-size: 18px;
  margin-right: 10px;
`;
