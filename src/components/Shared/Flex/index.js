import styled from "styled-components";
import { compose, flexbox, space} from 'styled-system';

export const Flex = styled('div')(
  {display: 'flex'},
  compose(flexbox, space)
)

export const Center = styled.div`
  display: flex;
  padding:10px;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`;

export default Flex;


