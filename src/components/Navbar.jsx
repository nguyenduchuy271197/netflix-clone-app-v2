import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeToken } from "../features/user/userSlice";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.scrollPosition > 200 ? "rgba(0, 0, 0)" : "transparent"}; ;
`;

const InnerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: auto;
  padding-block: 20px;
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

const SigninButton = styled(Link).attrs({ to: "/login" })``;

const SignoutButton = styled.button.attrs({ type: "button" })``;

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeToken());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper scrollPosition={scrollPosition}>
      <InnerWrapper>
        <LogoBox>
          <Link to="/">
            <Logo />
          </Link>
        </LogoBox>

        {location.pathname === "/" && (
          <ActionBox>
            <SigninButton>Sign in</SigninButton>
          </ActionBox>
        )}

        {location.pathname === "/browser" && (
          <ActionBox>
            <SignoutButton onClick={onSignout}>Sign out</SignoutButton>
          </ActionBox>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Navbar;
