import styled from "styled-components";

export const Mode = styled.span`
  font-weight: 300;
  font-size: 18px;
  margin-right: 10px;
`;

export const Text = styled.text`
  font-weight: bold;
  font-size: ${ ({size})=> size || '18px'};
  color: ${ ({color})=> color || 'crimson' };
`;

export default Text;