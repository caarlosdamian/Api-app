import styled from "styled-components";
import { Logo, Mode } from "../../atoms/typograpy";
import Brightness4TwoToneIcon from "@material-ui/icons/Brightness4TwoTone";
import { Links } from "../../atoms/links";

const Container = styled.div`
  height: 60px;
`;
const Containermode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const Navbar = ({ setTheme, theme }) => {
  return (
    <Container>
      <Wrapper>
        <Links to="/">
          <Logo>Github App</Logo>
        </Links>
        <Containermode>
          <Mode>Mode</Mode>
          <Brightness4TwoToneIcon
            style={{ cursor: "pointer" }}
            onClick={() => setTheme(!theme)}
          />
        </Containermode>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
