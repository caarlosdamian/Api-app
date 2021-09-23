import styled from "styled-components";
import { Logo } from "../../atoms/typograpy";
import Brightness4TwoToneIcon from "@material-ui/icons/Brightness4TwoTone";
import { Links } from "../../atoms/links";

const Container = styled.div`
  height: 60px;
  border-bottom: 1px solid lightgray;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Links to="/">
          <Logo>Github App</Logo>
        </Links>
        <Brightness4TwoToneIcon />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
