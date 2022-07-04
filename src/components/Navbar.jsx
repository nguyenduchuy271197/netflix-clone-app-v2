import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: auto;
  padding-block: 25px;
`;

const LogoBox = styled.div`
  height: 100%;
`;

const ActionBox = styled.div`
  color: #fff;
  background-color: hsl(357, 92%, 47%);
  padding: 6px 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    background-color: hsl(357, 92%, 60%);
  }
`;

const AuthButton = styled(Link).attrs({ to: "/login" })``;

const Navbar = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <LogoBox>
        <Logo />
      </LogoBox>

      {location.pathname !== "/login" && (
        <ActionBox>
          <AuthButton>Sign in</AuthButton>
        </ActionBox>
      )}
    </Wrapper>
  );
};

export default Navbar;
