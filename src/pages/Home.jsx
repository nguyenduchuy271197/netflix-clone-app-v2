import styled from "styled-components";
import Navbar from "../components/Navbar";
import bg from "../images/home_bg.jpeg";
import { BsChevronRight } from "react-icons/bs";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
`;

const Main = styled.main`
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;
const InnerMain = styled.div`
  width: 40%;
`;
const TitleWrapper = styled.div`
  padding-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 60px;
  line-height: 1;
  margin-bottom: 20px;
`;
const SubTitle = styled.p`
  font-size: 25px;
`;

const FormWrapper = styled.div``;
const FormTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 20px;
`;

const EmailForm = styled.form`
  display: flex;
  justify-content: center;
  height: 70px;
`;
const EmailFormInput = styled.input.attrs({ placeholder: "Email Address" })`
  flex: 1;
  padding: 20px;
  font-size: 20px;
`;
const EmailFormButton = styled.button`
  font-size: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-inline: 30px;
  background-color: hsl(357, 92%, 47%);
  transition: 0.2s all;

  &:hover {
    background-color: hsl(357, 92%, 60%);
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Main>
        <InnerMain>
          <TitleWrapper>
            <Title>Unlimited movies, TV shows, and more.</Title>
            <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
          </TitleWrapper>
          <FormWrapper>
            <FormTitle>
              Ready to watch? Enter your email to create or restart your
              membership.
            </FormTitle>
            <EmailForm>
              <EmailFormInput />
              <EmailFormButton>
                <span>Get Started</span>
                <BsChevronRight />
              </EmailFormButton>
            </EmailForm>
          </FormWrapper>
        </InnerMain>
      </Main>
    </Wrapper>
  );
};

export default Home;
