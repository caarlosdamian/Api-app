import styled from "styled-components";
import { Mode } from "../../Shared/Text";
import Flex from '../../Shared/Flex'
import Brightness4TwoToneIcon from "@material-ui/icons/Brightness4TwoTone";

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const Navbar = ({ setTheme, theme }) => {
  return (
    <Container>
      <Wrapper>
          <Mode>Mode</Mode>
          <Brightness4TwoToneIcon
            style={{ cursor: "pointer" }}
            onClick={() => setTheme(!theme)}
          />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
